import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProfilePage from "./components/ProfilePage"
import AuthenticationGuard from "./components/AuthenticationGuard"
import Signup from "./components/Signup"


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/profile" element={<AuthenticationGuard childComponent={ProfilePage}/>} />
      <Route path="/sign-up" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Profile />
    <Hero /> */}
    </>
  )
}

export default App
