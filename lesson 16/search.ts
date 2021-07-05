function search(
    query: string,
    tags?: string[]
): Promise<Result[]> {
    let queryString = `?query=${query}`
    if (tags && tags.length) {
        queryString += `&tags=${tags.join()}`
    }
    return fetch(`/search${queryString}`)
        .then(response => response.json())
}

type SearchFn = typeof search