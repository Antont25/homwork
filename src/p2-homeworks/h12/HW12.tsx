import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";


function HW12() {

    const themes = useSelector<AppStoreType, Array<string>>(state => state.them.themes)
    const theme = useSelector<AppStoreType, string>(state => state.them.theme)

    // useDispatch, onChangeCallback
    const dispatch = useDispatch()

    function onChangeOptionHandler(option: string) {
        dispatch(changeThemeC(option))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect options={themes}
                         onChangeOption={onChangeOptionHandler}
                         className={s.select}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
