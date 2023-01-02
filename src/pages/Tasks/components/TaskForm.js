import { useContext, useState } from "react"
import { TasksContext } from "../../../Contexts/TasksContext"
import Button from "../../../Components/UI/Button/Button"
import TextAreaField from "../../../Components/UI/Forms/TextAreaField"
import TextField from "../../../Components/UI/Forms/TextField"

const TaskForm = ({closeModal, value, index}) => {

    const [formValue, setFormValue] = useState(value ? value : {
        title: "",
        description: ""
    })

    const [invalidField, setInvalidFields] = useState([]);

    const {addTask, editTask} = useContext(TasksContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(invalidField.length > 0) {
            alert("There are errors in the form")
            return;
        }

        if(value && !isNaN(+index)) { // S'il y a une value en props => Modification
            editTask({task: formValue, taskIndex: index})
        } else { // Sinon création
            addTask({
                ...formValue,
                createdAt: new Date(),
                isDone: false,
            })
        }

        
        closeModal()
    }

    const handleError = (error) => {
        const invalidFieldsCopy = [...invalidField];
        const invalidFieldIndex = invalidFieldsCopy.findIndex(field => field === error.name)
        if(error.error) { //Si une erreur est renvoyée
            if(invalidFieldIndex === -1) { // Si le champs n'est pas enregistré comme invalide, on l'ajoute
                setInvalidFields([...invalidFieldsCopy, error.name])
            }
            //Sinon il est déja enregistré, on ne fait rien
        } else { // Si aucune erreur n'est renvoyée
            if(invalidFieldIndex !== -1) { // Mais que le champ est enregistré comme invalide, on le supprime du tableau
                invalidFieldsCopy.splice(invalidFieldIndex, 1);
                setInvalidFields(invalidFieldsCopy);
            }
            // Si le champs n'est pas enregistré, on ne fait rien
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
            name="title"
            placeholder="New task title"
            label="Title"
            value={formValue.title}
            onChange={(value) => setFormValue({...formValue, title: value})}
            validation={{
                required: true,
                type: "string",
                minLength: 2,
                maxLength: 25
            }}
            onError={handleError}
            />
            <TextAreaField
            name="description"
            placeholder="Write your description here"
            label="Description"
            value={formValue.description}
            onChange={(value) => setFormValue({...formValue, description: value})}
            validation={{
                required: false,
                type: "string",
                minLength: 2,
                maxLength: 100
            }}
            onError={handleError}
            />
            <Button type="submit">Save</Button>
        </form>
    )
}

export default TaskForm;