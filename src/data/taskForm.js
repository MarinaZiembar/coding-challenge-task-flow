
export const addTaskForm = {
    fields:[
        {
            label:"Title",
            name:"title",
            id:"title",
            type:"text",
        },
        {
            label:"Description",
            name:"description",
            id:"description",
            type:"text",
        },
    ],
    confirmButton:{
        style:'primary',
        text: 'Add task',
        path: '/'
    },
    cancelButton:{
        style:'disabled',
        text: 'Cancel',
        path: '/'
    }
}

export const editTaskForm = {
    fields:[
        {
            label:"Title",
            name:"title",
            id:"title",
            type:"text",
        },
        {
            label:"Description",
            name:"description",
            id:"description",
            type:"text",
        },
    ],
    confirmButton:{
        style:'primary',
        text: 'Edit task',
        path: '/'
    },
    cancelButton:{
        style:'disabled',
        text: 'Cancel',
        path: '/'
    }
}