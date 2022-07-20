import React, {useState} from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {app} from "./ RequestsAP";


export const Request = () => {
    const [valueChecked, setValueChecked] = useState<boolean>(false)
    const [responseFetchAuth, setResponseFetchAuth] = useState()

    function onChangeCheckboxHAndler(checked: boolean) {
        setValueChecked(checked)
    }

    function onClickButtonHandler() {
        app.fetchAuth(valueChecked).then((response) => {
            setResponseFetchAuth(response.data.errorText)
        })
            .catch((error) => {
                console.log({...error})
                setResponseFetchAuth(error.response ? error.response.data.errorText : error.message);
            })


    }

    return (
        <div>
            <SuperButton onClick={onClickButtonHandler}>
                make a request
            </SuperButton>
            <SuperCheckbox onChangeChecked={onChangeCheckboxHAndler}/>
            <span style={{paddingLeft: '10px'}}>{responseFetchAuth}</span>
        </div>
    );
};
