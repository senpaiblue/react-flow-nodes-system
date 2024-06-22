import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <div style={{
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
    }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`,background: "#FFFFFF",
        border: "1px solid gray",
        width: "12px",
        height: "12px",}}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`,background: "#FFFFFF",
        border: "1px solid gray",
        width: "12px",
        height: "12px",}}
      />
      <div>
        <h2 style={{ fontWeight: "medium", fontSize: "20px", color: "#8E8E8E" }}>LLM</h2>
      </div>
      <div>
        <p style={{ fontWeight: "regular", fontSize: "16px", color: "#8E8E8E" }}>This is a LLM.</p>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{
          background: "#FFFFFF",
          border: "1px solid gray",
          width: "12px",
          height: "12px",
        }}
      />
    </div>
  );
}
