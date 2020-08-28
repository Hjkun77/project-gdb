import React from 'react'
import { Foo, Link } from './styles'

const Footer = () => (
	<Foo>
		Passionately made by{' '}
		<Link
			href='https://challenges.adb.org/en/challenges/earth-observation/teams/971'
			target='_blank'
			rel='noopener noreferrer'
		>
			Team GDB
		</Link>
	</Foo>
)

export default Footer
