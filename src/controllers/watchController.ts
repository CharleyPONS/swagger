import {BodyParams, Controller, Delete, Get, PathParams, Post, Put} from "@tsed/common";
import {Description, In, Name, Required, Returns, Security, Summary} from "@tsed/schema";
import { Watch} from "../models/watch";
import {Docs} from "@tsed/swagger";
import {Product} from "../models/product";

@Controller("/watch")
@Docs('api-v2')
@Name('WatchController')
export class WatchController {
  @Get("/id/:id")
  @Summary("Summary of this route")
  @Description("Return a watch from the given id")
  @Returns(200, Watch)
  @Returns(404).Description("Not found")
  async getWatch(
      @Description("A calendar Id")
      @PathParams() id: string): Promise<any> {
    return id;
  }

  @Get("/name/:name")
  @Description("Return a list of watch base by name")
  @Summary('Get watch')
  @Returns(200, Array).Of(Watch).Description('array of watch')
  async getWatchArray(@Required() @PathParams('name') name: any): Promise<any> {

    return JSON.stringify(['AP', 'Patek'].find(v => v === name));
  }

  @Post("/update")
  @Summary('Post watch')
  @Security("read:watch")
  @In("authorization").Type(String).Description("Bearer authorization")
  @Returns(200, Watch).Description('Return watch')
  async createWatch(@BodyParams() body: any): Promise<any> {
    return body;
  }

  @Put("/create")
  @Summary('Post generic watch')
  @Description('we gonna set a generic watch')
  @(Returns(201, Product).Of(Watch).Description("A product"))

  async createGenericWatch(@BodyParams() watch: Watch): Promise<Product<Watch>> {
    return new Product<Watch>({
      data: [watch]
    });  }

  @Delete("delete/")
  @Summary('Delete generic watch')
  @Description('we gonna delete a generic watch')
  @Security("calendar_auth", "write:calendar", "read:calendar")
  @Returns(200).Description('Return watch')

  async deleteWatch(): Promise<any> {
    return;
  }
}
