import React, { useState } from 'react'
import '../../scss/home/createwarehouse.scss'
import {postWarehouse} from '../../actions/warehouse'

const CreateWarehouse = (props) => {
    const [showForm, setShowForm] = useState(false)
    const [town, setTown] = useState('')
    const [region, setRegion] = useState('')
    const [rent, setRent] = useState('')

    function createwarehouse(e) {
        e.preventDefault()
        postWarehouse(town, region, rent)
        setTown('')
        setRegion('')
        setRent('')
        props.refresh()
    }

    return (
        <div className="create-warehouse">
            <div className="container">
                <button className="create-warehouse__button button" onClick={() => setShowForm(!showForm)}>Створити склад</button>
                {showForm === true &&
                <form className="create-warehouse__form">
                    <input value={town} onChange={(event) => setTown(event.target.value)} type="text" className="create-warehouse__form--input input" placeholder="Назва міста" />
                    <input value={region} onChange={(event) => setRegion(event.target.value)} type="text" className="create-warehouse__form--input input" placeholder="Назва області" />
                    <input value={rent} onChange={(event) => setRent(event.target.value)} type="text" className="create-warehouse__form--input input" placeholder="Сума оренди" />
                    <button onClick={createwarehouse} className="create-warehouse__form--button button">Створити</button>
                </form>
                }
            </div>
        </div>
    )
}

export default CreateWarehouse;