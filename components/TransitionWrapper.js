"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
// 🔥 IMPORT SAKTI BUAT NGE-FREEZE NEXT.JS ROUTER
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

const OVERLAY_TEXT = "Kalem Heula";

// 🔥 KOMPONEN BUAT NGEBEKUIN HALAMAN LAMA BIAR GAK BOCOR
function FrozenRouter({ children }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function TransitionWrapper({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} className="h-full w-full">

        {/* 1. KONTEN HALAMAN (Bungkus pake FrozenRouter!) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }} 
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>

        {/* 2. TIRAI KELUAR (Nutupin halaman lama) */}
        {/* Naik dari bawah ke tengah layar */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "100%" }}
          exit={{ y: "0%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backgroundColor: "purple",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              color: "#fff",
              fontSize: "1.875rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              margin: 0,
            }}
          >
            {OVERLAY_TEXT}
          </motion.h1>
        </motion.div>

        {/* 3. TIRAI MASUK (Ngebuka halaman baru) */}
        {/* Lanjut dari tengah layar naik ke atas sampai hilang */}
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backgroundColor: "purple",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.h1
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            style={{
              color: "#fff",
              fontSize: "1.875rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              margin: 0,
            }}
          >
            {OVERLAY_TEXT}
          </motion.h1>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}