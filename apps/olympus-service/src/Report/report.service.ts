import { Injectable } from "@nestjs/common";

@Injectable()
export class ReportService {
  constructor() {}
  async GetReports(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
