import React from "react"; 
import ReactDOM  from "react-dom/client";
console,console.log("inside ");
const heading1=React.createElement("h1",{
    id:"title1",
    style:{color:"white"},
    key:"h1"
},"Heading 1");
const heading2=React.createElement("h2",{
    id:"title2",
    style:{color:"white"},
    key:"h2"
},"Heading 2");
const heading3=React.createElement("h3",{
    id:"title3",
    style:{color:"white"},
    key:"h3"
},"Heading 3");

const container=React.createElement("div",{className:"title"},[heading1,heading2,heading3]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);