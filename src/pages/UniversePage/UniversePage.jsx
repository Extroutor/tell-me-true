import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import st from './UniversePage.module.scss'
import quote from './../../assets/img/quote.png'

const UniversePage = () => {


    const ratingColor = (ratingItem) => {
        let color
        if (ratingItem === 5)
            color = {color: '#248c17'}
        if (ratingItem === 4)
            color = {color: '#22519f'}
        if (ratingItem === 3)
            color = {color: '#ec9202'}
        if (ratingItem === 2)
            color = {color: '#d90707'}
        if (ratingItem === 1)
            color = {color: 'black'}
        return color;
    }

    const universeId = +useParams().id
    const item = useSelector(store =>
        store.universe.universeList
            .find(i => i.id === universeId))

    const reviewList = useSelector(state => state.universe.universeList
        .find(i => i.id === universeId)).reviewList

    return (
        <div className={st.universe}>
            <div className={st.wrapper}>
                <div className={st.universe_short_info}>
                    <div className={st.title}>
                        <h1>{item.name}</h1>
                    </div>
                    <div className={st.city}>
                        {item.location}
                    </div>
                    <div className={st.rating}>
                        {item.rating}/5
                    </div>
                    <div className={st.description}>
                        На основе оценок преподователей и других критериев студентов
                    </div>
                </div>
                <div className={st.rating_top}>
                    блок с рейтингом и топ преподователей
                </div>

                <div className={st.review_block}>
                    <div className={st.review_title}>
                        Отзывы студентов и преподователей
                    </div>
                    <div className={st.reviews}>
                        {reviewList.map(item =>
                            <div key={item.id} className={st.review_item}>
                                <div className={st.left}>
                                    <div className={st.img_wrapper}><img src={quote} alt='img'/></div>
                                    <div className={st.text}>
                                        {item.description}
                                    </div>
                                </div>
                                <div className={st.right}>
                                    <div className={st.rating_item}>
                                        {item.rating.map(i =>
                                            <div key={i.id} className={st.string}>
                                                <b style={ratingColor(i.rate)}>{i.rate}</b>
                                                <div>{i.title}</div>
                                            </div>
                                        )}
                                        {/*<div className={st.string}>*/}
                                        {/*    <b>4</b>*/}
                                        {/*    <div>Карьерные возможности</div>*/}
                                        {/*</div>*/}
                                        {/*<div className={st.string}>*/}
                                        {/*    <b>3</b>*/}
                                        {/*    <div>Общежития</div>*/}
                                        {/*</div>*/}
                                        {/*<div className={st.string}>*/}
                                        {/*    <b>2</b>*/}
                                        {/*    <div>Внеучебная деятельность</div>*/}
                                        {/*</div>*/}
                                        {/*<div className={st.string}>*/}
                                        {/*    <b style={ratingColor()}>5</b>*/}
                                        {/*    <div>Поддержка</div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        )}
                        {/*<div className={st.review_item}>*/}
                        {/*    <div className={st.left}>*/}
                        {/*        <div className={st.img_wrapper}><img src={quote} alt='img'/></div>*/}
                        {/*        <div className={st.text}>Люблина ведёт прикольно, на парах не засыпаешь. Часто давала*/}
                        {/*            тесты*/}
                        {/*            - можно набрать достаточно баллов для автомата, если даже не особо шаришь, но не*/}
                        {/*            пропускал занятия. И все презентации выкладывает в ББ, так что можно списать*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={st.right}>*/}
                        {/*        <div className={st.rating_item}>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>4</b>*/}
                        {/*                <div>Карьерные возможности</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>3</b>*/}
                        {/*                <div>Общежития</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>2</b>*/}
                        {/*                <div>Внеучебная деятельность</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b style={ratingColor()}>5</b>*/}
                        {/*                <div>Поддержка</div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={st.review_item}>*/}
                        {/*    <div className={st.left}>*/}
                        {/*        <div className={st.img_wrapper}><img src={quote} alt='img'/></div>*/}
                        {/*        <div className={st.text}>Люблина ведёт прикольно, на парах не засыпаешь. Часто давала*/}
                        {/*            тесты*/}
                        {/*            - можно набрать достаточно баллов для автомата, если даже не особо шаришь, но не*/}
                        {/*            пропускал занятия. И все презентации выкладывает в ББ, так что можно списать*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={st.right}>*/}
                        {/*        <div className={st.rating_item}>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>4</b>*/}
                        {/*                <div>Карьерные возможности</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>3</b>*/}
                        {/*                <div>Общежития</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>2</b>*/}
                        {/*                <div>Внеучебная деятельность</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b style={ratingColor()}>5</b>*/}
                        {/*                <div>Поддержка</div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={st.review_item}>*/}
                        {/*    <div className={st.left}>*/}
                        {/*        <div className={st.img_wrapper}><img src={quote} alt='img'/></div>*/}
                        {/*        <div className={st.text}>Люблина ведёт прикольно, на парах не засыпаешь. Часто давала*/}
                        {/*            тесты*/}
                        {/*            - можно набрать достаточно баллов для автомата, если даже не особо шаришь, но не*/}
                        {/*            пропускал занятия. И все презентации выкладывает в ББ, так что можно списать*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={st.right}>*/}
                        {/*        <div className={st.rating_item}>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>4</b>*/}
                        {/*                <div>Карьерные возможности</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>3</b>*/}
                        {/*                <div>Общежития</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>2</b>*/}
                        {/*                <div>Внеучебная деятельность</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b style={ratingColor()}>5</b>*/}
                        {/*                <div>Поддержка</div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={st.review_item}>*/}
                        {/*    <div className={st.left}>*/}
                        {/*        <div className={st.img_wrapper}><img src={quote} alt='img'/></div>*/}
                        {/*        <div className={st.text}>Люблина ведёт прикольно, на парах не засыпаешь. Часто давала*/}
                        {/*            тесты*/}
                        {/*            - можно набрать достаточно баллов для автомата, если даже не особо шаришь, но не*/}
                        {/*            пропускал занятия. И все презентации выкладывает в ББ, так что можно списать*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={st.right}>*/}
                        {/*        <div className={st.rating_item}>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>4</b>*/}
                        {/*                <div>Карьерные возможности</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>3</b>*/}
                        {/*                <div>Общежития</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b>2</b>*/}
                        {/*                <div>Внеучебная деятельность</div>*/}
                        {/*            </div>*/}
                        {/*            <div className={st.string}>*/}
                        {/*                <b style={ratingColor()}>5</b>*/}
                        {/*                <div>Поддержка</div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniversePage;