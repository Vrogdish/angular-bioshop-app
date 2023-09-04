export class Product {
    constructor (
        public id : number,
        public title : string,
        public description : string,
        public category : string,
        public imageUrl : string,
        public price : number,
        public featured : boolean
    ) {
        (this.id = id),
        (this.title = title),
        (this.description = description),
        (this.category = category),
        (this.imageUrl = imageUrl),
        (this.price = price),
        (this.featured = featured)
    }
}