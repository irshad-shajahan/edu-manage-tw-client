import React from 'react'

function Loader() {
    return (
        <div className='h-screen fixed top-0 left-0 flex justify-center w-full items-center bg-white/40'>
            <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader