import { Box, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Notification } from '../../models/Notification'

interface NotificationCardProps {
	notification: Notification
}

const NotificationCard: React.FC<NotificationCardProps> = ({
	notification,
}) => {
	return (
		<Link href={`/habits/${notification.hid}`}>
			<Box className='py-2 cursor-pointer hover:text-blue-600'>
				<p className='text-lg font-bold'>{notification.title}</p>
				<p className='text-sm font-thin'>{notification.body}</p>
			</Box>
		</Link>
	)
}

export default NotificationCard
