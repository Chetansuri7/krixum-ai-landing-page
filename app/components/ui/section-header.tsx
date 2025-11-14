interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        centered ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
