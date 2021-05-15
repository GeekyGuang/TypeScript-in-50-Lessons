type Article = {
    title: string,
    price: number,
    vat: number,
    stock?: number,
    description?: string
}

interface ShopItem {
    title: string;
    price: number;
    vat: number;
    stock?: number;
    description?: string;
}

class DVD implements ShopItem {
    title: string
    price: number
    vat: number
    reviews: {
        rating: number,
        content: string
    }[]
    constructor(title: string) {
        this.title = title
        this.price = 9.99
        this.vat = 0.2
    }
}

class Book implements Article {
    title: string
    price: number
    vat: number

    constructor(title: string) {
        this.title = title
        this.price = 39
        this.vat = 0.2
    }
}

interface ShopItem {
    reviews: {
        rating: number,
        content: string
    }[]
}

declare global {
    interface Window {
        isDevelopment: boolean
    }
}
