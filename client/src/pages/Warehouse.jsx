import React, {Fragment, useState} from 'react'
import Header from '../components/app/Header'
import Nav from '../components/app/Nav'
import WarehouseProducts from '../components/warehouse/WarehouseProducts'
import CreateProduct from '../components/warehouse/CreateProduct'

const Warehouse = () => {
    const [value, setValuse] = useState(false)
    function refresh() {
        setValuse(!value)
    }

    return (
        <Fragment>
            <Header />
            <Nav />
            <CreateProduct refresh={refresh} />
            <WarehouseProducts value={value} />
        </Fragment>
    )
}

export default Warehouse;