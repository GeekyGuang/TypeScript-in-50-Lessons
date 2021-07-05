type SearchFn = (
    query: string, tags?: string[] | undefined
) => Promise<Result[]>

declare function displaySearch(
    inputId: string,
    outputId: string,
    search: SearchFn
): void