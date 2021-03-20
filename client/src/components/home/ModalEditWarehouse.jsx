import React from 'react'
import { putWarehouse } from '../../actions/warehouse'
import '../../scss/home/modaleditwarehouse.scss'

const ModalEditWarehouse = ({active, setActive, warehouseId, town, region, rent, refresh, setTown, setRegion, setRent}) => {

    function updateWarehouse(e) {
        e.preventDefault()
        putWarehouse(warehouseId, town, region, rent)
        refresh()
        refresh()
        setActive(false)
    }

    if(active) {
        return (
            <div className="modal-edit">
                <div className="container">
                    <div className="opinion" onClick={() => setActive(false)}></div>
                    <div className="modal-edit__box" onClick={e => e.stopPropagation()}>
                        <h2 className="modal-edit__headline">Редагування склада</h2>
                        <form className="modal-edit__form">
                            <p className="modal-edit__form--info">Введіть нову назву міста склада</p>
                            <input value={town} onChange={(event) => setTown(event.target.value)} type="text" className="modal-edit__form--iput input" placeholder="Назва міста" />
                            <p className="modal-edit__form--info">Введіть нову назву області склада</p>
                            <input value={region} onChange={(event) => setRegion(event.target.value)} type="text" className="modal-edit__form--iput input" placeholder="Назва області" />
                            <p className="modal-edit__form--info">Введіть нову оренду склада</p>
                            <input value={rent} onChange={(event) => setRent(event.target.value)} type="text" className="modal-edit__form--iput input" placeholder="Оренда" />
                            <div className="modal-edit__form--block">
                                <button className="modal-edit__form--block-button button" onClick={updateWarehouse}>Закріпити</button>
                                <button className="modal-edit__form--block-button button" onClick={() => setActive(false)}>Відмінити</button>
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

export default ModalEditWarehouse