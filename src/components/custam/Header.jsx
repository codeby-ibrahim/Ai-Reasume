import React from 'react'

const Header = () => {
    return (
        <div className='p-3 px-5 flex justify-between shaddow-md'>
            <img src="/logo.svg" width={100} height={100} />

            <button>Get Start</button>
        </div>
    )
}

export default Header