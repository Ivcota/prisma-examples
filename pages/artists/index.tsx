import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { NextPage } from "next";
import React, { useState } from "react";
import ArtistPhoto from "../../components/ArtistPhoto";
import style from "../../styles/page-styles/Artists.module.css";
import TopNav from "./../../components/TopNav";

const Index: NextPage = () => {
  const [state, setstate] = useState(true);

  return (
    <AnimateSharedLayout>
      <motion.div layout className={style.container}>
        <motion.div layout>
          <TopNav />
        </motion.div>

        <motion.div layout className={style.grid}>
          <AnimatePresence>
            {state && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ArtistPhoto
                  artist="Taylor Swift"
                  photo="/img/artists/Swift.png"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArtistPhoto
                artist="Taylor Swift"
                photo="/img/artists/Swift.png"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArtistPhoto
                artist="Taylor Swift"
                photo="/img/artists/Swift.png"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArtistPhoto
                artist="Taylor Swift"
                photo="/img/artists/Swift.png"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArtistPhoto
                artist="Taylor Swift"
                photo="/img/artists/Swift.png"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArtistPhoto
                artist="Taylor Swift"
                photo="/img/artists/Swift.png"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArtistPhoto
                artist="Taylor Swift"
                photo="/img/artists/Swift.png"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArtistPhoto
                artist="Taylor Swift"
                photo="/img/artists/Swift.png"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Index;
