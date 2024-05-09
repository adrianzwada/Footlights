import { FaStar } from 'react-icons/fa'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

const TvCard= ({ tvData }) => {
	function ratingAdjust(par, decimalPlaces = 1) {
		const factor = 10 ** decimalPlaces
		return Math.floor(par * factor) / factor
	}
	return (
		<>
			{tvData &&
				tvData.results.map((tv, index) => (
					<div key={index}>
						{/* <Link to=wyciągnąć dynamicznie id> */}
						<Card sx={{ minWidth: '5rem' }}>
							<CardActionArea>
								<CardMedia
									component='img'
									height='200'
									image={`https://image.tmdb.org/t/p/w533_and_h300_bestv2${tv.backdrop_path}`}
									alt={tv.name}
								/>
								<CardContent>
									<Typography gutterBottom variant='h6' component='div'>
										{tv.name}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size='medium' color='primary'>
									<FaStar style={{ color: 'yellow' }} />
									{ratingAdjust(tv.vote_average)}
								</Button>
							</CardActions>
							<div>
								Release date:
								<p>{tv.first_air_date}</p>
							</div>
						</Card>
					</div>
				))}
			);
		</>
	)
}

export default TvCard