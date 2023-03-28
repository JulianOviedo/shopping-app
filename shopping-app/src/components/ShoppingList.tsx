import Item from "../models/items"

interface ShoppingListProps {
    items: Item[]
    onDelete: (id: string) => void
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
    return (
        <div>
            <ul>
                {props.items.map((items) => (
                        <div className="list-item">
                            <li key={items.id}>
                                {items.product} - {items.qty}
                            </li>
                            <button className="list-item-button" onClick={() => props.onDelete(items.id)}>X</button>
                        </div>
                ))}
            </ul>
        </div>
    )
}