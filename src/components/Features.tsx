import teslaLogo from "../assets/img/logo3.png";
import audiLogo from "../assets/img/logo2.png";
import porscheLogo from "../assets/img/logo1.png";
import featured1 from "../assets/img/featured1.png";
import featured2 from "../assets/img/featured2.png";
import featured3 from "../assets/img/featured3.png";
import featured4 from "../assets/img/featured4.png";
import featured5 from "../assets/img/featured5.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const carBrands = [
  { name: "Tesla", logo: teslaLogo },
  { name: "Audi", logo: audiLogo },
  { name: "Porsche", logo: porscheLogo },
];

const carCards = [
  {
    id: 1,
    name: "Tesla",
    model: "Model X",
    image: featured1,
    price: "$98,900",
  },
  {
    id: 2,
    name: "Tesla",
    model: "Model 3",
    image: featured2,
    price: "$45,900",
  },
  { id: 3, name: "Audi", model: "E-tron", image: featured3, price: "$175,900" },
  {
    id: 4,
    name: "Porsche",
    model: "Boxster 987",
    image: featured4,
    price: "$126,900",
  },
  {
    id: 5,
    name: "Porsche",
    model: "Panamera",
    image: featured5,
    price: "$126,900",
  },
];

export const Features = () => {
  const [cars] = useState(carCards);
  const [selectedBrand, setSelectedBrand] = useState("All");

  const filteredCars = cars.filter((car) => {
    if (selectedBrand === "Tesla") return car.name === "Tesla";
    if (selectedBrand === "Audi") return car.name === "Audi";
    if (selectedBrand === "Porsche") return car.name === "Porsche";
    return true;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { stiffness: 300, duration: 0.8 },
    },
  };

  return (
    <div className="max-container px-4 mt-32 text-whiteColor" id="Featured">
      <h1 className="text-2xl font-medium text-center">Featured Luxury Cars</h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex justify-center gap-8 mt-14"
      >
        <motion.div
          variants={item}
          onClick={() => setSelectedBrand("All")}
          className={`p-4 rounded-xl cursor-pointer ${
            selectedBrand === "All" ? "bg-firstColor" : "bg-containerColor"
          }`}
          whileHover={{ scale: 1.1 }}
        >
          All
        </motion.div>
        {carBrands.map((cb) => (
          <motion.div
            variants={item}
            key={cb.name}
            onClick={() => setSelectedBrand(cb.name)}
            className={`p-4 rounded-xl flex items-center justify-center cursor-pointer ${
              selectedBrand === cb.name ? "bg-firstColor" : "bg-containerColor"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            <img src={cb.logo} className="w-6" />
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedBrand}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 mt-20 max-w-[800px] mx-auto"
        >
          {filteredCars.map((car) => (
            <motion.div
              variants={item}
              key={car.id}
              custom={car.id}
              layout
              className="relative p-6 pb-4 rounded-2xl overflow-hidden bg-containerColor group"
            >
              <h2 className="text-xl font-medium mb-0.5">{car.name}</h2>
              <p className="text-sm text-textColor">{car.model}</p>
              <img
                src={car.image}
                className="w-44 mx-auto mt-4 group-hover:-translate-x-2 transition-transform duration-300 ease-in"
              />
              <p className="text-lg font-medium mt-5">{car.price}</p>
              <div className="absolute bottom-0 right-0 px-4 py-2.5 rounded-tl-2xl cursor-pointer bg-firstColor hover:bg-opacity-85 transition-all duration-150 ease-in">
                <i className="ri-shopping-bag-2-line text-lg"></i>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
