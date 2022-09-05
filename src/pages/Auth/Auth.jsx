import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, UNIVERSE_ROUTE} from "../../utils/consts";
import {useLocation} from "react-router-dom";
import {useNavigate} from 'react-router-dom'


const Auth = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Хук для получения строки запроса
    const location = useLocation()
    const navigate = useNavigate()
    // True, если маршрут совпадает с LOGIN_ROUTE
    const isLogIn = location.pathname === LOGIN_ROUTE

    const onAuthClick = () => {
        let data;
        if (isLogIn) {
            // вход
        } else {
            // регистрация
        }
    //    добавить юзера в стейт
    //    setIsAuth (true)
        navigate(UNIVERSE_ROUTE)
    }

    return (
        <div className="App">
            <div className='main_bg_wrapper'>
                {isLogIn
                ?
                    <div className='main'>
                        <h1 className='main-title'>Вход</h1>
                        <input
                            className='main_input'
                            type='email'
                            placeholder='Введите email...'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className='main_input'
                            type='password'
                            placeholder='Введите пароль...'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <p style={{color: 'white', fontStyle: 'italic', padding: '10px'}}>Нет аккаунта? <NavLink
                            style={{color: 'white'}}
                            to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink></p>
                        <button className='button' onClick={onAuthClick}>Войти</button>
                    </div>
                    :
                    <div className='main'>
                        <h1 className='main-title'>Регистрация</h1>
                        <input
                            className='main_input'
                            type='text'
                            placeholder='Введите имя...'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className='main_input'
                            type='text'
                            placeholder='Введите фамилию...'
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                        />
                        <input
                            className='main_input'
                            type='email'
                            placeholder='Введите email...'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            className='main_input'
                            type='password'
                            placeholder='Введите пароль...'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <p style={{color: 'white', fontStyle: 'italic', padding: '10px'}}>Есть аккаунт? <NavLink
                            style={{color: 'white'}}
                            to={LOGIN_ROUTE}>Войдите</NavLink></p>
                        <button className='button' onClick={onAuthClick}>Зарегистрироваться</button>

                    </div>
                }
            </div>
        </div>
    );
};

export default Auth;