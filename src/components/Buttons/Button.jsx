import './Button.css'

export const Button = (props) => {
    console.log(props);
    const handleClick = () => {
        alert("my butoon");
    }

    const name = props.name
    return (

        <button 
            className='button-container' 
            onClick={handleClick}
        >
            {props.children || name}
        </button>
    )
}