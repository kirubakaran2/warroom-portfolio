'use client';
import React from 'react';
import { cn } from './lib/utils';
import Lenis from '@studio-freight/lenis'
import { ZoomParallax } from '../components/ui/zoom-parallax';
import cert0 from '../public/cert0.jpeg';
import cert2 from '../public/cert2.jpeg';
import cert4 from '../public/cert4.jpeg';
import cert5 from '../public/cert5.jpeg';
import cert6 from '../public/cert6.jpeg';
import cert7 from '../public/cert7.jpeg';
import cert8 from '../public/cert8.jpeg'

export default function DefaultDemo() {

	React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])


	const images = [
		{
			src: cert8.src,
			alt: 'Dinesh#1',
		},
		{
			src: cert7.src,
			alt: 'ramu#2',
		},
		{
			src: cert0.src,
			alt: 'murugan#3',
		},
		{
			src: cert5.src,
			alt: 'ventakatesh#4',
		},
		{
			src: cert4.src,
			alt: 'Sudhagar#5',
		},
		{
			src: cert2.src,
			alt: 'Surendar#6',
		},
		{
			src: cert6.src,
			alt: 'karthick#7',
		},
	];

	return (
		<main className="min-h-screen w-full">
			<div className="relative flex h-[30vh] items-center justify-center">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
				<h1 className="text-center text-4xl font-bold text-black font-bitcount font-normal md:text-6xl lg:text-7xl">
					Students Achievements
				</h1>
			</div>
			<ZoomParallax images={images} />
		</main>
	);
}
