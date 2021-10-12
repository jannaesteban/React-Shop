export type Product = {
    id: number;
    img: string;
    description?: string;
    name: string;
    price: string;
    category: string;
  };

  export type AllPageContent = {
    img: string;
    title: string;
    type: string;
  }

  export type SearchContextState ={
    searchName : string;
    addSearch : (name : string) =>void;
  }