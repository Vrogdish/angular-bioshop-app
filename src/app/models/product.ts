export class Product {
    constructor (
        public id : number,
        public title : string,
        public description : string,
        public category : string,
        public imageUrl : string,
        public price : number,
        public featured : boolean
    ) {}
}