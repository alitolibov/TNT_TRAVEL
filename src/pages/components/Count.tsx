import React from 'react';
import {motion} from 'framer-motion'

interface CountProps {
    
}

const visible:object = { opacity: 1, y: 0, transition: { duration: 0.8 } };
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible
      };

const animation = {
    hidden: {
        x: -30,
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: {duration: 1}
    })
}

const Count: React.FC<CountProps> = () => {
    return (
        <motion.section
        id='about'
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.5, once: true}}
        className='space-y-[40px] mb-[150px] mt-[50px] md:space-y-[50px]'>
                <motion.div variants={{hidden: { opacity: 0, y: -20 }, visible}} className="relative w-fit mx-auto">
                    <p className="font-[900] text-[3.5rem] text-[var(--main-color-two)] opacity-[0.5] leading-[3.5rem] sm:text-[5rem] sm:leading-[5rem]">ABOUT</p>
                    <p className="sm:w-[287px] font-[600] text-[1.5rem] text-[#fff] absolute top-[20px] sm:text-[1.75rem] text-center leading-[1.5rem] sm:leading-[1.75rem] sm:left-[50%] sm:translate-x-[-50%] sm:top-[35px]">Why We Are Chosen</p>
                </motion.div>
                <div className="grid grid-cols-2 gap-[20px] md:grid-cols-4 md:gap-y-0 md:gap-x-[30px]">
                    <div className="space-y-[10px]">
                        <p className="text-[43px] font-bold text-center text-[var(--main-color-two)]">10</p>
                        <p className="font-[500] text-[13px] text-center text-white md:text-[15px] lg:text-[16px] xl:text-[17px]">Лет в сфере туризма</p>
                    </div>
                    <div className="space-y-[10px]">
                        <p className="text-[43px] font-bold text-center text-[var(--main-color-two)]">1000</p>
                        <p className="font-[500] text-[13px] text-center text-white md:text-[15px] lg:text-[16px] xl:text-[17px]">Готовых туров</p>
                    </div>
                    <div className="space-y-[10px]">
                        <p className="text-[43px] font-bold text-center text-[var(--main-color-two)]">280</p>
                        <p className="font-[500] text-[13px] text-center text-white md:text-[15px] lg:text-[16px] xl:text-[17px]">Доволных клиентов</p>
                    </div>
                    <div className="space-y-[10px]">
                        <p className="text-[43px] font-bold text-center text-[var(--main-color-two)]">10<span>%</span></p>
                        <p className="font-[500] text-[13px] text-center text-white md:text-[15px] lg:text-[16px] xl:text-[17px]">Скидки на авиабилеты</p>
                    </div>
                </div>
        </motion.section>
    );
};

export default Count;