import Message from './Message';


const Button = ({ id, onClick }: { id: string, onClick: () => void }) => {
    return (
        <button onClick={onClick}>
            <Message id={id} />
        </button>
    );
};


export default Button;