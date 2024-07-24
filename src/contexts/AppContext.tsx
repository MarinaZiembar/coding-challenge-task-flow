import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';


const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({
        id:"",
        title:"",
        description:""
    });

    const getTasks = async () => {
        setLoading(true);
        await axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTasks(response.data.slice(0, 10));
                setLoading(false);
            });
    };
    const getTask = async (id:number) => {
        setLoading(true);
        await axios
            .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {
                setTask(response.data);
                setLoading(false);
            });
    };
    const searchTasksByName = async(query:string) => {
        await axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            setTasks(response.data.filter(
                (task:object) => task.title.includes(query)
            ).slice(0, 10));
            setLoading(false);
        });
    }
    const deleteTask = (id:string) => {
        setLoading(true);
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(() => {
            setTasks(tasks.filter(task => task.id !== id));
            setLoading(false);
        });
    };
    const addTask = (task:object, navigate) => {
        setLoading(true);
        axios.post('https://jsonplaceholder.typicode.com/todos', task)
        .then(() => {
          navigate('/');
        });
    };
    const editTask = (task:object, navigate) => {
        setLoading(true);
        axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task)
        .then(() => {
          navigate('/');
          setLoading(false);
        });
    };

    return (
        <Provider
            value={{
                loading, setLoading,
                getTasks, tasks, 
                getTask, setTask,task, 
                searchTasksByName, deleteTask,
                addTask, editTask
            }}
        >
            {children}
        </Provider>
    );
};

export { AppContext, AppProvider };
