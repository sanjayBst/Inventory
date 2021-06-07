import { Fragment } from 'react';

const InventoryItem =(props)=>{
 return(
     <Fragment>

         <p> Id:  {props.item.id}  </p>
         <p> RAM: {props.item.ram}  </p>
         <p> Processor: {props.item.processor}  </p>

     </Fragment>
 )

}


 export default InventoryItem;