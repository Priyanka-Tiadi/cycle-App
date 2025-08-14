import { motion } from "framer-motion";

export default function AgentsSection() {
  return (
    <section className="py-12 bg-white" id="agents">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        
        <motion.h2
          className="text-3xl font-bold mb-10 leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Meet your product agents – built to bring the
          <br />
          <span className="to-black" >
            voice–of–customer into every release.
          </span>
        </motion.h2>

        
        <div className="flex justify-center items-center gap-[6px]">
          
          
          <motion.div
            className="rounded-xl p-3 flex flex-col items-center"
            style={{
              backgroundColor: "#f3e8ff",
              width: "240px",
              height: "270px"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/6853e15e5104d359ae231783_furry-poster.webp"
              alt="VoiceHunter"
              className="w-40 h-40 object-contain mb-3"
            />
            <p className="text-gray-700 text-xs">Understanding Customers</p>
            <p className="text-sm font-bold mt-1">@VoiceHunter</p>
          </motion.div>

          {/* PathFinder */}
          <motion.div
            className="rounded-xl p-3 flex flex-col items-center"
            style={{
              backgroundColor: "#e0f7fa",
              width: "240px",
              height: "270px"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/6853e15e4b797121c37dd44e_sunglasses-poster.webp"
              alt="PathFinder"
              className="w-40 h-40 object-contain mb-3"
            />
            <p className="text-gray-700 text-xs">Shaping the Product</p>
            <p className="text-sm font-bold mt-1">@PathFinder</p>
          </motion.div>

          {/* LoopCloser */}
          <motion.div
            className="rounded-xl p-3 flex flex-col items-center"
            style={{
              backgroundColor: "#fff3e0",
              width: "240px",
              height: "270px"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/6853e15c580e7d581e42e819_yellow-cap-poster.webp"
              alt="LoopCloser"
              className="w-40 h-40 object-contain mb-3"
            />
            <p className="text-gray-700 text-xs">Closing the Loop</p>
            <p className="text-sm font-bold mt-1">@LoopCloser</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
