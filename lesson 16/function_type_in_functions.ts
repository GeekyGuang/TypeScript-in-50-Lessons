type SearchFn = (
    query: string, tags?: string[] | undefined
) => Promise<Result[]>

declare function displaySearch(
    inputId: string,
    outputId: string,
    search: SearchFn
): void


displaySearch('searchField', 'result', search)

displaySearch(
    'searchField',
    'result',
    function (query, tags) {
        return Promise.resolve([{
            title: `the ${query} test book`,
            url: `/${query}-design-patterns`,
            abstract: `A practical book on ${query}`
        }])
    }
)