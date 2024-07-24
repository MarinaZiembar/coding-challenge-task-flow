import { useContext, useEffect } from 'react';
import AppLayout from '../components/templates/AppLayout/AppLayout';
import HomeTemplate from '../components/templates/HomeTemplate/HomeTemplate';
import { AppContext } from '../contexts/AppContext';


function Home() {

    const {getTasks, deleteTask, tasks} = useContext(AppContext);

    useEffect(() => {
        getTasks();
    },[])

    return (
        <AppLayout activeMenuItem='dashboard'>
            <HomeTemplate 
                todaysTasks={tasks} 
                upcomingTasks={tasks}
                deleteTask={deleteTask}
            />
        </AppLayout>
    );
}

export default Home;
