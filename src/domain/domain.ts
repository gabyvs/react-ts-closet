export interface Data {
    closet: Array<Item>;
}

export interface Item {
    category: string;
    subcategory: string;
    name: string;
    description?: string;
    used: number;
    lastUsed: number
}
