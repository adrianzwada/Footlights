'use client'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export const Navigation = () => {
	const ref = useRef(null)
	const [isIntersecting, setIntersecting] = useState(true)

	useEffect(() => {
		if (!ref.current) return
		const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))

		observer.observe(ref.current)
		return () => observer.disconnect()
	}, [])
	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting ? 'bg-zinc-900/0 border-transparent' : 'bg-zinc-900/500  border-zinc-800 '
				}`}
			>
				<div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto bg-mistyRose '>
					<div className='flex justify-between gap-8'>
						<Link href='/movie' className='duration-200 text-mistyRose-400 hover:text-sliver'>
							Movie
						</Link>
						<Link href='/tvs' className='duration-200 text-mistyRose-400 hover:text-sliver-400'>
							TVS
						</Link>
						<Link href='/people' className='duration-200 text-mistyRose-400 hover:text-mistyRose-100'>
							People
						</Link>
					</div>

					<Link href='/' className='duration-200 text-zinc-300 hover:text-zinc-100'>
						<ArrowLeft className='w-6 h-6 ' />
					</Link>
				</div>
			</div>
		</header>
	)
}
