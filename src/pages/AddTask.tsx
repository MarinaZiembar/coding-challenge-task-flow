import { useContext, useEffect } from "react";
import AddTaskTemplate from "../components/templates/AddTaskTemplate/AddTaskTemplate";
import AppLayout from "../components/templates/AppLayout/AppLayout";
import { AppContext } from "../contexts/AppContext";


function AddTask() {

  const {addTask, setTask, task} = useContext(AppContext);

  useEffect(() => {
    setTask({});
  },[])

  return (
    <AppLayout activeMenuItem='add'>
      <AddTaskTemplate 
        handleSubmit={addTask}
        task={task}
        setTask={setTask}
      />
    </AppLayout>
  );
}

export default AddTask;
