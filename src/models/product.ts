import {CollectionOf, Generics, Property} from "@tsed/schema";

@Generics("T")
export class Product<T> {
    @Property()
    @CollectionOf("T")
    data: T[];

    @Property()
    @CollectionOf(String)
    links?: String[];

    constructor(options: Partial<Product<T>>) {
        options.data && (this.data = options.data);
        options.links && (this.links = options.links);
    }
}
