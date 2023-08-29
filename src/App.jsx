import Header from "./components/header/header";
import Body from "./components/body/body";
import { createBrowserRouter,Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Shimmer from "./components/shimmer/shimmer";
function App(){
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
//performing lazy loading
const Restaurant=lazy(()=>import("../src/components/Restaurant/restaurant.jsx"))
const createRoutes=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"body",
                element:<Body />
            },
            {
                path:"dish/:id",
                element:
                <Suspense fallback={<Shimmer />}>
                    <Restaurant />
                </Suspense>
            }
        ]
    }
])

export default createRoutes;