import { delay } from "motion";
import { FlipWords } from "./FlipWords"
import { motion } from "motion/react";

const HeroText = () => {
    const words= ["Immersive", "Intelligent", "Impactful"];
    const Animation={
        hidden: {opacity:0, x: -50},
        visible: {opacity:1, x:0},
    };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop  View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 className="text-4xl font-medium" variants={Animation} initial="hidden" animate="visible" transition={{delay:1}}>Hi I'm Rishabh</motion.h1>
        <div className="flex flex-col item-start">
            <motion.p className="text-5xl font-medium text-neutral-300"  variants={Animation} initial="hidden" animate="visible" transition={{delay:1.2}}>A developer <br/>Obsessed with building</motion.p>
            <motion.div variants={Animation} initial="hidden"  animate="visible"  transition={{ delay: 1.5}}><FlipWords words= {words} className="font-black text-white text-8xl"/></motion.div> 
            <motion.p className="text-4xl font-medium text-neutral-300"  variants={Animation} initial="hidden" animate="visible" transition={{delay:1.8}}>Digital experiences.</motion.p>
        </div>
      </div>
      {/* Mobile View  */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium" variants={Animation} initial="hidden"  animate="visible"  transition={{ delay: 1}}>Hi, I'm Rishabh</motion.p>
        <div>
            <motion.p className="text-5xl font-black text-neutral-300" variants={Animation} initial="hidden"  animate="visible"  transition={{ delay: 1.2}}>Building</motion.p>
            <motion.div variants={Animation} initial="hidden"  animate="visible"  transition={{ delay: 1.5}}><FlipWords words={words} className="font-bold text-white text-6xl"/></motion.div>
            <motion.p className="text-4xl font-black text-neutral-300" variants={Animation} initial="hidden"  animate="visible"  transition={{ delay: 1.8}}>Digital experiences</motion.p>

        </div>
      </div>
    </div>
  )
}

export default HeroText
