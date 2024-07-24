import { useContext, useEffect } from "react";
import AppLayout from "../components/templates/AppLayout/AppLayout";
import EditTaskTemplate from "../components/templates/EditTaskTemplate/EditTaskTemplate";
import { AppContext } from "../contexts/AppContext";
import { useParams } from "react-router-dom";


function EditTask() {

  const {getTask, setTask, task, editTask} = useContext(AppContext);

  const {id} = useParams();

  useEffect(() => {
    getTask(id);
  },[id])

  return (
    <AppLayout activeMenuItem="edit">
      <EditTaskTemplate
        setTask={setTask}
        task={task}
        handleSubmit={editTask}
      />
    </AppLayout>
  );
}

export default EditTask;
