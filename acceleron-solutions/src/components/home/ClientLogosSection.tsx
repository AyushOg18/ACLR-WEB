"use client";

import { motion } from "framer-motion";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

const TRUSTED_CLIENTS = [
  { name: "Parasea Mining", path: "/assets/home/trusted-by/PCM.png" },
  { name: "Gainwell Engineering", path: "/assets/home/trusted-by/logo-2-Photoroom.png" },
  { name: "Tulip Compression", path: "/assets/home/trusted-by/TMC-removebg-preview.png" },
  { name: "Livpure", path: "/assets/home/trusted-by/Livpure.png" },
  { name: "Client 1", path: "/assets/home/trusted-by/client1.jpg" },
  { name: "Client 2", path: "/assets/home/trusted-by/client2.jpg" },
  { name: "Client 4", path: "/assets/home/trusted-by/client4.jpg" },
  { name: "Client 5", path: "/assets/home/trusted-by/client5.jpg" },
  { name: "Client 6", path: "/assets/home/trusted-by/client6.jpg" },
  { name: "Client 8", path: "/assets/home/trusted-by/client8.png" },
  { name: "Client 9", path: "/assets/home/trusted-by/client9.png" },
  { name: "Client 10", path: "/assets/home/trusted-by/client10.png" },
  { name: "Client 12", path: "/assets/home/trusted-by/client12.png" },
  { name: "Client 13", path: "/assets/home/trusted-by/client13.png" },
  { name: "Client 14", path: "/assets/home/trusted-by/client14.png" },
  { name: "Client 15", path: "/assets/home/trusted-by/client15.png" },
  { name: "Client 16", path: "/assets/home/trusted-by/client16.png" },
];

export default function ClientLogosSection() {
  return (
    <section className="py-16 bg-[#F8FAFF]/40 border-y border-[#D5DBE6]/60">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="eyebrow mb-4">Trusted by industry leaders</span>
          <h2 className="heading-sm text-[#252F61]">Enterprise clients across sectors</h2>
        </motion.div>
        
        <div className="relative w-full rounded-2xl overflow-hidden border border-[#D5DBE6]/40 bg-white">
          <InfiniteMarquee items={TRUSTED_CLIENTS} speed={35} />
        </div>
      </div>
    </section>
  );
}
