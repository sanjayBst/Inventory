import {Fragment} from 'react';
import AddInventoryForm from "./AddInventoryForm";

const AddInventory = (props) =>{

    const onAddInventory = (item) =>{
       
        props.onAddToInventor(item);
    }


    return (
    <Fragment>

     <h2> Add Inventory </h2>
     <AddInventoryForm  onAddInventory={onAddInventory}/>
    </Fragment>
    )
}


export default AddInventory