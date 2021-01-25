import {
    AdditionalProperties,
    CollectionOf,
    Description,
    Example,
    Integer,
    Max,
    MaxLength,
    Min,
    Property, Summary,
    Title
} from "@tsed/schema";

@AdditionalProperties(true)
export class Watch {
    @Title("iD")
    @Description("Description of calendar model id")
    @Example("Description example")
    @Property()
    public id: string;

    @Property()
    @MaxLength(255)
    public name: string;

    @Property()
    @Integer()
    @Min(1)
    @Max(10)
    public cost: number;

    @Property()
    @CollectionOf(String)
    owner: string[]
}
