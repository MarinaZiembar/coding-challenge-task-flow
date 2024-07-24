import styles from './CardTask.module.css';
import { Link } from 'react-router-dom';
import edit from '../../../assets/edit.svg';
import trash from '../../../assets/trash.svg';

interface CardTaskProps {
  title: string;
  deleteTask: (taskId: number) => any;
  completed: boolean;
  id: number;
}

const CardTask: React.FC<CardTaskProps> = ({title, completed, deleteTask, id}) => {
  return (
    <li className={styles.card}>
      <div>
        <div className={[styles.statusBadge, completed ? styles.done : styles.pending].join(' ')}>
          {completed ? 'Done' : 'Pending'}
        </div>
        <p className={styles.title}>
          {title}
        </p>
      </div>
      <div className={styles.actions}>
        <Link to={`/edit/${id}`} className={styles.actionIcon}>
          <img src={edit} className={styles.editIcon}/>
        </Link>
        <button onClick={() => deleteTask(id)} className={styles.actionIcon}>
          <img src={trash} className={styles.deleteIcon}/>
        </button>
      </div>
    </li>
  );
}

export default CardTask;