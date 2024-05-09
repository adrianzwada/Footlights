import theMovieID from '../../lib/apiMovieId'
import { Navigation } from '@/app/components/Navigation/Navigation'
export default async function MovieCardIdComponent({ params }) {
	const movie = await theMovieID.fetchMovieDetails(params.id)
	function allGenres(genres) {
		return genres.map(genre => genre.name).join(', ')
	}
	return (
		<div>
			<Navigation />
			<section className='p-4 md:p-8 shadow-md flex bg-mistyRose text-blackBean'>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
					className='w-full h-auto rounded-t-lg object-cover'
				/>
				<div className='p-4'>
					<h2 className='text-2xl font-bold pb-8'>{movie.title}</h2>
					<div className='pb-6'>
						<p>Overview: {movie.overview}</p>
					</div>
					<div className=''>
						<p>Release Date: {movie.release_date}</p>
						<p>Runtime: {movie.runtime} minutes</p>
						<p>
							<strong>Genre: </strong> {allGenres(movie.genres)}
						</p>
					</div>
					<p className=''>
						Rating: {movie.vote_average.toFixed(2)} from {movie.vote_count} voters
					</p>
				</div>
			</section>
		</div>
	)
}
