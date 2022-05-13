// import React from "react";
// // import CocktailList from "../components/CocktailList";
// // import SearchForm from "../components/SearchForm";

// const Home = () => {
//   return (
//     <main>
//       <h2>home page</h2>
//     </main>
//   );
// };

// export default Home;

import React from "react";
import Title from "../components/Title";
import Services from "../components/Services";
import FeaturedVehicles from "../components/FeaturedVehicles";
import About from "./About";

export default function home() {
  return (
    <main>
      <Title title="KUBER E-BIKES" />
      <Services />
      <FeaturedVehicles />
     
    </main>
  );
}
