import { motion } from "framer-motion";
import pp from "../Assets/images/pp.jpeg";
import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Mail, FolderOpen } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/project");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hai, Saya <span className="text-blue-600">Hafid</span>
          </h1>
          <h2 className="mt-2 text-2xl text-gray-700">Backend Developer | DevOps Enthusiast</h2>
          <p className="mt-4 text-gray-600 text-lg">Saya memiliki ketertarikan dalam membangun sistem backend yang efisien serta mengelola infrastruktur menggunakan DevOps tools.</p>
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Hubungi Saya</button>
            <button onClick={handleClick} className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
              Lihat Proyek
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="flex justify-center">
          <img src={pp} alt="Foto Profil" className="rounded-full w-72 h-72 object-cover shadow-xl" />
        </motion.div>
      </div>
    </section>
  );
}
