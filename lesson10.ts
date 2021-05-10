function selectDeliverAddress(addressOrIndex: unknown): string {
    if (typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses.length) {
        return deliverAddresses[addressOrIndex]
    } else if (typeof addressOrIndex === 'string') {
        return addressOrIndex
    }

    return ''
}

const myFavouriteAddress = selectDeliverAddress(true)