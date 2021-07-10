import React from 'react';
import { PropTypes } from 'prop-types';
import './Button.css';


const Button = ({ color , text}) => {
    return (
        <div className="btn" style={{ backgroundColor:color}}>
            {text}
        </div>
    )
}

Button.defaultProps = {
    color: '#12b9ab',
    backgroundColor: 'white'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button
