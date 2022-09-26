import React, { useState } from "react";
import FileTable from "./FileTable";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const [currentFiles, setCurrentFiles] = useState([]);
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
