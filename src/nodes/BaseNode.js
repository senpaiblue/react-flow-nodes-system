// BaseNode.js
import React, { useState } from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, data, nodeType, nodeLabel, handles }) => {
  const [currName, setCurrName] = useState("What's on your mind (⊙_⊙)？");
  const [type, setType] = useState(data.type || "Text");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setType(e.target.value);

  return (
    //outer container div
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
      {/* label container div*/}

      <div>
        <h2
          style={{ fontWeight: "medium", fontSize: "20px", color: "#8E8E8E" }}
        >
          {nodeLabel}
        </h2>
      </div>
      {/* inner container div*/}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* label for text input*/}
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
          <textarea
            type="text"
            value={currName}
            placeholder="What's on your mind (⊙_⊙)？"
            style={{
              width: "100%",
              resize: "vertical",
              outline: "none",
              border: "none",
              background: "none",
              height: "48px",
            }}
            onChange={handleNameChange}
          />
        </label>
        {nodeType !== "LLM" && (
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
              style={{
                fontWeight: "medium",
                fontSize: "16px",
                color: "#B0B0B0",
              }}
              >
              {/* label with selecting options*/}
              Types
            </h3>
            <select
              style={{
                input: "focus",
                outline: "none",
                border: "none",
                background: "none",
                height: "48px",
                width: "100%",
              }}
              value={type}
              onChange={handleTypeChange}
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        )}
      </div>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};
