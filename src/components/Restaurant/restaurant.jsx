import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../shimmer/shimmer";
import "./restaurant.css"

function Menu({mName,mCategory,mPrice,mdescription,imageURL}){
    let url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"
    return (
        <div className="menu">
            <img src={url+imageURL} alt="logo" height={"200px"} width={"300px"}/>
            <h3>{mName}</h3>
            <h3>{mPrice}</h3>
            <p>{mCategory}</p>
            <p>{mdescription}</p>
        </div>
    )
}

function Restaurant(){

    const {id}=useParams()
    const [menu,setMenu]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        details()
    },[])

    async function details(){
        const response=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.33325&lng=77.946447&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)

        const data=await response.json()
        setMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        setIsLoading(false)
    }
    return (
        <>{isLoading? <div className="container"> <Shimmer /> </div> : 
        <div className="container">{menu.map((ele)=><Menu key={ele.card.info.id} mName={ele.card.info.name} mPrice={ele.card.info.price/100} mCategory={ele.card.info.category} mdescription={ele.card.info.description} imageURL={ele.card.info.imageId}/>)}</div>}
        </>
    )}

export default Restaurant;