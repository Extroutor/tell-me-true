import React, {useState} from 'react';
import {UNIVERSE_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
const Main = () => {
    const navigate = useNavigate()
    const [options, setOptions] = useState([])
    const defaultOptions = [
        {
            id: 1,
            name: 'ITMO'
        },
        {
            id: 2,
            name: 'СПБГУ'
        },
        {
            id: 3,
            name: 'ПОЛИТЕХ'
        }
    ]


    const onInputChange = (e) => {
        setOptions(
            defaultOptions.filter((option) => option.name.toLowerCase().includes(e.target.value))
        )
        if (e.target.value === '') {
            setOptions([])
        }
    }

    return (
        <div className="App">
            <div className='main_bg_wrapper'>
                <div className='main'>
                    <h1 className='main-title'>Tell Me True</h1>
                    <p className='main-sub-title'>Поиск дешевых авиабилетов</p>

                    <h2 className='main-title-text'>Найди нужный университет</h2>

                    <div className='search_bar_dropdown'>
                        <input
                            className='main_input'
                            type='text'
                            placeholder='Введите название университета...'
                            onChange={onInputChange}
                        />
                        <ul>
                            {options.map(item => {
                                return (
                                    <button
                                        key={item.id}
                                        className='drop_down_search'
                                        onClick={() => navigate(UNIVERSE_ROUTE + '/' + item.id)}
                                    >
                                        {item.name}
                                    </button>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;