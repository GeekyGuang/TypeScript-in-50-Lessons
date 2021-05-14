const defaultOrder = {
    articles: [
        {
            price: 1200.50,
            vat: 0.2,
            title: 'Macbook Air Refurbished - 2013'
        },
        {
            price: 9,
            vat: 0,
            title: 'I feel smashing subscription'
        }
    ],
    customer: {
        name: 'Fritz Furball',
        address: {
            city: 'Smashing Hill',
            zip: '90210',
            street: 'Whisker-ia Lane',
            number: '1337'
        },
        dateOfBirth: new Date(2006, 9, 1)
    }
}

type Order = typeof defaultOrder

function checkOrders(orders: Order[]) {
    let valid = true;
    for (let order of orders) {
        valid = valid && order.articles.length > 0
    }

    return valid
}