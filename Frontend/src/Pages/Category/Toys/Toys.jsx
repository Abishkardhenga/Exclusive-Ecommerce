// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./Health.module.css";
// import Navbar from "../../../Components/Navbar/Navbar";
// import Footer from "../../../Components/Footer/Footer";
// import ProductCard from "../../../Components/ProductCard/ProductCard";

// const Health = () => {
//   let api = "http://localhost:8000/getproduct?category=health";
//   let [HealthCollection, setHealthCollection] = useState([]);

//   useEffect(() => {
//     FetchHealth();
//   }, []);

//   let FetchHealth = async () => {
//     try {
//       let { data, status } = await axios.get(api);
//       console.log("this is data", data);
//       if (status === 200) {
//         setHealthCollection(data.message);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className={styles.healthContainer}>
//       <Navbar />
//       <div>
//         {HealthCollection.map((item) => {
//           return <ProductCard item={item} />;
//         })}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Health;
