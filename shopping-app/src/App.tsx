import { useId, useState } from 'react'
import ShoppingList from './components/ShoppingList'
import ShoppingListForm from './components/ShoppingListForm'
import Item from './models/items'
import { v4 as getId } from 'uuid'




function App() {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (product: string, qty: number) => {
    setItems([...items, { id: getId(), product: product, qty: qty }])
  }

  const deleteItem = (id : string) => {
    setItems(prevItems =>{ return prevItems.filter(item => item.id !== id.toString())})
  }

  return (
    <>
      <h1>Shopping List</h1>
      <ShoppingListForm addItem={addItem} />
      <ShoppingList items={items} onDelete={deleteItem} />
    </>
  )
}

export default App
