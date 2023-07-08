import React from 'react'
import ReactConfetti from "react-confetti"

function Confetti() {
    return (
        <div>
            <ReactConfetti
                width={window.innerWidth}
                height={window.innerHeight}
            />
        </div>
    )
}

export default Confetti