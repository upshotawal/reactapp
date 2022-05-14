import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'close' : 'click me'}
                onClick={onAdd}
            />)}

        </header>

    )
}

const headingStyle = {
    color: 'GrayText',


}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
