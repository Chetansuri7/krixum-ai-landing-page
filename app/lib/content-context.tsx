import React, { createContext, useContext } from 'react';
import type { SiteContent } from './content-types';
import { siteContent } from './content-data';

interface ContentContextType {
  content: SiteContent;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  return (
    <ContentContext.Provider value={{ content: siteContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}

// Convenience hooks for specific content sections
export function useHeroContent() {
  const { content } = useContent();
  return content.hero;
}

export function useModelsContent() {
  const { content } = useContent();
  return content.models;
}

export function useFeaturesContent() {
  const { content } = useContent();
  return content.features;
}

export function usePricingContent() {
  const { content } = useContent();
  return content.pricing;
}

export function useDataToolsContent() {
  const { content } = useContent();
  return content.dataTools;
}

export function useFAQContent() {
  const { content } = useContent();
  return content.faq;
}