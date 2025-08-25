export function DividerVerticalCubes() {
  return (
    <div className="h-[calc(100%+48px)] w-[1px] bg-default-200 -mt-[24px] relative flex-shrink-0">
      <div className="w-[6px] h-[6px] bg-primary absolute top-[24px] translate-y-[-50%] translate-x-[-50%]" />
      <div className="w-[6px] h-[6px] bg-primary absolute bottom-[24px] translate-y-[50%] translate-x-[-50%]" />
    </div>
  )
}
