type Article = {
    title: string,
    price: number,
    vat: number,
    stock: number,
    description: string
}

const a = {
    title: 'Helvetica',
    price: 6.66,
    vat: 0.19,
    stock: 1000,
    description: '90 minutes of gushing about Helvetica',
    extra: 'haha'
}

function createArticleElement(article: Article):
    string {
    return article.title
}

createArticleElement(a)