import svgPaths from "./svg-44pza7rknm";
import imgWhatsAppImage20250505At60001Pm from "figma:asset/6864acc6fb7db0b9926739261b9b35043d2d0ec7.png";
import { imgWhatsAppImage20250505At60001Pm1 } from "./svg-lc758";

function MaskGroup() {
  return (
    <div
      className="absolute contents left-0 top-[205px]"
      data-name="Mask group"
    >
      <div
        className="[background-size:auto,_cover] absolute bg-[position:0%_0%,_50%_50%] h-[2560px] left-[-47px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[47px_1536px] mask-size-[1600px_362px] opacity-80 top-[-1331px] w-[1927px]"
        data-name="WhatsApp Image 2025-05-05 at 6.00.01 PM"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url('${imgWhatsAppImage20250505At60001Pm}')`,
          maskImage: `url('${imgWhatsAppImage20250505At60001Pm1}')`,
        }}
      />
    </div>
  );
}

function ArrowForward24DpE8EaedFill0Wght400Grad0Opsz241() {
  return (
    <div
      className="relative shrink-0 size-5"
      data-name="arrow_forward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g
          clipPath="url(#clip0_4_159)"
          id="arrow_forward_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1"
        >
          <path
            d={svgPaths.p3054b280}
            fill="var(--fill-0, #081E2D)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_159">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1000002323() {
  return (
    <div
      className="absolute bg-[#ffa201] box-border content-stretch flex flex-row gap-2 items-center justify-center px-[50px] py-[17px] rounded-[81px] top-[410px]"
      style={{ left: "calc(41.6667% + 16.3333px)" }}
    >
      <div className="font-['DM_Sans:Black',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#081e2d] text-[18px] text-left text-nowrap uppercase">
        <p className="block leading-[normal] whitespace-pre">APPLY NOW</p>
      </div>
      <ArrowForward24DpE8EaedFill0Wght400Grad0Opsz241 />
    </div>
  );
}

function Group427321356() {
  return (
    <div className="absolute contents left-1/2 top-[410px] translate-x-[-50%]">
      <Frame1000002323 />
    </div>
  );
}

function Group427321991() {
  return (
    <div
      className="absolute contents top-[306px]"
      style={{ left: "calc(25% + 105px)" }}
    >
      <div
        className="absolute font-['DM_Sans:Regular',_sans-serif] leading-[0] not-italic text-[#ffffff] text-[18px] text-center text-nowrap top-[362px] translate-x-[-50%]"
        style={{ left: "calc(50% + 0.5px)" }}
      >
        <p className="block leading-[23px] whitespace-pre">
          Take the First Step Toward a Bright Future with MSU
        </p>
      </div>
      <div className="absolute font-['DM_Sans:Bold',_sans-serif] leading-[0] left-1/2 not-italic text-[#ffffff] text-[40px] text-center text-nowrap top-[306px] tracking-[-1.2px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[48px] whitespace-pre">
          Don’t Wait! Grab Your Seat Now!
        </p>
      </div>
      <Group427321356 />
    </div>
  );
}

function Group427321990() {
  return (
    <div className="absolute contents left-1/2 top-[306px] translate-x-[-50%]">
      <Group427321991 />
    </div>
  );
}

function Group427321992() {
  return (
    <div className="absolute contents left-0 top-[205px]">
      <div
        className="absolute h-[362px] left-1/2 top-[205px] translate-x-[-50%] w-[1600px]"
        style={{
          backgroundImage:
            "linear-gradient(207.853deg, rgb(255, 206, 0) 0%, rgb(255, 177, 17) 99.21%)",
        }}
      />
      <MaskGroup />
      <Group427321990 />
    </div>
  );
}

export default function WiseCourse() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Wise course">
      <Group427321992 />
    </div>
  );
}