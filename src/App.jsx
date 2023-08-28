import Header from "./components/header/header";
import Body from "./components/body/body";
import Restaurant from "./components/Restaurant/restaurant";
import { createBrowserRouter,Outlet } from "react-router-dom";
function App(){
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

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
                element:<Restaurant />
            }
        ]
    }
])

export default createRoutes;