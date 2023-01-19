import { useEffect, useState } from 'react'

export const useTimer = (time) => {
    const [timeLeft, setTimeLeft] = useState(time)

    useEffect(() => {
        if (timeLeft > 0) {
            setTimeout(() => setTimeLeft((timeLeft) => timeLeft - 1), 1000)
        }
    }, [timeLeft, time]);

    return timeLeft
}