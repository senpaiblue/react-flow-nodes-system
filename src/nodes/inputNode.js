import { useState } from "react";
import { Handle, Position } from "reactflow";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div
      style={{
        width: "300px",
        background: "#E8E8E9",
        border: "1px solid #8E8E8E",
        borderRadius: "16px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyItems: "center",
        gap: "4px",
      }}
    >
      <div>
        <h2
          style={{ fontWeight: "medium", fontSize: "20px", color: "#8E8E8E" }}
        >
          Input
        </h2>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <label
          style={{
            border: "1px solid gray",
            Width: "100%",
            borderRadius: "8px",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyItems: "center",
          }}
        >
          <h3
            style={{ fontWeight: "medium", fontSize: "16px", color: "#B0B0B0" }}
          >
            Description
          </h3>
          <textarea type="text" style={{
              width: "100%",
              resize: "vertical",
              outline: "none",
              border: "none",
              background: "none",
              height: "48px",
            }} value={currName} onChange={handleNameChange} />
        </label>
        <label
        style={{
          border: "1px solid gray",
          Width: "100%",
          borderRadius: "8px",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyItems: "center",
        }}
        >
        <h3
          style={{ fontWeight: "medium", fontSize: "16px", color: "#B0B0B0" }}
        >
          Type
        </h3>
          <select value={inputType} style={{
                input: "focus",
                outline: "none",
                border: "none",
                background: "none",
                height: "48px",
                width: "100%",
              }} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle type="source" position={Position.Right} style={{
          background: "#FFFFFF",
          border: "1px solid gray",
          width: "12px",
          height: "12px",
        }} id={`${id}-value`} />
    </div>
  );
};
