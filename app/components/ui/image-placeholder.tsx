interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  className?: string;
  children?: React.ReactNode;
  gradient?: string;
}

export function ImagePlaceholder({ 
  width = 400, 
  height = 300, 
  className = "", 
  children,
  gradient = "from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"
}: ImagePlaceholderProps) {
  return (
    <div 
      className={`bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center ${className}`}
      style={{ width: width, height: height }}
    >
      {children || (
        <div className="text-center text-gray-500 dark:text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">Image Placeholder</span>
        </div>
      )}
    </div>
  );
}