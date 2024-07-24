import styles from './Input.module.css';

type InputProps = { 
  handleChange: (value: string) => any,
  label: string | undefined,
  name: string,
  type: "text" | "email" | "password",
  id: string,
  invisible: boolean,
  value:string,
};

const Input: React.FC<InputProps> = ({handleChange, label, name, id, type, value,invisible}) => {

  return (
    <div className={!invisible ? styles.container : undefined}>
      {label &&
        <label>{label}</label>
      }
      <input
        value={value}
        name={name}
        id={id}
        type={type}
        onChange={(e) => handleChange(e)} 
        className={[styles.input, invisible && styles.invisible].join(' ')}
      />
    </div>
  );
}

export default Input;
