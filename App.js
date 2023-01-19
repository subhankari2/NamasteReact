import ReactDOM  from "react-dom/client";

const heading1=()=>(
    <h1 id="h1" key="h1">Heading1</h1>
);
const heading2=(
    <h2 id="h2" key="h2">Heading2</h2>
);
const heading3=(
    <h3 id="h3" key="h3">Heading2</h3>
);
const a=10;
const FunctionalComponent=() =>{
    return (
    <div>
        {heading1()}
        {heading2}
        {heading3}
        {1+2}
        {console.log(a)}
        <h1>Namaste React Functional Component</h1>
        </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render( heading1());
// root.render(FunctionalComponent());
// root.render(<FunctionalComponent />);
root.render(<FunctionalComponent></FunctionalComponent>);