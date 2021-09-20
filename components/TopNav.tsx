import React, { useEffect, useState } from "react";
import styles from "../styles/component-styles/TopNav.module.css";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Link from "next/link";

const TopNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav layout className={styles.base}>
      <motion.span
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        layout
        className={`material-icons ${styles.icon}`}
      >
        menu
      </motion.span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.nav}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button layout className={styles.btn}>
              <Link href="/">Home</Link>
            </motion.button>

            <motion.button layout className={styles.btn}>
              <Link href="/">About</Link>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default TopNav;
