import { Box, Heading, Td, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const LeaderboardCard = ({ place, username, totalWins, avgGuesses }) => {
	const [backgroundColor, setBackgroundColor] = useState('white')
	useEffect(() => {
		if (place === 0) setBackgroundColor('gold')
		else if (place === 1) setBackgroundColor('silver')
		else if (place === 2) setBackgroundColor('tan')
	}, [])
	console.log(backgroundColor)
	return (
		<Tr color={backgroundColor} className='shadow-md'>
			<Td className='font-bold'>{place + 1}</Td>
			<Td className='font-bold'>{username.toUpperCase()}</Td>
			<Td className='font-bold'>{totalWins}</Td>
			<Td className='font-bold'>{avgGuesses}</Td>
		</Tr>
	)
}

export default LeaderboardCard
