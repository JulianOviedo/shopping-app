import Item from "../models/items"

interface ShoppingListProps {
    items: Item[]
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {props.items.map((items) => (
                    <li key={items.id}>
                        {items.product} - {items.qty}
                    </li>
                ))}
            </ul>
        </div>
    )
}