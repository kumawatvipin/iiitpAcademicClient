import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import arrow from "../assets/img/link.png";
function Home() {
  const features = [
    {
      title: "Attendance " ,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis velit at consequat dictum. Aliquam erat volutpat. Ut porttitor aliquam turpis, id mattis urna dapibus eget. Nulla ut libero nec risus condimentum consectetur. Aliquam nec lorem non dui congue pretium. Nunc elementum justo eget sapien laoreet, ac ullamcorper erat sodales. Donec pharetra libero ut tortor malesuada efficitur. Proin id libero et nisi tincidunt fermentum. Phasellus posuere nec magna nec ullamcorper. Donec nec ipsum id felis malesuada vulputate vel quis ante. Sed semper libero vitae aliquam malesuada.",
      image: "https://via.placeholder.com/200", // Placeholder image for Attendance System
      link: "/attendance",
    },
    {
      title: "Assignment",
      description:
        "Sed malesuada sem eu velit fermentum. Fusce auctor nec leo sed congue. Vivamus suscipit vitae libero sed accumsan. Sed lacinia, ligula non posuere tincidunt, velit purus auctor tortor, a tincidunt justo eros vel arcu. Maecenas fringilla, orci ac tempus varius, risus libero finibus leo, sit amet viverra orci ante sit amet nulla. Integer nec pharetra velit, eget consequat lorem. Duis accumsan, elit in luctus ultricies, orci mauris luctus turpis, nec egestas nisl odio vel nulla. Nulla egestas dui at vehicula dapibus. Suspendisse at mauris diam. Proin non nisl nec purus consequat feugiat nec eu lorem. Suspendisse efficitur fermentum elit, nec fringilla ipsum egestas nec.",
      image: "https://via.placeholder.com/200", // Placeholder image for Notice Display
      link: "/assignment",
    },
    {
      title: "Feedback",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur euismod ultricies neque vitae consectetur. Integer eu lorem ac purus condimentum scelerisque. Suspendisse dictum commodo consectetur. Sed sed placerat elit. Nam non commodo erat. Aenean nec fermentum velit, eget placerat eros. Aliquam eget nibh vel justo eleifend venenatis. Nullam condimentum, tortor a tincidunt dignissim, nunc nisi volutpat urna, eget tincidunt leo neque vel nunc. Cras pellentesque orci sed purus fermentum, nec congue lectus facilisis. Integer vel est id elit vehicula congue nec sed eros. Donec in nibh lacus.",
      image: "https://via.placeholder.com/200", // Placeholder image for Feedback Form
      link: "/feedback",
    },
    {
      title: "PlagChecker",
      description:
        "Fusce eu nisl quis est efficitur iaculis. Sed pellentesque urna non luctus varius. In vitae arcu ut risus varius viverra. Curabitur hendrerit pharetra velit, nec efficitur leo laoreet sit amet. Nulla sollicitudin tincidunt fringilla. Curabitur tempor, ex vel varius finibus, sem ante finibus mi, vitae egestas sem libero eu libero. Integer finibus ligula id lectus placerat, non efficitur risus sodales. Nam eu leo arcu. Donec commodo lectus in ultricies cursus. Curabitur auctor sapien id sem accumsan, non malesuada risus ultricies. Aliquam pulvinar, metus in molestie egestas, felis turpis feugiat purus, id vulputate urna urna vitae quam. Mauris mattis dictum tempor. Sed a mattis quam, vel fermentum est. Nulla viverra luctus tellus, ac tempus mi. Integer vehicula nulla sit amet dui bibendum, eu sodales justo fringilla.",
      image: "https://via.placeholder.com/200", // Placeholder image for Class Reminder
      link: "/plagchecker",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-purple-900 to-blue-900 text-white min-h-screen flex flex-col justify-between">
      <div className="container mx-auto py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          <span className="text-purple-400">Welcome to</span> <br /> Academify
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Your one-stop solution for <br /> seamless education management
        </motion.p>
      </div>

      <div className="container mx-auto py-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          Features
        </motion.h2>
        <div className="grid grid-cols-1 py-4 text-justify px-10 gap-8 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }} // Apply different initial x values based on index
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2 + index * 1 }}
              className={`max-w-full rounded gap-10 overflow-hidden shadow-xl transform transition duration-300 flex flex-col md:flex-row items-center hover:shadow-2xl ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.img
                className="w-1/2 md:w-1/3"
                src={feature.image}
                alt={feature.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 3 + index * 1 }} // Adjust delay for image appearance
              />
              <motion.div
                className="px-6 py-4 w-full md:w-2/3"
                initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }} // Apply different initial x values based on index
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 3 + index * 1.2 }} // Adjust delay for description appearance
              >
                <Link to={`${feature?.link}`}>
                  <div
                    className="font-bold flex flex-wrap gap-5 text-3xl md:text-4xl mb-2 bg-pink-500 rounded-lg p-2 w-auto max-w-[300px] text-white"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
                  >
                    {feature.title}
                    <img src={arrow} alt="" width="50px" className="  "  />
                  </div>
                </Link>
                <p className="text-white text-lg md:text-xl">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 py-4 text-center">
        <p className="text-white">
          &copy; 2024 Academify. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
