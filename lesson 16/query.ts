type AssembleFn = (includeTags: boolean) => string
type Query = {
    query: string,
    tags?: string[],
    assemble: AssembleFn
}

const query: Query = {
    query: 'Ember',
    tags: ['javascript'],
    assemble(includeTags = false) {
        let query = `?query=${this.query}`
        if (includeTags && typeof this.tags !== 'undefined') {
            query += `&${this.tags.join(',')}`
        }
        return query
    }
}