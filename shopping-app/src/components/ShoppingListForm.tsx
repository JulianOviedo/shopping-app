import { useRef } from "react"

interface ShoppingListFormProps {
    addItem: (item: string, qty: number) => void
}

export default function ShoppingListForm({ addItem }: ShoppingListFormProps): JSX.Element {
    const productInputRef = useRef<HTMLInputElement>(null)
    const qtyInputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newProduct = productInputRef.current!.value
        const qty = parseInt(qtyInputRef.current!.value)
        addItem(newProduct, qty)
        productInputRef.current!.value = ''
        qtyInputRef.current!.value = ''
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Product Name" ref={productInputRef} />
            <input type='number' min={0} placeholder="Quantity" ref={qtyInputRef} />
            <button>Submit</button>
        </form>
    )
} 