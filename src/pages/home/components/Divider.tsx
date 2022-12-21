import React from 'react'

interface DividerProps {
	dividerSize: string
}

const Divider = ({ dividerSize }: DividerProps) => {

	if(dividerSize === 'small') {
		return (
			<div id="dividerSmall"></div>
		)
	}

	return (
		<div id="dividerLarge"></div>
	)
}

export default Divider