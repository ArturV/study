export type TProduct = {
  id: number;
  title: string;
  price: number | null;
  description: string | null;
  category: string | null;
  image: string;
  rating: {
    rate: number | null;
    count: number | null;
  };
};

export type TProductProps = {
  product: TProduct;
};
