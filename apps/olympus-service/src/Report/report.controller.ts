import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReportService } from "./report.service";

@swagger.ApiTags("reports")
@common.Controller("reports")
export class ReportController {
  constructor(protected readonly service: ReportService) {}

  @common.Get("/:id/get-reports")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetReports(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetReports(body);
      }
}
