import { useState,useEffect } from "react";
import Shimmer from "../shimmer/shimmer";
import Card from "../card/card";
import "./body.css"
import { Link } from "react-router-dom";
import { filter } from "../../../utils/filter";
import { useOnline } from "../../../utils/useOnline";
function Body(){
    let retain=[];
    const[restaurant,setRestaurant]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const[text,setText]=useState("")
    const[filterRestaurant,setfilterRestaurant]=useState([])
    const[isOnline,setIsOnline]=useState(false)
    useEffect(()=>{
        info()
    },[])

    async function info(){
        const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3282985&lng=78.00883569999999&page_type=DESKTOP_WEB_LISTING")

        const data=await response.json()

        retain=data
        setRestaurant(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilterRestaurant(data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setIsLoading(false)
    }
    let chkOnline=useOnline()
    if(!chkOnline) return <h2>You are Offline please check your internet 👀</h2>
    else
    {
    return (
        <>
        <div className="search">
            <input type="text" name="text1" id="text1" placeholder="Search Restaurant Name" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <button className="search-btn" onClick={()=>setfilterRestaurant(filter(text,restaurant))}>Search</button>
        </div>
        {isLoading === false && restaurant?.length !== 0 ? <div className="container">
            {filterRestaurant.map((ele)=><Link to={`/dish/${ele.info.id}`}><Card key={ele.info.id} imageUrl={ele.info.cloudinaryImageId} rName={ele.info.name} aName={ele.info.areaName} cuisines={ele.info.cuisines} aRating={ele.info.avgRating}></Card></Link>)}</div>: <div className="container"> <Shimmer/> </div> 
        }
        </>
    )
    }
}

export default Body;