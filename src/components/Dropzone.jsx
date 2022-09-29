import React, { useState, useMemo } from "react";
import FileTable from "./FileTable";
import { useDropzone } from "react-dropzone";
import { baseStyle, focusedStyle, rejectStyle, acceptStyle } from "./styles";

function MyDropzone() {
  const [currentFiles, setCurrentFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const filesWithPreview = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setCurrentFiles([...currentFiles, ...filesWithPreview]);
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const DeleteCurrentUpload = (id) => {
    const currentFilesWithout = currentFiles.filter((_, idx) => idx !== id);
    console.log("currentFilesWithout", currentFilesWithout);
    setCurrentFiles(currentFilesWithout);
  };

  console.table(currentFiles);
  return (
    <>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {currentFiles.length ? (
        <FileTable files={currentFiles} onDelete={DeleteCurrentUpload} />
      ) : null}
    </>
  );
}

export default MyDropzone;
