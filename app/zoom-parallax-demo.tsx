'use client';
import React from 'react';
import { cn } from './lib/utils';
import { CircularGallery, Autoscroll } from '../components/ui/autoscroll';
import Lenis from '@studio-freight/lenis'
import cert0 from '../public/cert0.jpeg';
import cert2 from '../public/cert2.jpeg';
import cert4 from '../public/cert4.jpeg';
import cert5 from '../public/cert5.jpeg';
import cert6 from '../public/cert6.jpeg';
import cert7 from '../public/cert7.jpeg';
import cert8 from '../public/cert8.jpeg'

export default function DefaultDemo() {

	React.useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])


	const images = [
		{
			image: cert8.src,
			text: 'Dinesh#1',
		},
		{
			image: cert7.src,
			text: 'ramu#2',
		},
		{
			image: cert0.src,
			text: 'murugan#3',
		},
		{
			image: cert5.src,
			text: 'ventakatesh#4',
		},
		{
			image: cert4.src,
			text: 'Sudhagar#5',
		},
		{
			image: cert2.src,
			text: 'Surendar#6',
		},
		{
			image: cert6.src,
			text: 'karthick#7',
		},
	];

	const autoscrollImages = images.map(img => ({
		src: img.image,
		alt: img.text
	}));

	return (
		<main className="min-h-screen w-full bg-black">
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
				<h1 className="text-center text-4xl font-bold text-white tracking-tighter md:text-6xl lg:text-7xl">
					Students Achievements
				</h1>
			</div>

			{/* Mobile View: Simple Autoscroll */}
			<div className="block md:hidden w-full">
				<Autoscroll images={autoscrollImages} duration={100} />
			</div>

			{/* Desktop View: 3D Circular Gallery */}
			<div className="hidden md:block h-[600px] w-full">
				<CircularGallery items={images} bend={3} borderRadius={0.05} />
			</div>
		</main>
	);
}
