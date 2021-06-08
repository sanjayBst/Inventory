import { Fragment } from 'react';
import InventoryItem from '../components/InventoryItem';

const ListInventory = (props) => {

    console.log('inventory====>',props.inventory);

    return (
        <Fragment >
            <h2> Items in inventory </h2>
            {props.inventory.map(item => {
                return (
                    <InventoryItem key={item.id} item={item} />
                )
            })}
        </Fragment>
    )
}


export default ListInventory