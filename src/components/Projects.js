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
      description: "Menjadi seorang Professional dalam beberapa bidang adalah pengalaman yang mengesankan. Pekerjaan saya sebagai teknisi handphone , dilain waktu saya bisa melakukan pekerjaan instalasi jaringan CCTV / PABX / Jaringan Komputer di beberapa instansi seperti Rumah Sakit, Perkantoran, Perumahan dan Stasiun Pengisian Bahan Bakar.",
      fp: [{
        title: "Jual Beli HP Rusak",
        url: "https://www.facebook.com/profile.php?id=100063816554456"
      },]
    },
    {
      title: "Digital Scoring Pertandingan Pencak Silat",
      image: "/assets/img/sc-pencak.png",
      description: "Aplikasi Berbasis Website yang dibangun dengan PHP dan framework Codeigniter 4. Aplikasi ini bertujuan agar pertandingan / event berjalan secara efisien dan terbuka. Dimana seluruh penonton dapat melihat secara langsung ketika juri memberikan nilai atlet saat pertandingan berlangsung. Selain itu semua sistem pertandingan sudah melalui aplikasi mulai dari pendaftaran hingga keputusan pemenang.",
      fp: ""
    },
    {
      title: "Portfolio Website",
      image: "/assets/img/portofolio.png",
      description: "Website portofolio pribadi dengan animasi dan tema gelap/terang. Dibuat dengan menggunakan React & Tailwind CSS.",
      fp: [
        {
          title: "WAHYU WIJAYA",
          url: "https://www.facebook.com/wahyu.wijaya.7393264"
        }
      ]
    },
    {
      title: "Sistem Informasi Management Rumah Sakit (SIMRS)",
      image: "/assets/img/gladiool.png",
      description: "Aplikasi Sistem Informasi yang dibangun dengan PHP Codeigniter 4 demi menunjang efisiensi management dalam instansi Rumah Sakit",
      fp: ""
    },
    {
      title: "Teknisi Elektromedis Laboratorium",
      image: "/assets/img/lab.jpg",
      description: "Saya pernah menjadi seorang Professional dalam dunia alat kesehatan khususnya alat Laboratorium. Disini saya bertanggungjawab untuk memperbaiki alat laboratorium yang rusak atau butuh perawatan. Setelah semua system mekanik telah bekerja dengan baik saya juga harus memastikan bahwa hasil baca dari alat telah akurat. Beberapa alat yang sering saya perbaiki yaitu Hematology Analyzer 3diff / 5diff, photometer, full auto kimia klinik.",
      fp: [{
        title: "Service Alat Kesehatan",
        url: "https://www.facebook.com/profile.php?id=100095413114966"
      },]
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

  // Auto sliding every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getVisibleProjects = () => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 1 : 3;
    const projectsToShow = [];
    for (let i = 0; i < count; i++) {
      projectsToShow.push(projects[(currentIndex + i) % projects.length]);
    }
    return projectsToShow;
  };


  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-800 px-4 pt-10" data-aos="fade-up">
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
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
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
              {modalData.fp && Array.isArray(modalData.fp) && modalData.fp.length > 0 && (
                modalData.fp.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition mt-2 w-fit animate-pulse"
                  >
                    <img className="w-6 h-6" src="/assets/img/fb.png" alt="icon" />
                    <span>{link.title}</span>
                  </a>
                ))
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-sm md:text-2xl font-bold mb-4 dark:text-white">{modalData.title}</h3>
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

      {/* Logo berada di bawah */}
      <div className="w-full flex justify-start flex-wrap gap-2 md:gap-10 mt-2 border-t py-2">
        <h3 className="font-hoves dark:text-white md:text-4xl text-bold">Thanks to :</h3>
        <img className="w-8 md:w-20 h-auto" src="/assets/img/php.png" alt="PHP" />
        <img className="w-8 md:w-20 h-auto" src="/assets/img/sql.png" alt="SQL" />
        <img className="w-8 md:w-20 h-auto" src="/assets/img/ci.png" alt="CI" />
        <img className="w-16 md:w-44 h-auto" src="/assets/img/html.png" alt="HTML" />
        <img className="w-16 md:w-44 h-auto" src="/assets/img/react.png" alt="React" />
        <img className="w-10 md:w-20 h-auto" src="/assets/img/py.png" alt="Python" />
      </div>
    </section>
  );
};

export default Projects;
