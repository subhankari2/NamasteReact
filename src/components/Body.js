import { restaurants } from "../constants";
import RestaurantCard  from "./RestaurantCard" 
import { useState } from "react";
function filterdata(searchText,restaurantList){
 const filteredData= restaurantList.filter((restaurant)=>
 restaurant.data.name.includes(searchText)
);
return filteredData;
}
const Body=() =>{
    // const searchText="KFC";
const [searchText,setSearchText]=useState("");
const [restaurantList,setRestaurants]=useState(restaurants);
    return (<>
    <div className="search-container">
<input type="text" className="seachBox" value={searchText} 
onChange={(e)=>{setSearchText(e.target.value);}}
placeholder="search here" />
<button onClick={()=>{
 const data=filterdata(searchText,restaurantList);
 setRestaurants(data);
}}>Search</button>

    </div>
    <div className="restaurantList">
    {restaurantList.map((restaurant)=>{
return<RestaurantCard {...restaurant.data}  key={restaurant.data.id} />
    })}
    </div>
    </>
    );
};
export default Body ;