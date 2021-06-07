import { Fragment } from 'react';
import InventoryItem from '../components/InventoryItem';

const ListInventory = (props) => {



    return (
        <Fragment >
            <h2> Items in inventory </h2>
            {props.inventory.map(item => {
                return (
                    <InventoryItem item={item} />
                )
            })}
        </Fragment>
    )
}


export default ListInventory