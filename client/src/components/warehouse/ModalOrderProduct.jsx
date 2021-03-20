import React from 'react';
import '../../scss/warehouse/modalorderproduct.scss'

const ModalOrderProduct = ({active, setActive}) => {
    if(active) {
        return (
            <div className="modal-order">
                <div className="container">
                    <div className="opinion" onClick={() => setActive(false)}></div>
                    <div className="modal-order__box" onClick={e => e.stopPropagation()}>
                        <h2 className="modal-order__box--headline">Оформлення замовлення</h2>
                        <form className="modal-order__form">
                            <p className="modal-order__form--info">
                                <span className="modal-order__form--info-span">Назва товара:</span> Диван
                            </p>
                            <p className="modal-order__form--info">
                                <span className="modal-order__form--info-span">Характеристика товара:</span> Диван
                            </p>
                            <p className="modal-order__form--info">
                                <span className="modal-order__form--info-span">Ціна товара:</span> Диван
                            </p>
                            <p className="modal-order__form--info">
                                Введіть в полі нижче кількість
                            </p>
                            <input type="number" className="modal-order__form--input input" placeholder="Кількість" />
                            <p className="modal-order__form--info">
                                Введіть в полі нижче город для отримки товара
                            </p>
                            <input type="text" className="modal-order__form--input input" placeholder="Город отримки" />
                            <p className="modal-order__form--info">
                                <span className="modal-order__form--info-span">Сума замовлення:</span> 1000
                            </p>
                            <div className="modal-order__form--block">
                                <button className="modal-order__form--block-button button">Підтвердити</button>
                                <button className="modal-order__form--block-button button" onClick={() => setActive(false)}>Відмінити</button>
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

export default ModalOrderProduct;