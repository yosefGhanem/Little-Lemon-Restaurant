import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Hightlights from "./components/Hightlights";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer.js";

function App() {
  const [bookingFormOpen, setBookingFormOpen] = useState(false);

  function openBookingFormHandler() {
    setBookingFormOpen(!bookingFormOpen);
  }

  return (
    <>
      {bookingFormOpen && (
        <BookingForm onCloseLayout={openBookingFormHandler} />
      )}
      <Header onOpenLayout={openBookingFormHandler}></Header>
      <Hero onOpenLayout={openBookingFormHandler}></Hero>
      <Hightlights></Hightlights>
      <footer style={{ height: "5rem" }}></footer>
      <Footer onOpenLayout={openBookingFormHandler}></Footer>
    </>
  );
}

export default App;
