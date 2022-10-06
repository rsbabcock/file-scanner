import { useState } from "react";
import MyDropzone from "./components/Dropzone";
import ProcessButton from "./ProcessButton";

function App() {
  // Might make sense to have these in context? <- look into
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [processedFiles, setProcessedFiles] = useState([]);
  return (
    <div className="App">
      <MyDropzone
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
      />
      <ProcessButton
        uploadedFiles={uploadedFiles}
        setProcessedFiles={setProcessedFiles}
      />
    </div>
  );
}

export default App;
