import {AdditionalProperties, Property, Title} from "@tsed/schema";

@AdditionalProperties(true)
export class Dumb {
    @Property()
    Id: string;

    @Property()
    number: number;

    noAttach: string
}
