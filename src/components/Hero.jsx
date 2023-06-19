import { motion } from "framer-motion";

import { styles } from "../resources/assets/styles";
import  ComputersCanvas  from "../canvas/computers";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto  ` } style={{backgroundColor:'var( --neutral-color-1)'}}>
      <div
        className={`absolute inset-0 top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div >
          <h1 style={{fontFamily:"var(--font-main)",fontSize:"60px", color:'var(   --neutral-color-2)', 
          "@media (maxWidth: 600px)": {
            fontSize: "30px",
            },}}>
            Hi, I'm <span style={{fontFamily:"var(--font-main)",fontSize:"60px",color:'var(  --primary-color)',
             "@media (maxWidth: 600px)": {
              fontSize: "40px",
            },}}className='text-[#915EFF]'>Maxwell</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 `}style={{fontFamily:"var(--font-main)",fontSize:"50px",lineHeight:"75px",color:'var(   --neutral-color-2)'}}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web apps
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className=' absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center'>
        <a href='#experience'>
          <div className='w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;


// className={`${styles.heroHeadText} text-black `}