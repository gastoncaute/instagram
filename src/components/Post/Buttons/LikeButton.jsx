"use client"
import { useState } from "react"

export default function BotonDeLike() {

    const [like, setLike] = useState(false);

    const actualColor = like===true ? "#f00" : "#000"

    const interruptorLike = () => {
        setLike(!like)
        console.log(like)
    }

    return (
        <button onClick={interruptorLike}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-heart"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke={actualColor}
            fill={actualColor}
            stroke-linecap="round"
            stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
        </button>
    )
}