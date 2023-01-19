import { useEffect, useState } from 'react'
import './controlCounter.css'
import { Button } from 'antd'

const ControlCounter = () => {
	const [counter, setCounter] = useState(0)
	const [isCounting, setIsCounting] = useState(false)

	useEffect(() => {
		let interval = setInterval(() => {
			isCounting && setCounter(counter => counter + 1)
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [isCounting])

	let handleStart = () => {
		setIsCounting(true)
	}

	let handleStop = () => {
		setIsCounting(false)
	}

	let handleClear = () => {
		setIsCounting(false)
		setCounter(0)
	}

	return (
		<div className='control-wrapper'>
			<div className='counter'>{counter}</div>
			<div>
				{isCounting ? (
					<Button type='primary' onClick={handleStop} className='startCounter'>
						Stop
					</Button>
				) : (
					<Button type='primary' onClick={handleStart} className='startCounter'>
						Start
					</Button>
				)}
				<Button onClick={handleClear} className='startCounter'>
					Clear
				</Button>
			</div>
		</div>
	)
}

export default ControlCounter
