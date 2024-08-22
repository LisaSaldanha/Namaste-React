const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Im a h1 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "Im a h2 tag")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);