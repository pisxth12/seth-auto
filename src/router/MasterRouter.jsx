import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontRoute from "../front/router/FrontRoute"

const MasterRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontRoute/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MasterRouter;