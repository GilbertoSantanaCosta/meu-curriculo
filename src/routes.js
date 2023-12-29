import React from "react";
import { BrowserRouter, Routes , Route  } from "react-router-dom";
import HomeScreen from "./screens/home";
import Form from "./screens/form";

const Routess = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route exact path="/contratar" element={<Form/>}/>

        </Routes>
    </BrowserRouter>
)

export default Routess;