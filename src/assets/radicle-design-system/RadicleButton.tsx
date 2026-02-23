interface RadicleButtonProps {
  children: React.ReactNode;
  onHover?: () => void;
  onPress?: () => void;
  onOut?: () => void;
  onUp?: () => void;
}

export default function RadicleButton({
  children,
  onHover,
  onPress,
  onOut,
  onUp,
}: RadicleButtonProps) {
  return (
    <button
      onMouseOver={onHover}
      onMouseDown={onPress}
      onMouseOut={onOut}
      onMouseUp={onUp}
    >
      <div className="font-Franklin font-semibold txt-primary group flex flex-col w-fit">
        <div className="flex">
          <div className="w-1 h-[2px]" />
          <div className="w-full h-[2px] bg-[#7070FF] group-hover:bg-[#8585FF] group-active:bg-[#7070FF]" />
          <div className="w-1 h-[2px]" />
        </div>
        <div className="flex group">
          <div className="w-[2px] h-[2px]" />
          <div className="w-[2px] h-[2px] bg-[#7070FF] group-hover:bg-[#8585FF] group-active:bg-[#7070FF]" />
          <div className="w-full h-[2px] bg-[#8585FF] group-hover:bg-[#9497FF] group-active:bg-[#5555FF]" />
          <div className="w-[2px] h-[2px] bg-[#7070FF] group-hover:bg-[#8585FF] group-active:bg-[#7070FF]" />
          <div className="w-[2px] h-[2px]" />
        </div>
        <div className="flex">
          <div className="w-[2px] bg-[#7070FF] group-hover:bg-[#8585FF]" />
          <div className="w-[2px] bg-[#7070FF] group-hover:bg-[#8585FF] group-active:bg-[#5555FF]" />
          <div className="flex w-fit px-2 py-1 h-full bg-[#7070FF] group-hover:bg-[#8585FF] group-active:bg-[#7070FF] items-center gap-1.5 whitespace-nowrap">
            {children}
          </div>
          <div className=" w-[2px] bg-[#5555FF] group-hover:bg-[#7070FF] group-active:bg-[#9494FF]" />
          <div className=" w-[2px] bg-[#5555FF] group-hover:bg-[#7070FF]" />
        </div>
        <div className="flex group">
          <div className="w-[2px] h-[2px]" />
          <div className="w-[2px] h-[2px] bg-[#7070FF] group-hover:bg-[#7070FF]" />
          <div className="w-full h-[2px] bg-[#5555FF] group-hover:bg-[#7070FF] group-active:bg-[#9494FF]" />
          <div className="w-[2px] h-[2px] bg-[#5555FF] group-hover:bg-[#7070FF]" />
          <div className="w-[2px] h-[2px]" />
        </div>
        <div className="flex">
          <div className="w-1 h-[2px]" />
          <div className="w-full h-[2px] bg-[#5555FF] group-hover:bg-[#7070FF]" />
          <div className="w-1 h-[2px]" />
        </div>
      </div>
    </button>
  );
}
