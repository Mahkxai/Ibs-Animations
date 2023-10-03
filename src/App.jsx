import { useState, useRef } from 'react'
import { Navbar, Animation } from './components'
import './App.css'

function App() {
	const [currentFrame, setCurrentFrame] = useState(0);
	const totalFrames = 10;
	const animationRef = useRef(null);

	const handleButtonClick = () => {
		if (animationRef.current) {
			clearInterval(animationRef.current);
		}

		let frame = 0;
		animationRef.current = setInterval(() => {
			setCurrentFrame(frame);
			console.log(frame)

			if (frame >= totalFrames - 1) {
				clearInterval(animationRef.current);
			}

			frame++;
		}, 300);
	};

	return (
		<div>
			<Navbar />
			<Animation
				currentFrame={currentFrame}
				handleButtonClick={handleButtonClick}
			/>
		</div >
	);
}

export default App