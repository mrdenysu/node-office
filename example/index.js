const { Docx } = require("../dist");
const path = require("path");

const main = async () => {
  // Convert docx to html
  const filePath = path.resolve(__dirname, "demo.docx");
  const docx = await Docx.fromFile(filePath);
  return await docx.toEjs();

  // Render data into html
};

main().then((r) => console.log(r));
