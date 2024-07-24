import CardTask from '../../molecules/CardTask/CardTask';
import styles from './HomeTemplate.module.css';

type HomeTemplateProps = { 
    todaysTasks: Array<object>, 
    upcomingTasks: Array<object>,
    deleteTask: () => void
};
  
const HomeTemplate: React.FC<HomeTemplateProps> = ({todaysTasks, upcomingTasks, deleteTask}) =>  {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <h3 className={styles.subtitle}>Welcome back!</h3>
            <h1 className={styles.title}>Today's todo's</h1>
        </div>
        <ul className={styles.cardsContainer}>
            {todaysTasks?.length > 0 ?
                todaysTasks?.map((task:object) => (
                    <CardTask 
                        key={task.id} 
                        id={task.id}
                        completed={task.completed}
                        title={task.title}
                        deleteTask={deleteTask}
                    />
                )) :
                <p className={styles.emptyState}>
                    No results match your search criteria.
                </p>
            }
        </ul>
        <div className={styles.heading}>
            <h2 className={styles.title}>Upcoming</h2>
        </div>
        <ul className={styles.cardsContainer}>
            {upcomingTasks?.length > 0 ?
                upcomingTasks?.map((task) => (
                    <CardTask 
                        key={task.id} 
                        id={task.id}
                        completed={task.completed}
                        title={task.title}
                        deleteTask={deleteTask}
                    />
                )):
                <p className={styles.emptyState}>
                    No results match your search criteria.
                </p>
            }
        </ul>
    </div>
  );
}

export default HomeTemplate;
