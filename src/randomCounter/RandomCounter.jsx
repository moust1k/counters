import './RandomCounter.css'
import React, { useState } from 'react'
import { Button } from 'antd'
import { getRandomArbitrary } from './utilits/getRandomArbitrary'
import Item from './item/Item'

const RandomCounter = () => {
	const [items, setItems] = useState([])

	let handleDelete = id => {
		setItems(items.filter(item => item.id !== id))
	}

	let onRandom = () => {
		let time = getRandomArbitrary(10, 20)
		let item = {
			id: Date.now(),
			time
		}
		setItems(items => [...items, item])
	}

	return (
		<div className='random_wrapper'>
			<Button onClick={onRandom} type='primary'>
				Generate random
			</Button>
			{items.map((item, index) => {
				return (
					<div className='random_item' key={item.id}>
						<Item item={item} index={index + 1} handleDelete={handleDelete} />
					</div>
				)
			})}
		</div>
	)
}

export default RandomCounter
