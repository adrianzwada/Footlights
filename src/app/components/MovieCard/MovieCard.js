import Link from 'next/link'
export default function MovieCard({ movieData }) {
	function ratingAdjust(par, decimalPlaces = 1) {
		const factor = 10 ** decimalPlaces
		return Math.floor(par * factor) / factor
	}
	return (
		<div className='w-40 bg-blue-300 rounded-xl'>
			<Link key={movieData.id} href='/movie/[id]' as={`/movie/${movieData.id}`} passHref>
				<img
					src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
					alt={movieData.title}
					className='w-full h-auto rounded-t-lg object-cover'
				/>
				<button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
					Add
				</button>
				<p className='font-bold text-xl'>{movieData.title}</p>
				<p>{ratingAdjust(movieData.vote_average)}</p>
			</Link>
		</div>
	)
}
