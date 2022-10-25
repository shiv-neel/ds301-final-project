import {
	Box,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import Router from 'next/router'
import React from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { Habit } from '../../models/Habit'
import { deleteHabitAndHabitHistory } from '../../utils/habit_resolver'
import DataCardLeft from './DataCardLeft'
import DataCardRight from './DataCardRight'

export interface HabitInfoProps {
	habit: Habit | undefined
	submitted: boolean
}

const HabitInfo: React.FC<HabitInfoProps> = ({ habit, submitted }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const deleteHabit = async () => {
		if (!habit || !habit.hid) {
			alert('Error: could not delete habit.')
			return
		}
		deleteHabitAndHabitHistory(habit.hid)
		onClose()
		Router.push('/')
	}
	return (
		<Box>
			<Box className='flex gap-8 mt-8 mb-1'>
				<DataCardLeft habit={habit} submitted={submitted} />
				<DataCardRight habit={habit} submitted={submitted} />
			</Box>
			<Button
				variant='ghost'
				colorScheme='red'
				className='flex gap-2'
				onClick={onOpen}
			>
				<IoTrashOutline /> Delete Habit
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Delete Habit</ModalHeader>
					<ModalCloseButton />
					<ModalBody className='flex flex-col gap-5'>
						<p className='text-md'>
							Are you sure you want to delete your habit{' '}
							<span className='font-semibold'>{habit?.hname}</span>?
						</p>
						<p className='text-sm text-red-500 font-bold'>
							You can&apos;t undo this.
						</p>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='messenger' mr={3} onClick={deleteHabit}>
							Do it
						</Button>
						<Button variant='ghost' onClick={onClose}>
							Nevermind
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default HabitInfo
