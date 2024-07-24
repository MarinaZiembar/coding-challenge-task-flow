import Form from '../../organisms/Form/Form';
import styles from './EditTaskTemplate.module.css';
import { editTaskForm } from '../../../data/taskForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
  
type EditTaskProps = {
  handleSubmit: () => any,
  task: object,
  setTask: () => any,
}

const EditTaskTemplate: React.FC<EditTaskProps> = ({handleSubmit, task, setTask}) =>  {

  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
          <h1 className={styles.title}>Update task</h1>
      </div>
      <div className={styles.formContainer}>
        <Form
          fields={editTaskForm.fields}
          confirmButton={editTaskForm.confirmButton}
          cancelButton={editTaskForm.cancelButton}
          handleSubmit={() => handleSubmit(task, navigate)}
          setTask={setTask}
          task={task}
        />
      </div>
    </div>
  );
}

export default EditTaskTemplate;
