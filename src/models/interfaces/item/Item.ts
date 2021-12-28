export interface Item {
        id: string;
        name: string;
        description: string;
        features: string;
        price: string;
        keywords: string;
        url: string;
        category: string;
        subcategory: string;
        imageurl:string|null;
    }
export interface Data {
    items: Item[];
}
export interface Products {
    data: Data;
}
export interface ProductsRootObject {
    products: Products;
}
