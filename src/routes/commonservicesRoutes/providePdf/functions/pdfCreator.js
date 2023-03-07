import pdfGenerator from "pdfkit";

const pdfCreator = (content, writeData, sendFile) => {

  const doc = new pdfGenerator();

  doc.on("data", writeData);
  doc.on("end", sendFile);

  doc.fontSize(28);
  doc.font("Helvetica");
  doc.text(`${content.topic}`, { underline: true, align: "center" });
  doc.moveDown();
  doc.moveDown();

  doc.fontSize(20);
  doc.text(`${content.essay}`);

  doc.end();
};

export default pdfCreator;