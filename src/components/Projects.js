import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const [modalData, setModalData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Teknisi Elektronik, CCTV, PABX, Komputer Jaringan",
      image: "/assets/img/Service-HP.png",
      description: "Menjadi seorang Professional dalam beberapa bidang adalah pengalaman yang mengesankan. Pekerjaan saya sebagai teknisi handphone , dilain waktu saya bisa melakukan pekerjaan instalasi jaringan CCTV / PABX / Jaringan Komputer di beberapa instansi seperti Rumah Sakit, Perkantoran, Perumahan dan Stasiun Pengisian Bahan Bakar."
    },
    {
      title: "Digital Scoring Pertandingan Pencak Silat",
      image: "/assets/img/sc-pencak.png",
      description: "Aplikasi Berbasis Website yang dibangun dengan PHP dan framework Codeigniter 4. Aplikasi ini bertujuan agar pertandingan / event berjalan secara efisien dan terbuka. Dimana seluruh penonton dapat melihat secara langsung ketika juri memberikan nilai atlet saat pertandingan berlangsung. Selain itu semua sistem pertandingan sudah melalui aplikasi mulai dari pendaftaran hingga keputusan pemenang."
    },
    {
      title: "Portfolio Website",
      image: "/assets/img/portofolio.png",
      description: "Website portofolio pribadi dengan animasi dan tema gelap/terang. Dibuat dengan menggunakan React & Tailwind CSS."
    },
    {
      title: "Sistem Informasi Management Rumah Sakit (SIMRS)",
      image: "/assets/img/gladiool.png",
      description: "Aplikasi Sistem Informasi yang dibangun dengan PHP Codeigniter 4 demi menunjang efisiensi management dalam instansi Rumah Sakit"
    },
    {
      title: "Teknisi Elektromedis Laboratorium",
      image: "/assets/img/lab.jpg",
      description: "Saya pernah menjadi seorang Professional dalam dunia alat kesehatan khususnya alat Laboratorium. Disini saya bertanggungjawab untuk memperbaiki alat laboratorium yang rusak atau butuh perawatan. Setelah semua system mekanik telah bekerja dengan baik saya juga harus memastikan bahwa hasil baca dari alat telah akurat. Beberapa alat yang sering saya perbaiki yaitu Hematology Analyzer 3diff / 5diff, photometer, full auto kimia klinik."
    },
  ];

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3).concat(
    projects.slice(0, Math.max(0, currentIndex + 3 - projects.length))
  );

  return (
    <section id="projects" className="min-h-screen bg-gray-100 dark:bg-gray-800 px-4 pt-10" data-aos="fade-up">
      <div className="max-w-4xl flex mt-10">
        <h2 className="font-seasons text-4xl md:text-7xl font-bold dark:text-white animate-blink">
          My Journey of Growth
        </h2>
      </div>

      <div className="relative mt-10 flex items-center justify-center">
        <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow">
          <ChevronLeft size={24} className="text-gray-800 dark:text-white" />
        </button>

        <div className="flex gap-4 overflow-hidden">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform w-64"
              onClick={() => openModal(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow">
          <ChevronRight size={24} className="text-gray-800 dark:text-white" />
        </button>
      </div>

      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <img src={modalData.image} alt={modalData.title} className="w-full h-auto rounded-md object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{modalData.title}</h3>
              <p className="dark:text-gray-300 mb-6">{modalData.description}</p>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
