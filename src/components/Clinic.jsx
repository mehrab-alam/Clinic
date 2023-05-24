import { useEffect } from "react"
import About from "./About"
import AppointmentForm from "./AppointmentForm"
import Blog from "./Blog"
import Contact from "./Contact"
import Doctors from "./Doctors"
import Faq from "./Faq"
import Gallery from "./Gallery"
import Hero from "./Hero"
import Review from "./Review"
import Services from "./Services"

const Clinic = () => {
    return (
        <div>
            <Hero />
            <About />
            <Gallery />
            <Services />
            <Doctors />
            <Review />
            <AppointmentForm />
            <Faq />
            <Blog />
            <Contact />
        </div>
    )
}
export default Clinic