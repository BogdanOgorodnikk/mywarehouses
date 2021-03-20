import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import '../../scss/home/warehouseslist.scss'
import ModalManagerEdit from './ModalManagerEdit'
import ModalEditWarehouse from './ModalEditWarehouse'
import Loader from '../app/Loader'
import axios from 'axios'

const WarehouseList = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [loader, setLoader] = useState(true)
    const [warehouses, setWarehouses] = useState([])
    const [warehouseId, setWarehouseId] = useState(0)
    const [warehouseManager, setWarehouseManager] = useState(0)
    const [town, setTown] = useState('')
    const [region, setRegion] = useState('')
    const [rent, setRent] = useState('')

    async function getWarehouse() {
        const response = await axios.get(`http://localhost:5000/api/warehouses`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        setWarehouses(response.data.warehouses)
        setLoader(false)
    }

    useEffect(() => {
        getWarehouse()
    }, [props.value])

    function refresh() {
        getWarehouse()
    }

    async function deleteWarehouse(id) {
        try {
            const response = await axios.delete(`http://localhost:5000/api/destroywarehouse/${id}`,
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            getWarehouse()
        } catch(e) {
            alert('Відбулася помилка' + e)
        }
    }

    if(loader) {
        return <Loader />
    } else {
        return (
            <div className="warehouse-list">
                <div className="container">
                    <div className="warehouse-list__box-head">
                        <div className="warehouse-list__item-head">
                            №
                        </div>
                        <div className="warehouse-list__item-head">
                            Назва міста склада
                        </div>
                        <div className="warehouse-list__item-head">
                            Область
                        </div>
                        <div className="warehouse-list__item-head">
                            Оренда
                        </div>
                        <div className="warehouse-list__item-head">
                            Сума товара
                        </div>
                        <div className="warehouse-list__item-head">
                            Наявність менеджера
                        </div>
                        <div className="warehouse-list__item-head">
                            Редагувати
                        </div>
                        <div className="warehouse-list__item-head">
                            Видалити
                        </div>
                    </div>
                    {warehouses.map((warehouse, index) => (
                    <div className="warehouse-list__box-body" key={warehouse.id}>
                        <div className="warehouse-list__item-body">
                            {index + 1}
                        </div>
                        <Link to={`/warehouse/${warehouse.id}`} className="warehouse-list__item-body">
                            {warehouse.town}
                        </Link>
                        <div className="warehouse-list__item-body">
                            {warehouse.region}
                        </div>
                        <div className="warehouse-list__item-body">
                            {warehouse.rent}
                        </div>
                        <div className="warehouse-list__item-body">
                            10000
                        </div>
                        {warehouse.manager_id === 0 ?
                            <div className="warehouse-list__item-body delete" onClick={() => (setModalActive(true), setWarehouseId(warehouse.id), setWarehouseManager(warehouse.manager_id))}>
                                Ні
                            </div>
                            :
                            <div className="warehouse-list__item-body agree" onClick={() => (setModalActive(true), setWarehouseId(warehouse.id), setWarehouseManager(warehouse.manager_id))}>
                                Так
                            </div>
                        }
                        <div className="warehouse-list__item-body edit" onClick={() => (setModalEdit(true), setTown(warehouse.town), setRegion(warehouse.region), setRent(warehouse.rent), setWarehouseId(warehouse.id))}>
                            Редагувати
                        </div>
                        <div className="warehouse-list__item-body delete" onClick={(e) => (e.preventDefault(), deleteWarehouse(warehouse.id))}>
                            Видалити
                        </div>
                    </div>
                    ))}
                </div>
                <ModalManagerEdit active={modalActive} setActive={setModalActive} warehouseId={warehouseId} warehouseManager={warehouseManager} refresh={refresh} />
                <ModalEditWarehouse active={modalEdit} setActive={setModalEdit} warehouseId={warehouseId} town={town} region={region} rent={rent} refresh={refresh} setTown={setTown} setRegion={setRegion} setRent={setRent} />
            </div>
        )
    }
}

export default WarehouseList