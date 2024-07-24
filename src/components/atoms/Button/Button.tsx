import styles from './Button.module.css';

type ButtonProps = { 
  handleClick: () => any | undefined,
  text: string,
  disabled: boolean,
  style: "primary" | "secondary" | "disabled" | "success",
  type: "button" | "submit" | "reset" | undefined,
};

const Button: React.FC<ButtonProps> = ({text, style, handleClick, type, disabled}) => {

  return (
    <button 
        className={[
            styles.button, 
            disabled && styles.disabled, 
            styles[style]
        ].join(' ')}
        onClick={handleClick}
        type={type}
    >
        {text}
    </button>
  );
}

export default Button;
