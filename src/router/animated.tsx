// components/AnimatedRoutes.jsx یا .tsx
import Welcome from "@/components/welcome";
import Home from "@/screen/home/home";
import { AnimatePresence, motion } from "framer-motion";

import { Routes, useLocation, Route } from "react-router-dom";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Welcome />
            </motion.div>
          }
        />
        <Route
          path="/home"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
