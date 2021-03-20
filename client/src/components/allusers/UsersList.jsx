import React from 'react';
import '../../scss/allusers/userslist.scss'

const UsersList = () => {
    return (
        <div className="users-list">
            <div className="container">
                <div className="users-list__box-head">
                    <div className="users-list__item-head">
                        №
                    </div>
                    <div className="users-list__item-head">
                        Логін
                    </div>
                    <div className="users-list__item-head">
                        Ім'я
                    </div>
                    <div className="users-list__item-head">
                        Телефон
                    </div> 
                    <div className="users-list__item-head">
                        Роль адміна
                    </div>
                    <div className="users-list__item-head">
                        Роль менеджера
                    </div>
                    <div className="users-list__item-head">
                        Роль користувача
                    </div>
                    <div className="users-list__item-head">
                        Заблокувати
                    </div>
                </div>
                <div className="users-list__box-body">
                    <div className="users-list__item-body">
                        1
                    </div>
                    <div className="users-list__item-body">
                        superpm7@gmail.com
                    </div>
                    <div className="users-list__item-body">
                        Богдан
                    </div>
                    <div className="users-list__item-body">
                        0986342515
                    </div> 
                    <div className="users-list__item-body accept">
                        <input type="checkbox" className="users-list__item-body--check" />
                    </div>
                    <div className="users-list__item-body disagree">
                        <input type="checkbox" className="users-list__item-body--check" />
                    </div>
                    <div className="users-list__item-body disagree">
                        <input type="checkbox" className="users-list__item-body--check" />
                    </div>
                    <div className="users-list__item-body disagree">
                        <input type="checkbox" className="users-list__item-body--check" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersList;