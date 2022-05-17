import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }// need to fix

    return (
        <div>
            <span>{props.affair.name}</span>
            <span>{props.affair.priority}</span>
            <SuperButton red onClick={() => deleteCallback(props.affair._id)}
                         className={style.buttonRed}
            >x
            </SuperButton>
        </div>
    )
}

export default Affair
