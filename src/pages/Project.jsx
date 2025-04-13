import React from "react";
import Card from "../component/Card";
import { useNavigate } from "react-router-dom";
import { LucideStepBack } from "lucide-react";
import { motion } from "framer-motion";

export default function Project() {
  const cardData = [
    {
      id: 1,
      title: "Jembatani",
      description: "Projek Antapani",
      imageUrl: "https://www.visitbandaaceh.com/wp-content/uploads/2021/07/Warna-warni-Fly-Over-Antapani-1.jpg",
    },
    {
      id: 2,
      title: "Gedung Serbaguna",
      description: "Projek Bandung",
      imageUrl: "https://www.biayanikah.com/wp-content/uploads/fasilitas-gedung-semper-jakarta-utara.webp",
    },
    {
      id: 3,
      title: "Aplikasi WMS",
      description: "Manajemen Warung Makan",
      imageUrl: "https://goshopkey.com/wp-content/uploads/2022/12/penjual-makanan-pinggir-jalan-1024x683.jpg",
    },
    // Tambah data lain jika perlu
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <section className="min-h-screen px-6 py-12 bg-gray-100">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div onClick={handleClick} className="flex gap-3 cursor-pointer">
            <LucideStepBack className="mb-5" />
            <h4 className="font-bold">Kembali</h4>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Proyek Saya</h2>

          <div className=" overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth scrollbar-hide pb-4 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {cardData.map((item) => (
              <div key={item.id} className="snap-center shrink-0 w-80">
                <Card title={item.title} description={item.description} imageUrl={item.imageUrl} />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
