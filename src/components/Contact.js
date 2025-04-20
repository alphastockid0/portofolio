import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // animasi muncul setiap kali elemen masuk viewport
    });
  }, []);

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-12" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center mt-10">
        <h2 className="font-seasons text-4xl md:text-7xl font-bold dark:text-white">
          Reach Out to Me
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10 text-center md:text-left max-w-4xl mx-auto">
        <div className="flex-1">
          <h4 className="font-hoves text-2xl md:text-4xl font-bold dark:text-white mb-2">Address</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Tanjunganom No.9, Banyuurip, Purworejo,<br />
            Central Java, Indonesia - 54171
          </p>
        </div>

        <div className="flex-1">
          <h4 className="font-hoves text-2xl md:text-4xl font-bold dark:text-white mb-2">Email</h4>
          <p className="text-gray-700 dark:text-gray-300">wijayawahyu13@gmail.com</p>
        </div>

        <div className="flex-1">
          <h4 className="font-hoves text-2xl md:text-4xl font-bold dark:text-white mb-2">Phone</h4>
          <p className="text-gray-700 dark:text-gray-300">+(62) 818-0885-6626</p>
        </div>
      </div>


    </section>
  );
};

export default Contact;
