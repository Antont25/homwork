import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    function onChangeRangeHandler(value: number) {
        setValue1(value)
    }

    function onChangeRange(value: [number, number]) {
        setValue1(value[0])
        setValue2(value[1])

    }

    return (
        <div>
            <hr/>
            homeworks 11


            <div className={s.rangeBloc}>
                <span className={s.text}>{value1}</span>
                <SuperRange onChangeRange={onChangeRangeHandler}
                />
            </div>

            <div className={s.superRangeBloc}>
                <span className={s.text}>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeRange}
                />

                <span className={s.textValue2}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}


export default HW11
