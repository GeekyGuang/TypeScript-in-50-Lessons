// class Discount {
//     isPercentage
//     amount

//     constructor(isPercentage, amount) {
//         this.isPercentage = isPercentage
//         this.amount = amount
//     }

//     apply(article) {
//         if (this.isPercentage) {
//             article.price = article.price - (article.price * this.amount)
//         } else {
//             article.price = article.price - this.amount
//         }
//     }
// }

class Discount {
    isPercentage: boolean
    amount: number

    constructor(
        isPercentage: boolean,
        amount: number) {
        this.isPercentage = isPercentage
        this.amount = amount
    }

    apply(article: Article) {
        if (this.isPercentage) {
            article.price = article.price - (article.price * this.amount)
        } else {
            article.price = article.price - this.amount
        }
    }
}

const discount: Discount = new Discount(false, 10)
discount.apply({
    price: 39,
    vat: 0.2,
    title: 'Form Design Patterns'
})