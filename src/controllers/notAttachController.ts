import {Controller, Get} from "@tsed/common";
import {Description, Name, Returns, Summary} from "@tsed/schema";
import {Dumb} from "../models/dumb";

@Controller("/not-attach")
@Name('NotAttachController')
export class NotAttachController {
    @Get("/id/:id")
    @Summary("get not attch")
    @Description("Return nothing")
    @Returns(200, Dumb)
    async getNothing(
        ): Promise<any> {
        return;
    }
}
