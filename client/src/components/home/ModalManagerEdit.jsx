import React, { useEffect, useState } from 'react'
import '../../scss/home/modalmanageredit.scss'
import axios from 'axios'
import {putManagerWarehouse} from '../../actions/warehouse'

const ModalManagerEdit = ({active, setActive, warehouseId, warehouseManager, refresh}) => {
    const [managers, setManagers] = useState([])
    const [firstManager, setFirstManager] = useState(0)

    async function getManagers() {
        const response = await axios.get(`http://localhost:5000/api/managers`,
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        setManagers(response.data.managers)
        setFirstManager(response.data.managers[0].id)
    }
    
    function updateManager(event) {
        event.preventDefault()
        putManagerWarehouse(warehouseId, firstManager)
        refresh()
        refresh()
        setActive(false)
    }

    useEffect(() => {
        getManagers()
    }, [])

    if(active) {
        return (
            <div className="modal-manager">
                <div className="container">
                    <div className="opinion" onClick={() => setActive(false)}></div>
                    <div className="modal-manager__box" onClick={e => e.stopPropagation()}>
                        <h2 className="modal-manager__headline">Закріплення менеджера</h2>
                        <form className="modal-manager__form">
                            <p className="modal-manager__form--info">Основний менеджер</p>
                            <select className="modal-manager__form--selector" onChange={(event) => setFirstManager(event.target.value)}>
                                {managers.map((manager) => (
                                    <option value={manager.id} key={manager.id} selected={manager.id === warehouseManager} >{manager.email}</option>
                                ))}
                            </select>
                            <div className="modal-manager__form--block">
                                <button className="modal-manager__form--block-button button" onClick={updateManager}>Закріпити</button>
                                <button className="modal-manager__form--block-button button"onClick={() => setActive(false)}>Відмінити</button>
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

export default ModalManagerEdit;