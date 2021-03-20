import React from 'react'
import { putProduct } from '../../actions/product'
import '../../scss/warehouse/modaleditproduct.scss'

const ModalEditProduct = ({active, setActive, productId, title, characteristicks, number, price, setTitle, setCharacteristicks, setNumber, setPrice, refresh}) => {
    
    function updateProduct(e) {
        e.preventDefault()
        putProduct(productId, title, characteristicks, number, price)
        refresh()
        refresh()
        setActive(false)
    }

    if(active) {
        return (
            <div className="edit-product">
                <div className="container">
                    <div className="opinion" onClick={() => setActive(false)}></div>
                    <div className="edit-product__box" onClick={e => e.stopPropagation()}>
                        <h2 className="edit-product__box--headline">Редагування продукта</h2>
                        <form className="edit-product__form">
                            <p className="edit-product__form--info">Введіть нову назву товара в полі нижче</p>
                            <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" className="edit-product__form--input input" placeholder="Назва товара" />
                            <p className="edit-product__form--info">Введіть нову характеристику товара в полі нижче</p>
                            <input value={characteristicks} onChange={(event) => setCharacteristicks(event.target.value)} type="text" className="edit-product__form--input input" placeholder="Характеристика" />
                            <p className="edit-product__form--info">Введіть нову кількість товара в полі нижче</p>
                            <input value={number} onChange={(event) => setNumber(event.target.value)} type="text" className="edit-product__form--input input" placeholder="Кількість" />
                            <p className="edit-product__form--info">Введіть нову ціну товара в полі нижче</p>
                            <input value={price} onChange={(event) => setPrice(event.target.value)} type="text" className="edit-product__form--input input" placeholder="Ціна" />
                            <div className="edit-product__form--block">
                                <button className="edit-product__form--block--button button" onClick={updateProduct}>Змінити</button>
                                <button className="edit-product__form--block--button button" onClick={() => setActive(false)}>Відмінити</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else {
        return false
    }
}

export default ModalEditProduct