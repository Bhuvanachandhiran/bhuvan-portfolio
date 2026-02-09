import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold"
      >
        Bhuvanachandhiran P
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="mt-4 text-xl md:text-2xl text-brand-orange"
      >
        AI/ML Engineer | Generative AI • Deep Learning • Applied Machine Learning
      </motion.p>

      <div className="mt-8 flex gap-4">
        <a
          href="/Bhuvanachandhiran_AI_ML_Engineer_Chennai.docx"
          download
          className="btn"
        >
          Download Resume
        </a>

        <a
          href="#projects"
          className="btn bg-gray-800 text-white hover:opacity-90"
        >
          View Projects
        </a>
      </div>
    </header>
  );
}
