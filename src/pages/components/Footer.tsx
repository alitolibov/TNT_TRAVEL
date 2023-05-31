import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import React from 'react';
import uz from '../../../public/lang/uz';
import ru from '../../../public/lang/ru';
import en from '../../../public/lang/en';

interface FooterProps {
    
}

const animation = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.5}
    })
}

const Footer: React.FC<FooterProps> = () => {
    const {locale} = useRouter()
    let lang
    switch(locale) {
        case 'uz':
            lang = uz
          break
        case 'ru': 
        lang = ru
          break
        default:
            lang = en
          break
      }

    return (
        <motion.footer
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true}}
         className='px-[15px] py-[27px] flex flex-col items-center space-y-[20px] md:px-[25px] lg:flex-row lg:justify-between xl:w-[1250px] xl:mx-auto'>
            <motion.img custom={0.7} variants={animation} src="/images/logo.png" className='h-[75px] md:h-[85px]' alt="" />
            <nav className='space-y-[5px] md:space-y-[7px]'>
                <motion.p custom={1} variants={animation} className="text-[#fff] text-[14px] text-center md:text-[16px] lg:cursor-pointer lg:hover:text-[#F6B011] duration-500 lg:text-left lg:text-[17px]">{lang.header.about}</motion.p>
                <motion.p custom={1} variants={animation} className="text-[#fff] text-[14px] text-center md:text-[16px] lg:cursor-pointer lg:hover:text-[#F6B011] duration-500 lg:text-left lg:text-[17px]">{lang.header.services}</motion.p>
                <motion.p custom={1} variants={animation} className="text-[#fff] text-[14px] text-center md:text-[16px] lg:cursor-pointer lg:hover:text-[#F6B011] duration-500 lg:text-left lg:text-[17px]">{lang.header.employees}</motion.p>
            </nav>
            <motion.div custom={1.3} variants={animation} className="flex gap-x-[7px] lg:hidden">
            <svg height="20px" version="1.1" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2  l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8  c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2  c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4  c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9  C442.3,370.8,431.5,351.6,415.9,335.5z" fill='#F6B011'/></svg> 
            <p className="text-[#fff] text-[14px] md:text-[16px]">+998 91 527-17-41</p>
            </motion.div>
            <motion.div custom={1.3} variants={animation} className="lg:space-y-[10px]">
            <div className="flex space-x-[12px] md:space-x-[15px]">
                <img src="/images/tg.png" className='h-[25px] md:h-[27px] lg:cursor-pointer' alt="" />
                <img src="/images/insta.png" className='h-[25px] md:h-[27px] lg:cursor-pointer' alt="" />
                <img src="/images/facebook.png" className='h-[25px] md:h-[27px] lg:cursor-pointer' alt="" />
            </div>
            <div className="hidden gap-x-[7px] lg:flex">
            <svg height="20px" version="1.1" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M415.9,335.5c-14.6-15-56.1-43.1-83.3-43.1c-6.3,0-11.8,1.4-16.3,4.3c-13.3,8.5-23.9,15.1-29,15.1c-2.8,0-5.8-2.5-12.4-8.2  l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6c-6.2-6.4-10.7-11-26.6-29l-0.7-0.8  c-7.6-8.6-12.6-14.2-12.9-18.3c-0.3-4,3.2-10.5,12.1-22.6c10.8-14.6,11.2-32.6,1.3-53.5c-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2  c-9.8-12-21.2-18-33.9-18c-14.1,0-25.8,7.6-32,11.6c-0.5,0.3-1,0.7-1.5,1c-13.9,8.8-24,20.9-27.8,33.2c-5.7,18.5-9.5,42.5,17.8,92.4  c23.6,43.2,45,72.2,79,107.1c32,32.8,46.2,43.4,78,66.4c35.4,25.6,69.4,40.3,93.2,40.3c22.1,0,39.5,0,64.3-29.9  C442.3,370.8,431.5,351.6,415.9,335.5z" fill='#F6B011'/></svg> 
            <p className="text-[#fff] text-[14px] md:text-[16px]">+998 91 527-17-41</p>
            </div>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;