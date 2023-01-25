import { restaurants } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

        function filterdata(searchText, restaurantList) {
        const filteredData = restaurantList.filter((restaurant) =>
            restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
        return filteredData;
        }

        const Body = () => {

        const [allRestaurant, setAllRestaurant] = useState([]);
        const [searchText, setSearchText] = useState("");
        const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
        useEffect(()=>{
        //api call
        getRestaurants();
        },[])
        async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4436497&lng=78.4458259&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json); 
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards)
        setfilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
        }

        if(!allRestaurant) return null;
       if(filteredRestaurantList.length===0) return <h1>No Search Match your filter!!! </h1> 
  return allRestaurant.length===0?<Shimmer/> :(
    <>
      <div className="search-container">
        <input
          type="text"
          className="seachBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="search here"
        />
        <button
          onClick={() => {
            const data = filterdata(searchText, allRestaurant);
            setfilteredRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">

        {filteredRestaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        
      </div>
    </>
  );
};
export default Body;
