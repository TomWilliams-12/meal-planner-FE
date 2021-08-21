import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: 'grey' }}
            className='btn p-2 rounded text-white'>{ text }
        </button>
    )
}

Button.defaultProps = {
    color: 'grey'
}

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button