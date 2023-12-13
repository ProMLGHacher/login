import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'

const MainPage = () => {

    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.token)
    const role = useSelector((state) => state.auth.role)

    return (
        <>
            {
                role === "ADMIN" ? <p>УДАЛИТЬ ТОВАР</p> : <p>КУПИТЬ</p>
            }
            msrifluherui
            <button onClick={() => {
                dispatch(logOut())
            }}>log out</button>
        </>
    )
}

export default MainPage