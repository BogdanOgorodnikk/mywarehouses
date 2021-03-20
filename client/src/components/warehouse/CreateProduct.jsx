import React, {useState} from 'react'
import { useParams } from 'react-router'
import { postProduct } from '../../actions/product'
import '../../scss/warehouse/createproduct.scss'

const CreateProduct = (props) => {
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState('')
    const [characteristicks, setCharacteristicks] = useState('')
    const [number, setNumber] = useState(0)
    const [price, setPrice] = useState(0)

    const id = useParams()

    function createProduct(e) {
        e.preventDefault()
        postProduct(id.id, title, characteristicks, number, price)
        setTitle('')
        setCharacteristicks('')
        setNumber(0)
        setPrice(0)
        props.refresh()
    }


    return (
        <div className="create-product">
            <div className="container">
                <h2 className="create-product__headline">Назва склада: <span className="create-product__headline--span">Колом</span></h2>
                <button className="create-product__button button" onClick={() => setShowForm(!showForm)}>Створити продукт</button>
                {showForm === true &&
                <form className="create-product__form">
                    <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" className="create-product__form--input input" placeholder="Назва товара" />
                    <input value={characteristicks} onChange={(event) => setCharacteristicks(event.target.value)} type="text" className="create-product__form--input input" placeholder="Характеристика" />
                    <input value={number} onChange={(event) => setNumber(event.target.value)} type="text" className="create-product__form--input input" placeholder="Кількість" />
                    <input value={price} onChange={(event) => setPrice(event.target.value)} type="text" className="create-product__form--input input" placeholder="Ціна" />
                    <button onClick={createProduct} className="create-product__form--button button">Створити</button>
                </form>
                }
            </div>
        </div>
    )
}

export default CreateProduct;