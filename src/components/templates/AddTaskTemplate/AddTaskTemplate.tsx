import Form from '../../organisms/Form/Form';
import styles from './AddTaskTemplate.module.css';
import { addTaskForm } from '../../../data/taskForm';
import { useNavigate } from 'react-router-dom';

type AddTaskProps = {
  handleSubmit: () => any,
  task: object,
  setTask: () => any,
}
  
const AddTaskTemplate: React.FC<AddTaskProps> = ({handleSubmit, task, setTask}) =>  {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Add task</h1>
      </div>
      <div className={styles.formContainer}>
        <Form
          fields={addTaskForm.fields}
          confirmButton={addTaskForm.confirmButton}
          cancelButton={addTaskForm.cancelButton}
          handleSubmit={() => handleSubmit(task, navigate)}
          setTask={setTask}
          task={task}
        />
      </div>
    </div>
  );
}

export default AddTaskTemplate;
