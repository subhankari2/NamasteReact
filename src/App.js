import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {IMG_CDN_URL} from "./constants"

const restaurants=[
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "222866",
        "name": "Pista House Restaurant & Bakery",
        "uuid": "e6a62316-a518-4d98-8195-1f2db2690707",
        "city": "3",
        "area": "Sanath Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "xxtq2aguqruzlrkrq14q",
        "cuisines": [
          "Biryani",
          "Chinese",
          "North Indian",
          "Tandoor"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 2.9000000953674316,
        "slugs": {
          "restaurant": "pista-house-restaurant-&-bakery-ameerpet-ameerpet",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "A Block, Ground Floor, M.No 7-2-1735,Part No 4, Endeco S Alladin County, Sanathnagar, Hyderabad 500018,Telangana",
        "locality": "Ameerpet",
        "parentId": 319765,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use GUILTFREEJAN",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use GUILTFREEJAN",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5659136~p=1~eid=00000185-ceaa-e664-058a-bba00067015a",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.9 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "222866",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 2.9000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "39546",
        "name": "Mehfil",
        "uuid": "4d24b2f1-59ef-41a2-9777-5947b08da1d1",
        "city": "3",
        "area": "Hitec City",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "stnwpjuu5fhehsx1dw4z",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Indian",
          "Kebabs",
          "Tandoor",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 8.5,
        "slugs": {
          "restaurant": "mehfil-restaurant-madhapur-madhapur",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "Jaihind Enclave, Beside Indiblaze, Madhapur, Hyderabad, Telangana 500081",
        "locality": "Jaihind Enclave",
        "parentId": 637,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹80 | Use code WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹80 | Use code WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "8.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "39546",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 8.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "IT_IS_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "25251",
        "name": "Meridian Restaurant",
        "uuid": "41eab84b-b00a-457d-80c8-5a62fadc4790",
        "city": "3",
        "area": "Punjagutta",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "cxvuxxwpkicbqo3nkqiy",
        "cuisines": [
          "Biryani",
          "Chinese",
          "North Indian",
          "Kebabs"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "meridian-cafe-restaurant-panjagutta-banjara-hills",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "6-3-694/1 &697, Panjagutta main road",
        "locality": "Panjagutta main road",
        "parentId": 19276,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹80 | Use code WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹80 | Use code WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "25251",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "27106",
        "name": "SHRI SANTOSH FAMILY DHABA",
        "uuid": "54cbdb35-d42b-4c00-857b-42156c018147",
        "city": "3",
        "area": "Punjagutta Officers Colony",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "dqelkhd8ap6lseocjtvn",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Chinese",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 1.7000000476837158,
        "slugs": {
          "restaurant": "sri-santosh-family-dhaba-ameerpet-ameerpet",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "First Floor, H.No 6-3-788/7B, Opp Chandana  Brothers Main Road, Ameerpet, Hyd-16",
        "locality": "Punjagutta Officers Colony",
        "parentId": 5226,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹80 | Use code WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹80 | Use code WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5710933~p=4~eid=00000185-ceaa-e664-058a-bba10067045f",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "27106",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 1.7000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "100942",
        "name": "Lucky Multicuisine Restaurant",
        "uuid": "8e677eb2-065e-4021-ab21-b94d70357977",
        "city": "3",
        "area": "Somajiguda",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "yeyiqeakfhjj6cmeocsc",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Tandoor",
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "lucky-multicuisine-restaurant-somajiguda-somajiguda-khairtabad",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "Door no;6-3-1089/f/33,somajiguda,hyd,circle no.10(old mch circle-v)khairtabad,hyd-central zone, telengana 500082.",
        "locality": "\nRaj Bhavan Quarters Colony",
        "parentId": 18963,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹80 | Use code WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹80 | Use code WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "100942",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "3636",
        "name": "Kakatiya Mess",
        "uuid": "6582f779-6e6c-42c4-977f-d4a4596fdd72",
        "city": "3",
        "area": "Punjagutta",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "l4ppu8o6nhdospxcnrkh",
        "cuisines": [
          "Andhra",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 15,
        "minDeliveryTime": 15,
        "maxDeliveryTime": 15,
        "slaString": "15 MINS",
        "lastMileTravel": 1.7000000476837158,
        "slugs": {
          "restaurant": "kakatiya-mess-ameerpet-road-ameerpet",
          "city": "hyderabad"
        },
        "cityState": "3",
        "address": "Behind J C Brothers,Ameerpet, Hyderabad",
        "locality": "Ameerpet Road",
        "parentId": 19237,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹80 | Use code WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹80 | Use code WELCOME50",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "3636",
          "deliveryTime": 15,
          "minDeliveryTime": 15,
          "maxDeliveryTime": 15,
          "lastMileTravel": 1.7000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
];
const RestaurantList=({name,cloudinaryImageId,cuisines,avgRating})=>{
   return(
        <div className="card">
    <img src={IMG_CDN_URL+cloudinaryImageId} alt="logo" />
    <h1>{name}</h1>
    <h3>{cuisines.join(",")}</h3>
    <h3>{avgRating} stars</h3>
    </div>
    );
}



const AppLayoutComponent=()=>(
<>
<Header/>
<Body/>
<Footer/> 
</>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent/>);