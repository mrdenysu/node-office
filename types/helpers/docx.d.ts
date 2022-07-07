/// <reference types="node" />
export declare class Docx {
    #private;
    static fromFile(filePath: string): Promise<Docx>;
    get buffer(): Buffer;
    constructor(buffer: Buffer);
    toEjs(): Promise<string>;
}
