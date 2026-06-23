export const projectCategories = [
  'All',
  'Product',
  'AI & Search',
  'SaaS',
  'E-commerce',
  'Service Design',
  'Research',
  'Academic',
] as const;

export type ProjectCategoryFilter = (typeof projectCategories)[number];
