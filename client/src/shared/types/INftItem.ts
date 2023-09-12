export interface INftItem {
    userId?: Number;
    role?: string;
    id: string;
    name: string;
    description: string;
    interests: { name: string }[];
    authorName: string;
    companyName: string;
    images: { id?: number; name: string; url: string }[];
    price: string;

    [key: string]: any;
}
