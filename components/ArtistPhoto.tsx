import React from "react";
import style from "../styles/component-styles/AstistPhoto.module.css";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

interface Props {
  artist: string;
  photo: string;
}

const ArtistPhoto: React.FC<Props> = ({ artist, photo }) => {
  return (
    <motion.div>
      <motion.div className={style["img-holder"]}>
        <img className={style.img} src={photo} alt="" />
        <h3 className={style["img-text"]}>{artist}</h3>
      </motion.div>
    </motion.div>
  );
};

export default ArtistPhoto;
