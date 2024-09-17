export interface Categoria {
    id: string;
    slug: string;
    body: string;
    collection: string;
    data: {
      wide?: boolean; // Optional property
      title: string;
      description: string;
      slug: string;
      price: number;
      urlTB: string;
      image: string;
    };
  }