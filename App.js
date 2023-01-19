import React from "react"; 
import ReactDOM  from "react-dom/client";
const heading1=React.createElement("h1",{
    id:"title1",
    style:{color:"white"},
    key:"h1"
},"Heading 1");
const heading2=React.createElement("h1",{
    id:"title2",
    style:{color:"white"},
    key:"h2"
},"Heading 2");
const container=React.createElement("div",{id:"container"},[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);