import React from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const NewNode4 = (props) => (
  <BaseNode
    {...props}
    nodeType="NewNode4"
    nodeLabel="New Node 4"
    handles={[
      {
        type: "source",
        position: Position.Right,
        id: "value",
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
