import React from 'react'

export const Navbar: React.FC = () => {
    return (
        <nav className='grey darken-4'>
            <div className='container'>
                <div className='nav-wrapper'>
                    <a href='#' className='brand-logo'>
                        To do
                    </a>
                    <ul id='nav-mobile' className='right hide-on-med-and-down'></ul>
                </div>
            </div>
        </nav>
    )
}
