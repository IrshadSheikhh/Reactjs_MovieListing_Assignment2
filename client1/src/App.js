import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import "./App.css";

const App = () => {
   

	return (
		  <Routes>
					<Route path="/" element={<Home />}/>
					</Routes>
		) }

export default App;