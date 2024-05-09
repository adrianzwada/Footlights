import { FaStar } from 'react-icons/fa6'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
const PeopleCard = ({ peopleData }) => {
	function ratingAdjust(par, decimalPlaces = 1) {
		const factor = 10 ** decimalPlaces
		return Math.floor(par * factor) / factor
	}
	return (
		<>
			{peopleData &&
				peopleData.results.map((people, index) => (
					<div key={index}>
						{/* <Link to=wyciągnąć dynamicznie id> */}
						<Card sx={{ mr: 10 }}>
							<CardActionArea>
								<CardMedia
									component='img'
									height='200'
									width='200'
									image={`https://image.tmdb.org/t/p/w533_and_h300_bestv2${people.profile_path}`}
									alt={people.name}
								/>
								<CardContent>
									<Typography gutterBottom variant='h6' component='div'>
										<div>{people.name}adding</div>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
				))}
			);
		</>
	)
}

export default PeopleCard
