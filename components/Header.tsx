import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function HeroWithHeader() {
  return (
    <>
      {/* Header */}
      <motion.header
        className="fixed top-4 w-[800px] mx-auto bg-white shadow-lg rounded-xl z-50 left-0 right-0"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-black">Cycle</div>

          {/* Navigation Links */}
          <nav className="flex space-x-5 items-center text-gray-600 font-medium">
            <div className="relative flex items-center cursor-pointer group">
              Product <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
            </div>
            <a href="#" className="hover:text-black transition-colors">Changelog</a>
            <a href="#" className="hover:text-black transition-colors">Customers</a>
            <div className="relative flex items-center cursor-pointer group">
              Resources <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
            </div>
          </nav>

          {/* Login + Call to Action */}
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-black font-medium transition-colors">Log in</a>
            <button className="bg-black text-white px-5 py-1.5 rounded-full hover:bg-gray-800 transition-all font-semibold shadow-sm">
              Book a demo
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gray-50">
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

            {/* 2nd line - lighter weight, light black, increased gap */}
            <span className="block text-xl md:text--10xl font-light text-gray-500 mt-6 gap-7">
              Organize your feedback. Understand your customers. Close the loop.
            </span>
          </motion.h1>

          

          {/* CTA Buttons */}
          {/* Buttons */}
<div className="flex justify-center gap-7 mb-25"> {/* mb-12 = buttons ke niche zyada gap */}
  {/* Watch Video - White background, black text */}
  <motion.a
    href="#"
    className="bg-white text-black px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-100 transition"
    whileHover={{ scale: 1.05 }}
  >
    Watch video
  </motion.a>

  {/* Book Demo - Black background, white text */}
  <motion.a
    href="#"
    className="bg-black text-white px-6 py-3 rounded-md border border-black hover:bg-gray-800 transition"
    whileHover={{ scale: 1.05 }}
  >
    Book a demo
  </motion.a>
</div>

{/* Logos Section */}
<div className="flex flex-col items-center mt-12 gap-8"> {/* gap-8 = rows ke beech me gap */}
  {/* First row - 5 logos */}
  <div className="flex justify-center gap-6">
    <motion.img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/68401d07bd75589626f87f38_brex-logo.svg" alt="Brex" className="h-5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} />
    <motion.img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/68401d073f2f2bb7a72a861e_alan-logo.svg" alt="Alan" className="h-5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} />
    <motion.img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/68401d076b8a908339c237b7_quonto-logo.svg" alt="Quonto" className="h-5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
    <motion.img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/68401d07e098b3bd7f4d1ba9_customer-io-logo.svg" alt="Customer.io" className="h-5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} />
    <motion.img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/68401d07804c48185a9d27cd_gorgiars-logo.svg" alt="Gorgiars" className="h-5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} />
  </div>

  {/* Second row - 4 logos */}
  <div className="flex justify-center gap-6">
    <motion.img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/68401d077ea7184fe58adab0_akeneo-logo.svg" alt="Akeneo" className="h-5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
    <motion.img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/68401d076934e762a46f4063_alma-logo.svg" alt="Alma" className="h-5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} />
    <motion.img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/68401d07681093c25bd658b1_shortcut-logo.svg" alt="Shortcut" className="h-5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.7 }} />
    <motion.img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/68401d072228c5a51d204525_strapi-logo.svg" alt="Strapi" className="h-5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.8 }} />
  </div>
</div>


        </div>
      </section>
    </>
  );
}
