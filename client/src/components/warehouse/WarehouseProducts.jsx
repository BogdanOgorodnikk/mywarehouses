import React, { useEffect, useState } from 'react'
import '../../scss/warehouse/warehouseproducts.scss'
import ModalOrderProduct from './ModalOrderProduct'
import ModalEditProduct from './ModalEditProduct'
import Loader from '../app/Loader'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const WarehouseProducts = (props) => {
    const [modalOrder, setModalOrder] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState('')
    const [characteristicks, setCharacteristicks] = useState('')
    const [number, setNumber] = useState('')
    const [price, setPrice] = useState('')
    const [productId, setProductId] = useState(0)

    const id = useParams()

    async function getProducts() {
        const response = await axios.get(`http://localhost:5000/api/products/${id.id}`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        })
        setProducts(response.data.products)
        setLoader(false)
    }

    useEffect(() => {
        getProducts()
    }, [props.value])

    function refresh() {
        getProducts()
    }

    async function deleteWarehouse(id) {
        try {
            const response = await axios.delete(`http://localhost:5000/api/product/${id}`,
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            getProducts()
        } catch(e) {
            alert('Відбулася помилка' + e)
        }
    }

    if(loader) {
        return <Loader />
    } else {
        return (
            <div className="warehouse-products">
                <div className="container">
                    <div className="warehouse-products__box">
                        {products.map((product) => (
                            <div className="warehouse-products__item" key={product.id}>
                                <div className="warehouse-products__item--info">
                                    <span className="warehouse-products__item--info-span">Назва товару:</span> {product.title}
                                </div>
                                <div className="warehouse-products__item--info warehouse-product__item--info-height">
                                    <span className="warehouse-products__item--info-span">Характеристика:</span> {product.characteristicks}
                                </div>
                                <div className="warehouse-products__item--info">
                                    <span className="warehouse-products__item--info-span">Кількість:</span> {product.number}
                                </div>
                                <div className="warehouse-products__item--info">
                                    <span className="warehouse-products__item--info-span">Ціна:</span> {product.price}
                                </div>
                                <div className="warehouse-products__item--info">
                                    <span className="warehouse-products__item--info-span">Дата створення:</span> {product.data_create}
                                </div>
                                <div className="warehouse-products__item--info">
                                    <span className="warehouse-products__item--info-span">Створив:</span> {product.email}
                                </div>
                                <div className="warehouse-products__item--info agree" onClick={() => setModalOrder(true)}>
                                    Замовити
                                </div>
                                <div className="warehouse-products__item--info edit" onClick={() => (setModalEdit(true), setTitle(product.title), setCharacteristicks(product.characteristicks), setNumber(product.number), setPrice(product.price), setProductId(product.id))}>
                                    Редагувати
                                </div>
                                <div className="warehouse-products__item--info delete" onClick={(e) => (e.preventDefault(), deleteWarehouse(product.id))}>
                                    Видалити
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <ModalOrderProduct active={modalOrder} setActive={setModalOrder} />
                <ModalEditProduct active={modalEdit} setActive={setModalEdit} productId={productId} title={title} characteristicks={characteristicks} number={number} price={price} setTitle={setTitle} setCharacteristicks={setCharacteristicks} setNumber={setNumber} setPrice={setPrice} refresh={refresh} />
            </div>
        )
    }
}

export default WarehouseProducts;