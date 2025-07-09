import { get } from 'http';
import { useEffect } from 'react';

export default function useStackScroll() {
  useEffect(() => {
 
    const handleScroll = () => {
       
      const stackContainer = document.querySelector('.stack-scroll-container');
     
      if (!stackContainer) return;

      const card1 = document.querySelector('.card_1') as HTMLElement;
      const card2 = document.querySelector('.card_2') as HTMLElement;
      const card3 = document.querySelector('.card_3') as HTMLElement;

      if (!card1 || !card2 || !card3) return;

      const minScroll = 100;
      const maxScroll = 500;

      const stackTop = stackContainer.getBoundingClientRect().top;

      const card2Top = card2.getBoundingClientRect().top;
      const card3Top = card3.getBoundingClientRect().top;

      const getProgress = (top: number) => {
        let progress = (top - minScroll) / (maxScroll - minScroll);
       
        return Math.max(0, Math.min(1, progress));
      };
      const progress2 = getProgress(card2Top);
      const progress3 = getProgress(card3Top);

      if (stackTop <= 0 && window.innerWidth >= 991) {
        const animateCard = (
          card: HTMLElement,
          progress: number,
          minOpacity: number,
          maxOpacity: number,
          minBlur: number,
          maxBlur: number
        ) => {
          const opacity = minOpacity + (maxOpacity - minOpacity) * progress;
          const blur = minBlur + (maxBlur - minBlur) * progress;

          card.style.opacity = `${opacity}`;
          card.style.filter = `blur(${blur}rem)`;
          // card.style.transform = `translateY(${(1 - progress) * 50}px)`;
        };

        animateCard(card1, progress2, 0.9, 1, 1, 0);
        animateCard(card2, progress3, 0.9, 1, 1, 0);
      } else {
        [card1, card2, card3].forEach((card) => {
          card.style.opacity = '1';
          card.style.filter = 'blur(0rem)';
          card.style.transform = 'translateY(0px)';
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
