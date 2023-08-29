import { useEffect,useState } from "react"
export const useOnline=()=>{

    const [online,setOnline]=useState(true)

    function isOnline()
    {
        window.addEventListener("online",()=>setOnline(true))
        window.addEventListener("offline",()=>setOnline(false))
    }
    useEffect(()=>{
        isOnline()
    },[])

    return online;
}