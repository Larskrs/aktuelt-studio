import cn from '../../../lib/className';

export default function Progress({ max, value, style, barClass, containerClass }) {
  const percent = (value / max) * 100

  return (
    <div
      style={style}
      className={cn(
        "relative bg-transparent h-2", // replaces `.c`
        containerClass
      )}
    >
      <span
        className={cn(
          "absolute left-0 top-0 bottom-0 right-0 rounded transition-all duration-250 ease-linear", // replaces `.b`
          "bg-[hsl(var(--primary-hue),_12.5%,_25%)]",
          barClass
        )}
        style={{
          width: `${percent}%`,
        }}
      />
    </div>
  )
}
