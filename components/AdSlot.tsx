type AdSlotProps = {
  slot: string;
  format?: "horizontal" | "vertical" | "rectangle";
  className?: string;
};

export default function AdSlot({ slot, format = "horizontal", className = "" }: AdSlotProps) {
  return (
    <div
      className={`ad-slot flex items-center justify-center border border-dashed border-[#E5E7EB] bg-black/[0.03] text-[11px] text-[#9CA3AF] ${
        format === "vertical"
          ? "min-h-64 w-full"
          : format === "rectangle"
            ? "min-h-64 w-full max-w-sm"
            : "min-h-[90px] w-full"
      } ${className}`}
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      aria-hidden="true"
    >
      Espacio publicitario
    </div>
  );
}
