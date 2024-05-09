import movieDBClient from '../../lib/apiClients'
import MovieCard from '../MovieCard/MovieCard'
export default async function MovieSlider() {
	try {
		const movieData = await movieDBClient.fetchPopularMoviesData()
		const renderedMovies = movieData.results.map((movie, index) => (
			<div key={index} className='py-6 px-6'>
				<MovieCard movieData={movie} />
			</div>
		))

		return (
			<section>
				<h2 className='font-bold text-xl'>Under the Spotlight: What to Watch - The Week's Most Popular Films</h2>
				<main className='bg-gray-200 min-h flex justify-center items-center'>{renderedMovies}</main>
			</section>
		)
	} catch (error) {
		console.error('Error fetching movies:', error)
		return <div>Error fetching movies. Please try again later.</div>
	}
}
