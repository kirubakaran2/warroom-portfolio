'use client';
import { useRef, useState } from "react";
import { GridVignetteBackground } from '../../app/components/ui/grid-vignette-background'
import emoji1 from '../../public/genmoji7.jpeg'
import emoji2 from '../../public/genmoji5.jpeg'
import emoji3 from '../../public/genmoji3.jpeg'
import emoji4 from '../../public/genmoji00.jpeg'
import emoji5 from '../../public/genmoji0.jpeg'
import emoji6 from '../../public/genmji8.jpg'
import emoji7 from '../../public/genmji6.jpg'
import emoji8 from '../../public/genemoji1.jpeg'
import emoji9 from '../../public/genemoji2.jpeg'

const testimonials = [
    {
        name: "Alena Zhukova",
        profession: "Software Engineer",
        description: "Guys, you have great mentors — make maximum use of that, learn from them, apply to the chart; only they guide you properly, the real learning occurs when you see in the chart what they taught will happen when you are alone — build an edge in that. 😊",
        avatar: emoji1.src,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FvTxRgCMO_69x66QbqAvruotoFi9UA0vIg&s",
    },
    {
        name: "Aiko",
        profession: "Design Engineer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        avatar: emoji2.src,
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQHiIFhIQbT2XQ/company-logo_200_200/company-logo_200_200/0/1709207887225/bgfinvestments_logo?e=2147483647&v=beta&t=NDR1Kr-FB_V86NSTD-Mc8Jm9QhFN8SbupA-D3rxKfMk",
    },
    {
        name: "kinpe Zhukova",
        profession: "Software Engineer",
        description:
            "Simple is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results..",
        avatar: emoji3.src,
        image: "https://media.licdn.com/dms/image/v2/D560BAQHoE87cnI8KHA/company-logo_200_200/B56ZWov51LHsAI-/0/1742292885770/fundednext_logo?e=2147483647&v=beta&t=vBCPdPqb8Xn0hkOyWRM5nxH0iso7FYG3q7zefuuzw3M",
    },

    {
        name: "Lisa Kemp",
        profession: "Frontend Developer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results..",
        avatar: emoji4.src,
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQHiIFhIQbT2XQ/company-logo_200_200/company-logo_200_200/0/1709207887225/bgfinvestments_logo?e=2147483647&v=beta&t=NDR1Kr-FB_V86NSTD-Mc8Jm9QhFN8SbupA-D3rxKfMk",
    },
    {
        name: "Saud",
        profession: "Game Developer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        avatar: emoji5.src,
        image: "https://media.licdn.com/dms/image/v2/D560BAQHoE87cnI8KHA/company-logo_200_200/B56ZWov51LHsAI-/0/1742292885770/fundednext_logo?e=2147483647&v=beta&t=vBCPdPqb8Xn0hkOyWRM5nxH0iso7FYG3q7zefuuzw3M",
    },
    {
        name: "Paula Smith",
        profession: "UX Designer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        avatar: emoji6.src,
        image: "https://the5ers.com/wp-content/uploads/2025/09/5erslogo.svg",
    },
    {
        name: "Paula Smith",
        profession: "UX Designer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        avatar: emoji7.src,
    },
    {
        name: "Paula Smith",
        profession: "UX Designer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        avatar: emoji8.src,
    },
    {
        name: "Paula Smith",
        profession: "UX Designer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        avatar: emoji9.src,
    },
    // New testimonial condensed from user submission
    {
        name: "Arul",
        profession: "Mentored Trader",
        description:
            "I joined Dinesh's mentorship as my last hope — within months I passed the 50k funded challenge, stopped overtrading, learned to read price and manage risk, and gained the confidence to trade consistently; Dinesh is always available and truly supportive.",
        avatar: emoji1.src,
    },
];
const duplicatedTestimonials = [...testimonials, ...testimonials];


const FUITestimonialWithSlide = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    return (

        <div id="testimonials" ref={containerRef} className=" font-sanchez relative min-h-screen bg-black text-white font-space py-20 px-6 flex flex-col items-center gap-16 overflow-hidden">
            <GridVignetteBackground />
            <div className="w-full mx-auto px-10 h-full flex flex-col justify-center">
                <div className='mb-10'>

                    <p className="mt-8 max-w-2xl mx-auto text-center text-5xl font-bitcount text-normal dark:text-gray-200">
                        What students I’ve trained say
                    </p>
                    <p className="mt-4 max-w-xl mx-auto font-sanchez text-lg text-center text-white-600">
                        Real reviews from students I've trained — their progress, results, and how the program helped their careers.
                    </p>

                </div>
                <div style={{
                    maskImage:
                        'linear-gradient(to left, transparent 0%, white 20%, white 80%, transparent 95%)',
                }} className="flex relative overflow-hidden  shrink-0   max-w-full  overflow-hidden ">
                    <div
                        className="flex animate-x-slider gap-5 w-max"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                        onFocus={() => setIsPaused(true)}
                        onBlur={() => setIsPaused(false)}
                        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                    >
                        {duplicatedTestimonials.map((testimonial, indx) => {
                            return (

                                <div key={indx} className="border-[1.2px]  flex flex-col bg-page-gradient border-white/20  dark:border-white/10  rounded-lg shrink-0 grow-0 w-[600px] h-full">
                                    <p className="px-5 py-5 text-pretty text-xl font-extralight  text-text-primary dark:text-dark-text-primary sm:text-2xl md:text-3xl tracking-tighter">
                                        &quot;{testimonial.description}.&quot;


                                    </p>
                                    <div className="border-t-[1.2px]  w-full flex gap-1 overflow-hidden">
                                        <div className="w-3/4 flex gap-3 items-center px-4 py-3">
                                            <img src={testimonial.avatar} alt='avatar' width={64} height={64} />
                                            <div className='flex flex-col flex-1 gap-0 justify-start items-start'>
                                                <h5 className='text-base font-medium md:text-lg'>{testimonial.name}</h5>
                                                <p className='text-white/30 dark:text-white/50 mt-[-4px] text-sm text-text-tertiary dark:text-dark-text-tertiary md:text-base'>{testimonial.profession}</p>

                                            </div>

                                        </div>
                                        <div className='w-[1px] bg-white/20 dark:bg-white/20' />

                                        <div className='max-w-full self-center pl-2'>
                                            <img src={testimonial.image} className='h-10 w-28 px-2 flex-none' alt='company_logo' width={112} height={40} />

                                        </div>

                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FUITestimonialWithSlide
