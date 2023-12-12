import './button.css';

function Button({IsLightMode , title , icon }) {
    return (
        <button className={`button-c ${ IsLightMode ? 'btn-light' : ' ' }`}>
            <span className='icon'>{icon}</span>
            <span className='title'>{title}</span>
        </button>
    )
}

export default Button;