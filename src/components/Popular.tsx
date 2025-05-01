import popular1 from "../assets/img/popular1.png";
import popular2 from "../assets/img/popular2.png";
import popular3 from "../assets/img/popular3.png";
import popular4 from "../assets/img/popular4.png";
import popular5 from "../assets/img/popular5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const carModels = [
  {
    id: 1,
    brand: "Porsche",
    name: "Turbo S",
    image: popular1,
    price: "175,900",
  },
  {
    id: 2,
    brand: "Porsche",
    name: "Taycan",
    image: popular2,
    price: "114,900",
  },
  {
    id: 3,
    brand: "Porsche",
    name: "Turbo S Cross",
    image: popular3,
    price: "150,900",
  },
  {
    id: 4,
    brand: "Porsche",
    name: "Boxster 718",
    image: popular4,
    price: "125,900",
  },
  {
    id: 5,
    brand: "Porsche",
    name: "Cayman",
    image: popular5,
    price: "128,900",
  },
];

const Popular = () => {
  return (
    <div
      className="max-container text-white px-4 relative overflow-hidden"
      id="Popular"
    >
      <h1 className="text-center text-2xl font-medium mb-20">
        Choose Your Electric Car <br />
        Of The Porsche Brand
      </h1>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
          }}
          breakpoints={{
            562: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            830: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {carModels.map((car) => (
            <SwiperSlide key={car.id}>
              <div className="relative py-7 px-8 rounded-3xl overflow-hidden bg-containerColor group transition-transform duration-300 ease-in">
                <h1 className="text-2xl font-semibold">{car.brand}</h1>
                <p className="text-titleColor font-light mt-1 mb-3.5">
                  {car.name}
                </p>
                <img
                  src={car.image}
                  className="w-48 object-cover mx-auto mb-7 group-hover:-translate-y-2 transition-transform duration-300 ease-in"
                />
                <div className="flex flex-col mb-7">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <i className="ri-dashboard-3-line"></i>
                      <p className="text-sm">3.7 Sec</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-funds-box-line"></i>
                      <p className="text-sm">356 Km/h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-charging-pile-2-line"></i>
                    <p className="text-sm">Electric</p>
                  </div>
                </div>
                <p className="text-[22px] font-medium">${car.price}</p>
                <div className="absolute px-4 py-3 right-0 bottom-0 bg-firstColor hover:bg-opacity-85 transition-all duration-150 ease-in rounded-tl-2xl cursor-pointer">
                  <i className="ri-shopping-bag-2-line text-lg"></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className="flex items-center mt-20">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Popular;
