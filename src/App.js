import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"

import "./App.css"

import Navbar from "./components/Navbar"
import ExerciseDetail from "./pages/ExerciseDetail"
import Home from "./pages/Home"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Box width="480px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/exercize/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
