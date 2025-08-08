import { Badge } from "~/components/ui/badge";

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
        <Badge variant="secondary" className="w-fit">
          <div className="mr-2 size-2 rounded-full bg-gradient-to-r from-[#FB923C] via-[#F472B6] to-[#E879F9]"></div>
          {badge}
        </Badge>
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