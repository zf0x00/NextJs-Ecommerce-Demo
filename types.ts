export interface BillBoard {
  id: string;
  label: string;
  imageUrl: String;
}

export interface Category {
  id: string;
  name: string;
  billboard: BillBoard;
}

export interface Products {
  id: string;
  name: string;
  price: string;
  category: Category;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}
