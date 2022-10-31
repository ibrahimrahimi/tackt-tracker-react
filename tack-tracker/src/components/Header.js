import PropTypes from 'prop-types'

import React from 'react'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <p className='p'>This is a test paragraph!</p>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header