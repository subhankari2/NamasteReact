const heading1=React.createElement("h1",{
    id:"title1",
    style:{backgroundColor:"#0c2576",color:"white"}
},"Heading 1");
const heading2=React.createElement("h1",{
    id:"title2",
    style:{backgroundColor:"#0c2576",color:"white"}
},"Heading 2");
const container=React.createElement("div",{id:"container"},[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);