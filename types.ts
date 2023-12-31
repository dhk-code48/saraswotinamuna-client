export interface Site {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  carousels: Carousel[];
  authors: Author[];
  billboards: Billboard[];
  categories: Category[];
  subCategories: SubCategory[];
  blog: Blog[];
}

export interface Carousel {
  id: string;
  siteId: string;
  label: string;
  imageUrl: string;
  site: Site;
  createdAt: Date;
  updatedAt: Date;
}

export interface Billboard {
  id: string;
  siteId: string;
  site: Site;
  label: string;
  description: string;
  imageUrl: string;
  categories: Category[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  siteId: string;
  site: Site;
  billboardId: string;
  billboard: Billboard;
  name: string;
  blogs: Blog[];
  subCategory: SubCategory[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SubCategory {
  id: string;
  siteId: string;
  site: Site;
  categoryId: string;
  category: Category;
  blogs: Blog[];
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Author {
  id: string;
  name: string;
  imageUrl: string;
  siteId: string;
  site: Site;
  blogs: Blog[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Blog {
  id: string;
  siteId: string;
  site: Site;
  categoryId: string;
  category: Category;
  authorId: string;
  author: Author;
  title: string;
  content: string;
  headline: string;
  isFeatured: boolean;
  isArchived: boolean;
  subCategoryId: string;
  subCategory: SubCategory;
  createdAt: Date;
  updatedAt: Date;
}
