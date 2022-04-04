export class Product {
    private id?: number;
    private name?: string;
    private description?: string;
    private shop?: string;
    private actualStock?: number;

    constructor(id: number, name: string, description: string, shop: string, actualStock: number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.shop = shop;
        this.actualStock = actualStock;
    }
}