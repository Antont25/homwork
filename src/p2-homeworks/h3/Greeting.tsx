import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string  // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)


    return (
        <div className={s.formBlock}>
            <div className={s.inputBlock}>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onKeyPressHandler}
                    onBlur={setNameCallback}
                    className={inputClass}
                    error={error}
                />
            </div>
            <SuperButton
                onClick={addUser}
                disabled={!!error}>
                add
            </SuperButton>
            <span>{totalUsers}</span>

        </div>
    )
}

export default Greeting
