import {Fragment} from 'react';

const AddInventoryForm = (props) => {

    const onSybmitHandler =(event) => {
            event.preventDefault();
            
    }

    return (
        <Fragment>
            <form  onSubmit={onSybmitHandler}  >

                <label forHtml="ram"> RAM</label>
                <input type="text" name="ram" id="" />
                <label forHtml="processor"> Processor </label>
                <input type="text" name="processor" id="" />

                <button type="submit">Submit </button>

            </form>
        </Fragment>
    )
}


export default AddInventoryForm;