import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import axios from "axios";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes.map((node) => node.id),
      edges: state.edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
      })),
    }),
    shallow
  );

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        " http://127.0.0.1:8000/pipelines/parse",
        {
          nodes,
          edges,
        }
      );

      const { num_nodes, num_edges, is_dag } = response.data;

      alert(
        `Number of Nodes: ${num_nodes}\nNumber of Edges: ${num_edges}\nIs DAG: ${is_dag}`
      );
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert(
        "Failed to submit the pipeline. Please check the console for details."
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding:"24px"
      }}
    >
      <button
        type="button"
        style={{
          fontSize: "20px",
          borderRadius: "16px",
          background: "#E8E8E9",
          border: "1px solid #8E8E8E",
          paddingTop: "12px",
          paddingBottom: "12px",
          paddingRight: "20px",
          paddingLeft: "20px",
          fontWeight: "500",
          color: "#3C3C43",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
