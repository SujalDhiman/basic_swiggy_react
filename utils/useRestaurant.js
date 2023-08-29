import { useState,useEffect } from "react"

export const useRestaurant=(id)=>{
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
    return menu;
}