import React, { useMemo } from "react";
import FileTable from "./FileTable";
import { useDropzone } from "react-dropzone";
import { baseStyle, focusedStyle, rejectStyle, acceptStyle } from "./styles";

function MyDropzone({ uploadedFiles, setUploadedFiles }) {
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
      setUploadedFiles([...uploadedFiles, ...filesWithPreview]);
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
    const filteredFiles = uploadedFiles.filter((_, idx) => idx !== id);
    setUploadedFiles(filteredFiles);
  };

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
      {uploadedFiles.length ? (
        <FileTable files={uploadedFiles} onDelete={DeleteCurrentUpload} />
      ) : null}
    </>
  );
}

export default MyDropzone;
