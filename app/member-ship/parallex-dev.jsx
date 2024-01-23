
"use client"

import Image from 'next/image';
import { useRef } from 'react';
import '../globals.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === 'services' ? 'What We Do?' : 'What We Did?'}
      </motion.h1>
      <motion.div className="mountains" style={{ y: yBg }}>
        <Image
          src="/images/hero1.png"
          alt="Mountains"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
      <motion.div className="planets" style={{ y: yBg }}>
        <Image
          src="/images/hero3.png"
          alt="Planets"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
      <motion.div className="stars" style={{ y: yBg }}>
        <Image
          src="/images/hero2.png"
          alt="Stars"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
    </div>
  );
};


export default Parallax;