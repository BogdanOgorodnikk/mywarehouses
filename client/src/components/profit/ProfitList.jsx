import React from 'react';
import '../../scss/profit/profitlist.scss'

const ProfitList = () => {
    return (
        <div className="profit-list">
            <div className="container">
                <div className="profit-list__box-head">
                    <div className="profit-list__item-head">
                        №
                    </div>
                    <div className="profit-list__item-head">
                        Назва склада
                    </div>
                    <div className="profit-list__item-head">
                        Сума
                    </div>
                </div>
                <div className="profit-list__box-body">
                    <div className="profit-list__item-body">
                        1
                    </div>
                    <div className="profit-list__item-body">
                        Київ
                    </div>
                    <div className="profit-list__item-body">
                        100000
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfitList;