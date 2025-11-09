import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontRoute from "../front/router/frontRoute"

const MaterRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontRoute/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MaterRouter;