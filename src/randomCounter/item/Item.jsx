import React, { useEffect } from 'react'
import { useTimer } from '../utilits/useTimer'
import { Typography, Divider } from 'antd'

const Item = ({ item, index, handleDelete }) => {
	const secondsLeft = useTimer(item.time)

	useEffect(() => {
		if (secondsLeft <= 0) {
			handleDelete(item.id)
		}
	}, [secondsLeft, handleDelete, item])

	return (
		<Divider plain={true}>
			<Typography.Text type='danger' strong>
				{`${index}. До удаления осталось ${secondsLeft}`}
			</Typography.Text>
		</Divider>
	)
}

export default Item
