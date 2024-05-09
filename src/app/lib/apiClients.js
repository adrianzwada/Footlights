class TheMovieDBClient {
	constructor() {
		this.baseUrl = 'https://api.themoviedb.org/3'
		this.authToken = process.env.NEXT_PUBLIC_API_TOKEN
	}
	// adding a languae parameter later
	async handleRequest(endpoint) {
		try {
			const response = await fetch(`${this.baseUrl}${endpoint}`, {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${this.authToken}`,
				},
			})

			if (!response.ok) {
				throw new Error(`Failed to fetch data. Status: ${response.status}, ${response.statusText}`)
			}

			return await response.json()
		} catch (error) {
			console.error(error)
			return null
		}
	}
	fetchPopularMoviesData() {
		return this.handleRequest('/trending/movie/week?language=en-US')
	}
	fetchPopularTvsData() {
		return this.handleRequest(`/trending/tv/week?language=en-US`)
	}
	fetchPopularPeopledata() {
		return this.handleRequest(`/trending/person/week?language=en-US`)
	}
	fetchMovieData(id) {
		return this.handleRequest(`/movie/${id}/videos?language=en-US`)
	}
}

const movieDBClient = new TheMovieDBClient()
export default movieDBClient
