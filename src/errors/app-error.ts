export class AppError extends Error {
  /** ...คอมเมนต์เดิม... */
  constructor(
    public readonly statusCode: number,
    public readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export const notFound = (message = "ไม่พบข้อมูลที่ต้องการ") =>
  new AppError(404, "NOT_FOUND", message);