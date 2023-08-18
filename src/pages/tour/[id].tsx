import React, {useEffect, useState} from 'react';
import SwiperTour from '../components/SwiperTour';
import {motion, useCycle} from "framer-motion";
import TourAbout from '../components/TourAbout';
import {useRouter} from 'next/router';
import Book from '../components/Book';
import AccordionComponent from "@/pages/components/AccordionComponent";
import Head from "next/head";
import {useTranslation} from "next-i18next";
import {ToursInterface} from "@/pages/components/Services";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const modal = {
    open: {
        y: 0,
        transition: {
            type: "spring",
            stiffness: 30,
        }
    },
    closed: {
        y: '100%',
        transition: {
            type: "spring",
            stiffness: 30,
        }
    }
};


const TourPage = () => {
    const { asPath, query} = useRouter()
    const id = query?.id || ''
    const {t} = useTranslation()
    const accordionArr:[{title:string, desc:string}] = t('dynamicPage.accordionQuestion', {returnObjects: true})
    const toursArr:ToursInterface[] | any = t('services.tours', {returnObjects: true}) || []
    const itemObj:ToursInterface | undefined = toursArr.filter((item:ToursInterface) => item.id == +id)[0]
    const animation: { hidden: object, visible: object } = {
        hidden: {
            y: 30,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {duration: 0.7}
        }
    }

    const visible: object = {opacity: 1, y: 0, transition: {duration: 0.8}};
    const [isOpen, toggleOpen] = useCycle<boolean>(false, true);

    useEffect(() => {
        const body = document.body as HTMLElement
        isOpen ? body.style.overflowY = 'hidden' : body.style.overflowY = 'scroll'
    }, [isOpen])

    const [open, setOpen] = useState(false);
    return (
        <div className=''>
            <Head>
                <title>THT VISA - Tours</title>
            </Head>
            <section
                className='space-y-10'>
                <SwiperTour obj={itemObj}/>
                <div className="">
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{amount: 0.5, once: true}}
                        variants={animation}
                        className="relative">
                        <p className="font-[900] uppercase text-[3.5rem] text-[var(--main-color-two)] opacity-[0.5] leading-[3.5rem] sm:text-[5rem] sm:leading-[5rem]">TOUR</p>
                        <p className="font-[600] text-[1.5rem] text-[#fff] absolute bottom-[5px] sm:bottom-[12px] sm:text-[1.75rem] text-center leading-[1.5rem] sm:leading-[1.75rem]">{itemObj?.country}</p>
                    </motion.div>
                    <div className="mt-5 flex justify-between">
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{amount: 0.4, once: true}}
                            variants={animation}
                            className={'space-y-6 w-full lg:w-3/5 xl:w-8/12'}>
                            <TourAbout item={itemObj}/>
                            <div className={'border-t border-[var(--main-color-two)]'}></div>
                            <h1 className={'text-white text-2xl font-semibold lg:text-[26px]'}>{t('dynamicPage.aboutTour')}</h1>
                            <p className={'text-base text-white md:max-w-lg'}>{itemObj?.desc}</p>
                            <h2 className={'text-white text-xl font-semibold lg:text-2xl]'}>{t('dynamicPage.duration')}</h2>
                            <p className={'text-lg text-white'}>{itemObj?.duration}</p>
                            <h2 className={'text-white text-xl font-semibold lg:text-2xl]'}>{t('dynamicPage.price')}</h2>
                            <p className={'text-lg text-white'}>{itemObj?.price}</p>
                            <div className={'border-t border-[var(--main-color-two)]'}></div>
                            <h1 className={'text-white text-2xl font-semibold lg:text-[26px]'}>{t('dynamicPage.question')}</h1>
                            {
                                accordionArr.map((item: { title: string, desc: string }, index: number) =>
                                    <AccordionComponent title={item.title} desc={item.desc} key={index}/>)
                            }
                        </motion.div>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{amount: 0.4, once: true}}
                            variants={animation}
                            className={'hidden relative lg:block lg:max-w-[340px] xl:max-w-[350px]'}>
                            <div className={'sticky top-0 bottom-0 w-full'}>
                                <Book/>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <motion.div initial={false} animate={isOpen ? "open" : "closed"} variants={modal}
                        className={`w-full bg-[var(--main-color)] overflow-y-scroll rounded-2xl overflow-hidden border-t border-[#ffffff] bottom-[75px] fixed left-0 z-10 h-4/5 lg:hidden`}>
                <Book/>
            </motion.div>
            <motion.div
                className='fixed z-50 bottom-0 left-0 w-full h-[75px] bg-[var(--main-color)] border-t border-[#ffffff] lg:hidden'>
                <div className="flex items-center justify-between px-4 h-full">
                    <p className="text-lg font-semibold text-[var(--main-color-two)]">{itemObj?.price}</p>
                    <button onClick={() => toggleOpen()}
                            className='rounded-3xl text-white px-4 py-2 bg-[var(--main-color-two)] font-medium'>{t('dynamicPage.bookForm.btnBook')}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export async function getStaticProps(props:{locale:string}) {
    return {
        props: {
            ...(await serverSideTranslations(props.locale, ['common']))
        },
    };
}

export async function getStaticPaths() {
    const numberOfPaths: number = 6;

    const paths = Array.from({ length: numberOfPaths }, (_, index) => ({
        params: { id: (index + 1).toString() }
    }));
    return {
        paths,
        fallback: true
    }
}

export default TourPage;