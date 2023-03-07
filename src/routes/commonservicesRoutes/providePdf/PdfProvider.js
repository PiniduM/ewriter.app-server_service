import pdfCreator from "./functions/pdfCreator.js";

const pdfProvider = (req, res) => {
    const data = req.body;

    //check auth if necessary
  
    const stream = res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment;filename=${req.body.topic}.pdf`,
    });
  
    pdfCreator(
      { topic: data.topic, essay: data.content },
      (chunk) => stream.write(chunk),
      () => stream.end()
    );
  };
  
  export default pdfProvider;
  