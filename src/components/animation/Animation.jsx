import React from 'react'
import './animation.css'

const Animation = (props) => {
	const styles = {
		backgroundPosition: `${props.currentFrame * 10.8}% 0`
	}

	return (
		<div className='animation-container'>
			<div
				className="sprite-container"
				style={styles}>
			</div>

			<button
				className="button-animate"
				onClick={props.handleButtonClick}
			>
				Flyyaur
			</button>
		</div>
	)
}

export default Animation
