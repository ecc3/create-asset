import React from "react";
import { useDropzone } from "react-dropzone";

const AddFile = props => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <section className="container">
      <p>{props.label}</p>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <h4>Drag a file here or click to browse</h4>
        <p>{props.smallText}</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};

export default AddFile;
