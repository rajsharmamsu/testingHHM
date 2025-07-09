import { Check } from 'lucide-react';

type SubjectItemProps = {
  text: string;
};

export default function SubjectItem({ text }: SubjectItemProps) {
  return (
    <div className="text-left text-base ">
      <div className="item-wrap flex items-center gap-2">
        <Check className="w-6 h-6" />{text}
      </div> 
    </div>
  );
}
