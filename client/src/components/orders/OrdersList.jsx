import React from 'react'
import '../../scss/orders/orderslist.scss'

const OrdersList = () => {
    return (
        <div className="orders-list">
            <div className="container">
                <div className="orders-list__box-head">
                    <div className="orders-list__item-head">
                        №
                    </div>
                    <div className="orders-list__item-head">
                        Назва
                    </div>
                    <div className="orders-list__item-head">
                        Дата
                    </div>
                    <div className="orders-list__item-head">
                        Кількість
                    </div>
                    <div className="orders-list__item-head">
                        Ціна
                    </div>
                    <div className="orders-list__item-head">
                        Сума
                    </div>
                    <div className="orders-list__item-head">
                        Город відправлення
                    </div>
                    <div className="orders-list__item-head">
                        Город отримки
                    </div>
                    <div className="orders-list__item-head">
                        Замовник
                    </div>
                    <div className="orders-list__item-head">
                        Статус
                    </div>
                    <div className="orders-list__item-head">
                        Оператор
                    </div>
                    <div className="orders-list__item-head">
                        Дозволити
                    </div>
                    <div className="orders-list__item-head">
                        Відмовити
                    </div>
                </div>
                <div className="orders-list__box-body">
                    <div className="orders-list__item-body">
                        1
                    </div>
                    <div className="orders-list__item-body">
                        Диван хвилька
                    </div>
                    <div className="orders-list__item-body">
                        20-02-2021
                    </div>
                    <div className="orders-list__item-body">
                        20
                    </div>
                    <div className="orders-list__item-body">
                        5500
                    </div>
                    <div className="orders-list__item-body">
                        110000
                    </div>
                    <div className="orders-list__item-body">
                        Шепетівка
                    </div>
                    <div className="orders-list__item-body">
                        Київ
                    </div>
                    <div className="orders-list__item-body">
                        Льоша
                    </div>
                    <div className="orders-list__item-body accept">
                        Одобрено
                    </div>
                    <div className="orders-list__item-body">
                        Денис
                    </div>
                    <div className="orders-list__item-body">
                        <input type="checkbox" className="orders-list__item-body--check" />
                    </div>
                    <div className="orders-list__item-body">
                        <input type="checkbox" className="orders-list__item-body--check" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersList