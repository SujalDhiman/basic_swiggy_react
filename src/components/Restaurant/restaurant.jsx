import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../shimmer/shimmer";
import "./restaurant.css"
import { useRestaurant } from "../../../utils/useRestaurant";

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
    let menu=useRestaurant(id);
    return (
        <>{menu.length == 0? <div className="container"> <Shimmer /> </div> : 
        <div className="container">{menu.map((ele)=><Menu key={ele.card.info.id} mName={ele.card.info.name} mPrice={ele.card.info.price/100} mCategory={ele.card.info.category} mdescription={ele.card.info.description} imageURL={ele.card.info.imageId}/>)}</div>}
        </>
    )}

export default Restaurant;