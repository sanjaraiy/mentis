import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import { Button } from "./components/ui/button"
import Register from "./pages/Register"
import LogIn from "./pages/LogIn"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
           <Route index element={<Home></Home>}></Route>
        </Route>
           <Route path="/register" element={<Register></Register>}></Route>
           <Route path="/login" element={<LogIn></LogIn>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
