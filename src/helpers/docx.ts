import { readFile } from "fs/promises";
import * as mammoth from "mammoth";

export class Docx {
  static async fromFile(filePath: string): Promise<Docx> {
    const buffer = await readFile(filePath);
    return new Docx(buffer);
  }

  #buffer: Buffer;

  get buffer(): Buffer {
    return this.#buffer;
  }

  constructor(buffer: Buffer) {
    this.#buffer = buffer;
  }

  async toEjs(): Promise<string> {
    const result = await mammoth.convertToHtml({
      buffer: this.#buffer,
    });
    return result.value;
  }
}
