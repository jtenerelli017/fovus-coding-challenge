"use client";

import React, { useState } from "react";

const TextFileSubmit = () => {
  const [text, setText] = useState<String>("");
  const [file, setFile] = useState<File>();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log(text);
    if (file != null) {
      console.log("not null");
      console.log(file);
    } else {
      console.log("null");
    }
  };

  return (
    <div>
      <label htmlFor="tinput">Text input: </label>
      <input type="text" onChange={handleTextChange}></input>
      <br></br>
      <br></br>
      <label htmlFor="finput">File input: </label>
      <input type="file" onChange={handleFileChange}></input>
      <br></br>
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TextFileSubmit;
