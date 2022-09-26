  /**
   * This file takes the current files and processes them with tesseract.js 
   * These files are then processed into a csv - this is a placeholder for the next step
   * The below commented out code is potentially useful, keeping while WIP
   */
  
  // // Process files for OCR???
  // acceptedFiles.forEach(file => {
  //   const reader = new FileReader();

  //   reader.onabort = () => console.log("file reading was aborted");
  //   reader.onerror = () => console.log("file reading has failed");
  //   reader.onload = () => {
  //     // Do whatever you want with the file contents
  //     const binaryStr = reader.result;
  //     console.log(binaryStr);
  //   };
  //   reader.readAsArrayBuffer(file);
  // })