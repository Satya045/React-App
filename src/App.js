
import React from "react";

import {

  BrowserRouter,

  Routes,

  Route,

} from "react-router-dom";

import ViewWorkout from "./Component/ViewWorkout";

import AddWorkout from "./Component/AddWorkout";

import Header from "./Component/Header";
import GraphView from "./Component/GraphView";



export default function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<ViewWorkout />} />

        <Route path="add" element={<AddWorkout />} />
        <Route path="graph" element={<GraphView />} />

      </Routes>

    </BrowserRouter>



  );

}

