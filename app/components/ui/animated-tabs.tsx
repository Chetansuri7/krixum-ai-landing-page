import React from "react";
import { cn } from "~/lib/utils";

interface AnimatedTabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function AnimatedTabs({ tabs, activeTab, onTabChange, className }: AnimatedTabsProps) {
  return (
    <div className={cn(
      "relative z-10 items-center overflow-x-auto sm:justify-center group inline-flex space-x-1 border border-border rounded-lg bg-muted p-0.5 w-full max-w-xs",
      className
    )}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "font-medium text-sm transition-all duration-300 hover:bg-transparent flex-1 rounded-md px-3 py-2 relative",
            activeTab === tab.id
              ? "text-foreground"
              : "text-muted-foreground"
          )}
          data-state={activeTab === tab.id ? "active" : "inactive"}
        >
          <span className="relative z-30 rounded-md">{tab.label}</span>
          {activeTab === tab.id && (
            <div className="absolute inset-0 z-20">
              <span className="absolute bg-background border border-border inset-0 shadow-2xl rounded-md transition-all duration-200"></span>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}