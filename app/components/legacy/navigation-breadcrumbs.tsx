import { useLocation } from "react-router";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { siteMeta, marketingSections } from "~/lib/site-metadata";

interface BreadcrumbItem {
  name: string;
  url: string;
  current?: boolean;
}

export function NavigationBreadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { name: "Home", url: "/" }
    ];

    if (pathname === "/") {
      breadcrumbs[0].current = true;
      return breadcrumbs;
    }

    // Find matching marketing section
    const section = marketingSections.find(s => s.path === pathname);
    if (section) {
      breadcrumbs.push({
        name: section.title,
        url: section.path,
        current: true
      });
    } else {
      // Handle other paths
      const pathSegments = pathname.split('/').filter(Boolean);
      let currentPath = '';
      
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const isLast = index === pathSegments.length - 1;
        
        breadcrumbs.push({
          name: segment.charAt(0).toUpperCase() + segment.slice(1),
          url: currentPath,
          current: isLast
        });
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (pathname === "/") {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-2">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((item, index) => (
            <div key={item.url} className="flex items-center">
              <BreadcrumbItem>
                {item.current ? (
                  <BreadcrumbPage>{item.name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.url}>
                    {item.name}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}