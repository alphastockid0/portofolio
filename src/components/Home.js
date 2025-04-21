import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col px-4 mt-12 justify-between"
      data-aos="fade-up"
    >
      <div className="flex flex-col h-screen md:flex-row items-center justify-between py-6 mb-5">
        <div className="md:w-1/2 h-1/3 flex flex-col justify-between md:h-screen text-center md:text-left md:py-20">
          {/* TOP */}
          <h1 className="dark:text-white font-seasons text-4xl md:text-7xl font-bold leading-tight mb-4">
            Explore My Projects & Professional Journey
          </h1>

          {/* BOTTOM */}
          <div className="mt-5">
            <div className="overflow-hidden border-t border-b dark:border-white w-fit mx-auto md:mx-0 mb-4">
              <h3 className="font-seasons text-2xl md:text-4xl dark:text-white whitespace-nowrap overflow-hidden border-r-2 dark:border-white animate-typewriter">
                Hi, I’m <span className="font-bold text-red-700">Wahyu Wijaya</span>
              </h3>
            </div>
            <p className="dark:text-white font-hoves md:text-2xl text-center md:text-left">
              Junior fullstack developer and a little expertise in electronics engineering.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col items-center space-y-4 pt-2">
          <img
            src="/assets/img/profile.jpg"
            alt="profile"
            className="w-48 h-64 md:w-[300px] md:h-[400px] rounded-[50%] object-cover"
            data-aos="zoom-in"
            data-aos-delay="300"
          />

          <a
            href="https://wa.me/6281808856626"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div
              className="relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-white px-4 py-2 rounded-2xl max-w-xs shadow-md animate-wiggle flex items-center gap-2
    before:absolute before:content-[''] before:top-[-8px] before:left-4 before:border-8 before:border-b-gray-300 before:dark:border-b-white before:border-x-transparent before:border-t-0 before:border-solid"
            >
              <img
                className="w-10 h-10"
                src="/assets/img/wa.png"
                alt="WhatsApp"
              />
              <span>Let's build something cool together!</span>
            </div>

          </a>

        </div>
      </div>

    </section>

  );
};

export default Home;

{/* 
  <section
  id="home"
  className="min-h-screen bg-gray-100 dark:bg-gray-800 flex flex-col md:flex-row items-center justify-center gap-8 px-4"
  data-aos="fade-up"
> 
      <div className="md:w-1/2 flex flex-col justify-between md:h-[500px] text-center md:text-left py-6">
.........
</div>

      <div className="md:w-1/2 flex flex-col items-center space-y-4">
.........
</div>

<div className="relative md:min-w-max">
        <img className="w-20" src="/assets/img/php.png" alt="" />
        <img className="w-20" src="/assets/img/sql.png" alt="" />
        <img className="w-20" src="/assets/img/ci.png" alt="" />
        <img className="w-20" src="/assets/img/html.png" alt="" />
        <img className="w-20" src="/assets/img/react.png" alt="" />
        <img className="w-20" src="/assets/img/py.png" alt="" />
      </div>



*/}
