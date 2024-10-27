import { useEffect, useState } from 'react'

export const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(600)
    useEffect(() => {
        if (timeLeft <= 0) {
            return
        }
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [timeLeft])
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60

        return `${minutes < 10 ? '0' + minutes : minutes}:${secs < 10 ? '0' + secs : secs}`
    }
    return <span className="w-[50px] inline-block">{formatTime(timeLeft)}</span>
}
