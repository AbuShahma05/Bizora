import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Bizora has truly changed the game for my business—smoother operations, faster growth, and real results. Feels like a secret weapon for success!",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Before Bizora, my business felt lost in the noise. Now, everything is clear, streamlined, and thriving like never before!",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "As I took my first step with Bizora, I looked back at the struggles I left behind—now, it's only growth ahead!",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Bizora's customer service is truly outstanding! They went the extra mile to support me and were always there when I needed them",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using Bizora for over a year, and it's been a game-changer! The platform is intuitive, and the features perfectly align with my business needs.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most about Bizora is their lightning-fast response time. The team is professional, knowledgeable, and genuinely invested in my success.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          What our happy clients say
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600">
          Things that make it the best place to start trading
        </motion.p>
      </motion.div>

      <motion.div variants={fadeIn("up", 0.5)} className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="h-full md:py-12 py-4">
              <motion.div
                variants={fadeIn("up", 0.3 * (index + 1))}
                className="text-center bg-blue-200 p-6 rounded-lg shadow-lg h-full flex flex-col transition-all hover:shadow-xl"
              >
                <motion.div
                  variants={fadeIn("down", 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <motion.img
                    variants={fadeIn("up", 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-4 border-blue-500"
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.4 * (index + 1))}
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span
                      key={starIndex}
                      variants={fadeIn("up", 0.1 * starIndex)}
                      className="text-yellow-500 text-lg"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.h3
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-3"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6 * (index + 1))}
                  className="text-gray-600"
                >
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button
            variants={fadeIn("right", 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            variants={fadeIn("left", 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;