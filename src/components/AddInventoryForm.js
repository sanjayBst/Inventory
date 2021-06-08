import {Fragment, useState} from 'react';

const AddInventoryForm = (props) => {

    const [enteredRam, setEnteredRam] = useState("");
    const [enteredProcessor, setEnteredProcessor] = useState("")

    const onSubmitHandler =(event) => {
            event.preventDefault(); 
            console.log(enteredRam, enteredProcessor)
            let inventoryItem ={
                id: Date.now(),
                ram: enteredRam,
                processor:enteredProcessor
            }
            props.onAddInventory(inventoryItem);
            setEnteredRam("");
            setEnteredProcessor("");
    }

    const ramChangeHandler=(event) => {
        event.preventDefault(); 
       
        setEnteredRam(event.target.value)
        console.log(enteredRam)
    }

    const processorChangeHandler=(event) => {
        event.preventDefault(); 
       
        setEnteredProcessor(event.target.value)
        console.log(enteredProcessor)
    }


    return (
        <Fragment>
            <form  onSubmit={onSubmitHandler}  >

                <label forHtml="ram"> RAM</label>
                <input onChange={ramChangeHandler} value={enteredRam} type="text" name="ram" id="" />
                <label forHtml="processor"> Processor </label>
                <input onChange={processorChangeHandler} value={enteredProcessor} type="text" name="processor" id="" />

                <button type="submit">Submit </button>

            </form>
        </Fragment>
    )
}


export default AddInventoryForm;