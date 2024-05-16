import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type TopCardProps = {
  title: string;
  period: string;
  iconSrc?: string;
};

export default function TopCard({ title, period, iconSrc }: TopCardProps) {
  return (
    <section className="flex justify-between text-white">
      <div className="h-full flex flex-col items-start justify-start font-semibold">
        <span className="text-xs mb-[3px]">축제 홈</span>
        <h1 className="text-[22px] font-bold mb-[6px]">{title}</h1>
        <p className="text-sm">{period}</p>
      </div>
      <Avatar className="w-[100px] h-[100px]">
        <AvatarImage src={iconSrc} alt="avatar" />
        <AvatarFallback className=" bg-gray-900">이미지 없음</AvatarFallback>
      </Avatar>
    </section>
  );
}
