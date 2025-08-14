import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          className="mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 1st line - big and bold */}
         <span className="block text-1xl md:text-6xl font-bold">
  Together we ship alone
</span>

          {/* 2nd line - lighter weight and light black */}
          <span className="block text-xl md:text--3xl font-light text-gray-500 mt-2">
  Organize your feedback. Understand your customers. Close the loop.
</span>
        </motion.h1>

       

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.a
            href="#"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            Watch video
          </motion.a>
          <motion.a
            href="#"
            className="bg-white border border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-50 transition"
            whileHover={{ scale: 1.05 }}
          >
            Book a demo
          </motion.a>
        </div>

        <motion.img
          src="/hero-image.png"
          alt="Hero Image"
          className="mx-auto rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
