import movieDBClient from '../../lib/apiClients'
import PeopleCard from '../PeopleCard/PeopleCard'
async function PeopleSlider() {
	try {
		const peopleData = await movieDBClient.fetchPopularPeopledata()
		if (!peopleData) {
			throw new Error('Failed to fetch movie data.')
		}
		return (
			<section>
				<h2>Week in Fame: Top Celebrities Lighting Up the Entertainment Scene</h2>
				<main style={{ display: 'flex' }}>
					<PeopleCard peopleData={peopleData} />
				</main>
			</section>
		)
	} catch (error) {
		console.error('Error in SliderComponent:', error)
		return (
			<section>
				<h2>Error</h2>
				<p>Failed to load data.</p>
			</section>
		)
	}
}

export default PeopleSlider
