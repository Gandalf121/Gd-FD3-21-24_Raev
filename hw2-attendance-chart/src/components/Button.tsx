interface ButtonProps {
    onClick: () => void;
    text: string;
    disabled?:boolean;
    styles?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, styles,disabled }) => {
    return (
        <button style={styles} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}