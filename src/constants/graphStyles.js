export const nodeStyle = {
  selector: "node",
  style: {
    width: "label",
    height: "label",
    padding: "10px",
    label: "data(title)",
    color: "#fff",
    "text-valign": "center",
    "background-color": "#666"
  }
};

export const edgeStyle = {
  selector: "edge",
  style: {
    width: 3,
    "curve-style": "straight",
    "target-arrow-shape": "triangle"
  }
};

export default [nodeStyle, edgeStyle];
