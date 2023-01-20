import React from "react";
import ReactDOM  from "react-dom/client";


/**
 * FOOD VILLA
 * Header
 *  - Logo
 *  - links (ul)
 *      - home 
 *      - support 
 *      -contactus
 *      - cart
 * Body
 *  - Search 
 *  - btn
 *  - restaurantlist
 *  - card 
 *      -rest image
 *      - ratings
 *      - cuisine 
 * Footer
 *  - copy@ info  
 */

const logo=(
    <div>
        <a href="/">
<img className="logo" src="https://scontent.fhyd10-1.fna.fbcdn.net/v/t39.30808-6/300375900_587661383052236_9166723355242974276_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hp1Z0-bE9U8AX-yRhUe&_nc_ht=scontent.fhyd10-1.fna&oh=00_AfCWvp7H3KjHmfNzvkegzlr8vjQcNSZwTdQt_nBb3pFlAA&oe=63CE39B8" alt="logo" />
</a> </div>
);
const Header=() =>{
    return (
        <div className="header">
        {logo}
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Support</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
}

const card={
    name:"Burger King",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pifmdkvrlddxq8bshjy6",
    rating:"4.2",
    cuisine:["American,Burgers"]
}
const RestaurantList=()=>{
    return(
        <div className="card">
    <img src={card.image} alt="logo" />
    <h1>{card.name}</h1>
    <h3>{card.cuisine}</h3>
    <h3>{card.rating} stars</h3>
    </div>
    );
}
const Body=() =>(
    <div className="restaurantList">
    <RestaurantList />
    <RestaurantList />
    <RestaurantList />
    <RestaurantList />
    <RestaurantList />
    <RestaurantList />
    <RestaurantList />
    <RestaurantList />   
    <RestaurantList />
    <RestaurantList />
    <RestaurantList />
    <RestaurantList />
      
    </div>
);

const Footer=() =>(
    <h5>Footer</h5>
);

const AppLayoutComponent=()=>(
<>
<Header/>
<Body/>
<Footer/> 
</>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent/>);