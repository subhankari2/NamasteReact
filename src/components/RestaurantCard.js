
import {IMG_CDN_URL} from "../constants"
const RestaurantCard=({name,cloudinaryImageId,cuisines,avgRating})=>{
   return(
        <div className="card">
    <img src={IMG_CDN_URL+cloudinaryImageId} alt="logo" />
    <h1>{name}</h1>
    <h3>{cuisines.join(",")}</h3>
    <h3>{avgRating} stars</h3>
    </div>
    );
}
export default RestaurantCard;