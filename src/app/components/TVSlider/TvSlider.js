import movieDBClient from '../../lib/apiClients'
import TvCard from '../TvCard/TvCard'
async function TvSlider() {
	try {
		const tvData = await movieDBClient.fetchPopularTvsData()
		if (!tvData) {
			throw new Error('Failed to fetch movie data.')
		}

		return (
			<section>
				<h2>Explore popular TV shows</h2>
				<main style={{ display: 'flex' }}>
					<TvCard tvData={tvData} />
				</main>
			</section>
		)
	} catch (error) {
		console.error('Error in Slider:', error)
		return (
			<section>
				<h2>Error</h2>
				<p>Failed to load data.</p>
			</section>
		)
	}
}
export default TvSlider
