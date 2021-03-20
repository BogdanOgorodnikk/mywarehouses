import React, {Fragment, useState} from 'react'
import Header from '../components/app/Header'
import Nav from '../components/app/Nav'
import WarehouseList from '../components/home/WarehouseList'
import CreateWarehouse from '../components/home/CreateWarehouse'

const Home = () => {
    const [value, setValuse] = useState(false)
    function refresh() {
        setValuse(!value)
    }
    return (
        <Fragment>
            <Header />
            <Nav />
            <CreateWarehouse refresh={refresh} />
            <WarehouseList value={value}/>
        </Fragment>
    )
}

export default Home