import React, { useCallback, useState } from "react";
import FileTable from "./FileTable";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const [currentFiles, setCurrentFiles] = useState([]);
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
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setCurrentFiles([...currentFiles, ...acceptedFiles]);
    },
  });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {currentFiles.length ? <FileTable files={currentFiles} /> : null}
    </>
  );
}

export default MyDropzone;
