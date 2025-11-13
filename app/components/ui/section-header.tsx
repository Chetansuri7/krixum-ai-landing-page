interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ 
  badge, 
  title, 
  description, 
  centered = false,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start'} ${className}`}>
      {badge && (
        <span
          data-slot="badge"
          className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground w-fit"
        >
          <div className="mr-2 size-2 rounded-full bg-primary"></div>
          {badge}
        </span>
      )}
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
