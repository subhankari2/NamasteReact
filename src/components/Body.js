import { restaurants } from "../constants";
import RestaurantCard  from "./RestaurantCard" 
import { useState } from "react";
const Body=() =>{
    // const searchText="KFC";
const [searchText,setSearchText]=useState("KFC");
const [searchBtn,setSearchBtn]=useState("false");
    return (<>
    <div className="search-container">
<input type="text" className="seachBox" value={searchText} 
onChange={(e)=>{setSearchText(e.target.value);}}
placeholder="search here" />
<button>Search</button>

<h1>{searchBtn}</h1>
<button onClick={(e)=>{
    if(searchBtn==="true")
    setSearchBtn("false");
    else
    setSearchBtn("true");
}}>search</button>
    </div>
    <div className="restaurantList">
    {restaurants.map((restaurant)=>{
return<RestaurantCard {...restaurant.data}  key={restaurant.data.id} />
    })}
    </div>
    </>
    );
};
export default Body ;