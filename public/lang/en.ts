/* eslint-disable import/no-anonymous-default-export */
export default {
    header: {
        index: 'Home',
        services: 'Services',
        about: 'About us',
        greetings: 'Travel with THT VISA',
        scroll: 'Scroll down'
    },
    about: {
        title: 'Why We Are Chosen',
        one: 'Years in tourism',
        two: 'Ready tours',
        three: 'Satisfied customers',
        four: 'Airfare discounts',
        show: 'Show more',
        hidden: 'Hide',
        dsc: 'Our travel agency is a real success story. We started our journey in 2020 as a small company. Today we are one of the leaders in the travel services market, offering trips all over the world.',
        dsc2: "<br/>Our success is built on the work of a team of highly qualified specialists, each of whom loves his job and gives it all his strength. We want to help people see the world and make it accessible to everyone. We offer travel all over the world, from small day trips to full world tours. In addition, we offer visa processing services for other countries. Thanks to a deep knowledge of the rules of migration legislation and the history of each country, we are ready to provide high-quality assistance in obtaining visas for everyone who wants to travel abroad."
    },
    story: {
        title: 'Our Story'
    },
    services: {
        title: 'Your Journey Starts Here',
        tours: [
            {
                id: 1,
                country: 'Qatar',
                duration: "6 nights / 7 days",
                price: "from $550",
                peoples: '10 people',
                lang: 'Russian',
                img: 'qatar.webp',
                desc: 'Qatar - the modern pearl of the Persian Gulf! A blend of luxury, traditions, and innovations. From majestic skyscrapers to traditional bazaars, from desert safaris to exquisite restaurants - everyone will find their adventure here. Travel to Qatar is a chance to immerse yourself in the richness of culture and beauty of this amazing country. Trust us to organize your unforgettable journey!'
            },
            {
                id: 2,
                country: 'Georgia',
                duration: "7 nights",
                price: "from $700",
                peoples: '10 people',
                lang: 'Russian',
                img: 'georgia.webp',
                desc: 'Georgia - a country with a rich history and colorful landscapes. Tbilisi combines ancient streets and modern cafes. The caves of Uplistsikhe offer unique cave cities. Borjomi is a health oasis with mineral springs. Kakheti is an area of winemaking and cultural landmarks. Trust us with your journey and discover many amazing places in Georgia.'
            },
            {
                id: 3,
                country: 'Sharm El Sheikh',
                duration: "7 days",
                price: "from $720",
                peoples: '10 people',
                lang: 'Russian',
                img: 'sharm.webp',
                desc: 'Sharm El Sheikh - crystal-clear waters, luxurious beaches, underwater world, and desert adventures await you here. Relax on the beach, explore coral reefs, enjoy active entertainment, and learn to dive with diverse marine life. Let us make your journey unforgettable.'
            },
            {
                id: 4,
                country: 'Prague',
                duration: "7 days",
                price: "from $1 588",
                peoples: '10 people',
                lang: 'Russian',
                img: 'prague.webp',
                desc: 'Prague - a magical city of ancient castles, bridges, and streets. Every stone here holds a story, and architectural masterpieces transport you to a fairytale past century. Enjoy culture, romance, and the incomparable atmosphere of this magnificent European capital.'
            },
            {
                id: 5,
                country: 'Antalya',
                duration: "7 nights",
                price: "from $1 599",
                peoples: '10 people',
                lang: 'Russian',
                img: 'antalya.webp',
                desc: 'Antalya - the gem of the Turkish Riviera! Discover endless beaches, historical treasures, and the unique atmosphere of this resort area. Our tours to Antalya will give you the opportunity to immerse yourself in the beauty of the Mediterranean Sea, enjoy sunny days and nightlife. A variety of activities, amazing monuments, and the hospitality of this place will provide you with an unforgettable experience. Join us on a journey to Antalya and create your unforgettable memories.'
            },
            {
                id: 6,
                country: 'Bali',
                duration: "8 days",
                price: "from $1 630",
                peoples: '10 people',
                lang: 'Russian',
                img: 'bali.webp',
                desc: 'Bali - the gem of Indonesia! Heavenly beaches, ancient temples, and magnificent nature await you. Relax in luxurious villas, explore tropical forests, and immerse yourself in a unique culture. We will help you create an unforgettable journey to Bali, where every moment becomes a part of your own story.'
            },
        ]
    },
    vises: {
        title: 'Visa Application',
        dsc: "Applying for a Schengen visa category C <br/> -Full package <br/> -Only tour <br/><br/> Applying for a Schengen work visa D <br/> -Getting a guaranteed invitation <br/> -Full support <br/> <br/> Applying for a US visa <br/> -B1-B2 <br/> -F1 <br/> -DV1 <br/> -B3A <br/> Receipt of a guarantor of an invitation!"
    },
    team: {
        title: 'Meet Our Team'
    },
    dynamicPage: {
        tourAbout: [
            {icon: '/images/time.webp', title: 'Duration'},
            {icon: '/images/group.webp', title: 'Number of People'},
            {icon: '/images/lang.webp', title: 'Languages'},
            {icon: '/images/money.webp', title: 'Price'}
        ],
        bookForm: {
            title: 'Book a Tour',
            leaveRequest: 'Leave a request and our manager will contact you',
            name: 'Your name',
            tel: 'Your phone',
            email: "Your Email",
            required: 'This field is required',
            errorName: 'Name must be at least 3 characters',
            errorEmail: 'This field must contain a valid E-mail',
            errorTel: 'Invalid number',
            btnBook: 'Book'
        },
        accordionQuestion: [
            {
                title: 'How can I book a tour?',
                desc: 'You can easily book a tour by filling out our convenient online form on the website. Alternatively, you can contact us by phone at +998 (95) 323-88-80 or by email at thtagency02@gmail.com for assistance.'
            },
            {
                title: 'What documents will I need for the trip?',
                desc: 'For international travel, you will need a visa, passport, and possibly medical insurance. Detailed instructions will be provided upon booking.'
            },
            {
                title: 'Can I add additional nights of accommodation?',
                desc: 'Yes, you can extend the duration of your stay by adding additional nights of accommodation. Please contact us to discuss this option.'
            },
            {
                title: 'What are the rules for flight cancellation or delay?',
                desc: "The cancellation and delay policy depends on the airline. We recommend reviewing the rules and recommendations on the airline's website or contacting us for detailed information"
            }
        ]
    }
}