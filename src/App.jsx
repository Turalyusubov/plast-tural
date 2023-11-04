import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import WeBuy from "./pages/WeBuy"
import OurProducts from "./pages/OurProducts"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Search from "./pages/Search"
import Devices from "./pages/Devices"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import { ToastContainer } from "react-toastify"
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route index element={<Home />} />
          <Route path="we-buy" element={<WeBuy />} />
          <Route path="our-products" element={<OurProducts />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="search" element={<Search />} />
          <Route path="devices" element={<Devices />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Modal />
      <ToastContainer />
    </>
  )
}

export default App
