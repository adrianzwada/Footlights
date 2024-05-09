import MovieSlider from './components/MovieSlider/MovieSlider'
import Link from 'next/link'
const navigation = [
	{ name: 'Movies', href: '/movie' },
	{ name: 'TVs', href: '/tvs' },
	{ name: 'People', href: '/people' },
]

export default function Home() {
	try {
		return (
			<>
				<header class='container flex flex-row-reverse items-center justify-between p-6 mx-auto'>
					<nav className='h-20'>
						<ul className='flex justify-center gap-20'>
							{navigation.map(item => (
								<Link key={item.href} href={item.href} className='text-sm'>
									<p>{item.name}</p>
								</Link>
							))}
						</ul>
					</nav>
				</header>
				<MovieSlider />
			</>
		)
	} catch (error) {
		console.error('Error fetching movies:', error)
		return <div>Error fetching movies. Please try again later.</div>
	}
}
