// Mapping from Sanity reference IDs to page slugs
const SANITY_REFERENCE_TO_SLUG_MAP: Record<string, string> = {
  // Main pages
  '97854198-13ae-465a-a7f0-3fbc869d9324': 'about',
  '6736d4a8-963d-4de6-9a26-7cc7ed78e4cb': 'contact', 
  'servicesPage': 'services',
  'projectsPage': 'projects',
  'blogPage': 'blog',
  '5c2bc44d-281b-4218-9478-790807dcef35': 'acknowledgements',
  'e28871c0-3534-4d60-93ac-868f15c43d91': 'terms-of-use',
  
  // Service pages (mapping to main services page for now)
  '5190dbb6-804b-4d95-ac1c-941847175e8b': 'services',
  'bfaff54e-2f32-4200-90b5-ffe5ed21700a': 'services', 
  'ad4c8601-9c9e-46e5-afaa-d9c861e9ffe5': 'services',
  '872469d7-a0d6-457a-b571-73e1d3c3197e': 'services',
  '14cf2647-0d6b-4fca-a687-97ed4ec9b5c3': 'services',
};

export function resolveSanityReference(ref: string): string {
  return SANITY_REFERENCE_TO_SLUG_MAP[ref] || ref;
}

export function transformNavigationItem(item: any): any {
  const transformed = { ...item };
  
  // Transform single page reference
  if (item.pageReference?._ref) {
    transformed.pageReference = {
      ...item.pageReference,
      slug: resolveSanityReference(item.pageReference._ref),
      _type: 'page' // Default type for MDX pages
    };
  }
  
  // Transform page references array
  if (item.pageReferences && Array.isArray(item.pageReferences)) {
    transformed.pageReferences = item.pageReferences.map((pageRef: any) => ({
      ...pageRef,
      slug: resolveSanityReference(pageRef._ref),
      _type: 'page', // Default type for MDX pages
      title: getPageTitle(resolveSanityReference(pageRef._ref))
    }));
  }
  
  return transformed;
}

export function transformNavigationSettings(navigationSettings: any): any {
  if (!navigationSettings) return navigationSettings;
  
  const transformed = { ...navigationSettings };
  
  // Transform navbar menu items
  if (transformed.navbarMenuItems) {
    transformed.navbarMenuItems = transformed.navbarMenuItems.map(transformNavigationItem);
  }
  
  // Transform footer columns
  if (transformed.footerColumns) {
    transformed.footerColumns = transformed.footerColumns.map((column: any) => ({
      ...column,
      menuItems: column.menuItems?.map(transformNavigationItem) || []
    }));
  }
  
  // Transform footer legal menu items  
  if (transformed.footerLegalMenuItems) {
    transformed.footerLegalMenuItems = transformed.footerLegalMenuItems.map(transformNavigationItem);
  }
  
  // Transform slide out menu items
  if (transformed.slideOutMenuItems) {
    transformed.slideOutMenuItems = transformed.slideOutMenuItems.map(transformNavigationItem);
  }
  
  return transformed;
}

function getPageTitle(slug: string): string {
  const titleMap: Record<string, string> = {
    'about': 'About',
    'contact': 'Contact',  
    'services': 'Services',
    'projects': 'Projects',
    'blog': 'Blog',
    'acknowledgements': 'Acknowledgements',
    'terms-of-use': 'Terms of Use',
    'privacy-policy': 'Privacy Policy'
  };
  
  return titleMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');
}