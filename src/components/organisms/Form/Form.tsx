import { useNavigate, useNavigation } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import styles from './Form.module.css';

type FormProps = { 
  handleChange: () => any,
  handleSubmit:() => any,
  fields: Array<object>,
  confirmButton: Object,
  cancelButton: Object,
  setTask:(task:object) => any,
  task:Object,
};

const Form: React.FC<FormProps> = ({setTask, task, handleSubmit, fields, confirmButton, cancelButton}) => {

    const navigate = useNavigate();
    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.id]:e.target.value
        })
    }

    return (
        <form className={styles.form}>
            {fields.map((field:object) => (
                <Input 
                    key={field.id} 
                    id={field.id} 
                    label={field.label}
                    name={field.name}
                    handleChange={handleChange}
                    type={field.type}
                    value={task[field.id] || ''}
                />
            ))}
            <div className={styles.buttonsContainer}>
                <Button
                    type="button"
                    handleClick={handleSubmit}
                    text={confirmButton.text}
                    style={confirmButton.style}
                    disabled={confirmButton.disabled}
                />
                <Button
                    type="button"
                    handleClick={() => navigate('/')}
                    text={cancelButton.text}
                    style={cancelButton.style}
                    disabled={cancelButton.disabled}
                />
            </div>
        </form>
    );
}

export default Form;
