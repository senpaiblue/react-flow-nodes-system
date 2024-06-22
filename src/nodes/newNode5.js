import React from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const NewNode5 = (props) => (
  <BaseNode
    {...props}
    nodeType="NewNode5"
    nodeLabel="New Node 5"
    handles={[
      {
        type: "target",
        position: Position.Left,
        id: "input",
        style: {
          background: "#FFFFFF",
          border: "1px solid gray",
          width: "12px",
          height: "12px",
        },
      },
    ]}
  />
);
