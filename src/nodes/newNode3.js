import React from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const NewNode3 = (props) => (
  <BaseNode
    {...props}
    nodeType="NewNode3"
    nodeLabel="New Node 3"
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
