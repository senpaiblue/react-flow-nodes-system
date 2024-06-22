import { useState, useEffect } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const regex = /{{(.*?)}}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      matches.push(match[1]);
    }
    setVariables(matches);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
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
        position: "relative",
      }}
    >
      <div>
        <h2
          style={{ fontWeight: "medium", fontSize: "20px", color: "#8E8E8E" }}
        >
          Text
        </h2>
      </div>
      <div
        style={{
          width: "280px",
        }}
      >
        <label
          style={{
            border: "1px solid gray",
            width: "100%",
            borderRadius: "8px",
            padding: "4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyItems: "center",
          }}
        >
          <h3
            style={{ fontWeight: "medium", fontSize: "16px", color: "#B0B0B0" }}
          >
            Variables
          </h3>
          <input
            style={{
              resize: "vertical",
              outline: "none",
              border: "none",
              background: "none",
              width: "100%",
              height: "32px",
            }}
            type="text"
            value={currText}
            onChange={handleTextChange}
          />
        </label>
      </div>
      {variables.map((variable, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            position: "absolute",
            top: `${10 + index * 20}px`,
            left: 0,
          }}
        >
          <Handle
            type="source"
            position={Position.Left}
            id={`${id}-${variable}`}
            style={{
              background: "#FFFFFF",
              border: "1px solid gray",
              width: "12px",
              height: "12px",
            }}
          />
          <span
            style={{
              background: "#CACACA",
              marginLeft: "12px",
              fontSize: "16px",
              color: "#525252",
              paddingTop: "4px",
              paddingBottom: "4px",
              paddingRight: "8px",
              paddingLeft: "8px",
              borderRadius: "4px",
              border: "1 solid #525252",
            }}
          >
            {variable}
          </span>
        </div>
      ))}
      <Handle
        type="source"
        style={{
          background: "#FFFFFF",
          border: "1px solid gray",
          width: "12px",
          height: "12px",
        }}
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};
