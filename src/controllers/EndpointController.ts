import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa"
  
@Route("")
export class Endpoint extends Controller {
    @Get("/")
    public checkup(): boolean {
      return true
    }
}