import React from 'react';
import { Download } from 'lucide-react';


const About = () => {
  return (
    <section id="about" className="min-h-screen dark:bg-gray-100 bg-gray-800 flex flex-col px-4"
      data-aos="fade-up"
    >
      {/* Container dua kolom (kiri dan kanan) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Kiri */}
        <div className="md:w-1/2 flex flex-col justify-between md:h-[500px] text-center md:text-left py-6">
          <h2 className="font-seasons dark:text-gray-800 text-white text-bold text-4xl md:text-7xl font-bold pt-16 animate-bounce">About Me</h2>
          <p className="font-hoves md:text-2xl text-xl text-left text-bold dark:text-black text-gray-300">I am a graduate of Vocational High School (SMK) with expertise in Mechanical Engineering. Have professional experience in the field of electronic services, network installations such as CCTV, WiFi internet, and PABX. In addition, I have also been involved as a clinical laboratory technician and have experience in website development. With a diverse technical background and a high commitment to work quality, I am ready to provide the best contribution in a dynamic and professional work environment.</p>
        
          <a
            href="/assets/CV-WAHYU_WIJAYA.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition mt-6 w-fit animate-pulse"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>

        </div>

        {/* Kanan */}
        <div className="md:w-1/2 w-screen h-screen flex flex-col border-b-2 justify-center items-center dark:text-white bg-gray-100 dark:bg-gray-800 space-y-4">
          <h1 className="font-seasons text-center md:text-6xl text-6xl px-3 py-5">
            " This journey is not about being the fastest, but about continuing to develop, learn and grow "
          </h1>
        </div>
      </div>

      <div className="max-w-4xl text-left">
        </div>
    </section>
  );
};

export default About;
