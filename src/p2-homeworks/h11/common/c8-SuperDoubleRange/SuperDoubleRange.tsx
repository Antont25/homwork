import React from 'react'
import s from './superDoubleRange.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}°C`;
}

const minDistance = 5;
const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // const [value1, setValue1] = React.useState<number[]>([20, 37]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            onChangeRange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            onChangeRange([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };


    return (
        <>
            <Box sx={{width: 300}}>
                <Slider className={s.slider}
                        getAriaLabel={() => 'Minimum distance'}
                        value={value}
                        onChange={handleChange1}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                />
            </Box>

        </>
    )
}

export default SuperDoubleRange
