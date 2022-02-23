export default class NFTCollectionModel {
    name?: string
    description?: string
    slug?: string

    constructor(obj : Partial<NFTCollectionModel> = {}) {
        Object.assign(this, obj);
    }
}