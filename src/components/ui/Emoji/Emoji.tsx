import { FC } from 'react'

interface EmojiProps {
    code: number
    size?: number | string
}

export const Emoji: FC<EmojiProps> = ({ code, size }) => {
    return (
        <span
            style={{
                height: typeof size === 'number' ? `${size}px` : size,
                fontSize: typeof size === 'number' ? `${size}px` : size,
                lineHeight: 1,
            }}
        >
            {String.fromCodePoint(code)}
        </span>
    )
}
