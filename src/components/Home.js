import React from "react";
import Banner from "../pages/Banner";
import Booking from "../pages/Booking";

import Discover from "../pages/Discover";
import Items from "../pages/Items";
import Revews from "../pages/Revews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <Discover />
      <Booking />
      <Revews/>
    </div>
  );
};

export default Home;
