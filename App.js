import ReactDOM  from "react-dom/client";
const Header=() =>{
    return (
    <div className="headerDiv">
        <div  className="logo" ></div>
       <div className="searchBox"><div><input type="text"  placeholder="Seach "/></div></div>
       <div  className="user" ></div>
        </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);