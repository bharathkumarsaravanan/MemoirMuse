import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/joy/Box';

export const DayDiary = (props) => {

    const [dateState, setDateState] = useState(() => {
        let date = new Date(props.date);
        if (date) {
            return (`${date.toLocaleString("default", { month: "short" })} ${date.getDate()}`);
        } else {
            return 0;
        }
    });

    return(
        <div className="w-full">
            <TextField 
                className="w-full text-xl"
                inputProps={{style: {fontSize: '34px'}}}
                InputLabelProps={{style: {fontSize: '24px'}}}
                id="standard-basic" 
                label={dateState} 
                variant="standard" />
             <textarea 
                className="w-full h-96 text-xl mt-10 rounded-2xl bg-tile-color focus:border-gray-500 px-10 py-6"
                placeholder="About today"
                onBlur={props.onSubmit}
                >
                
                </textarea>
        </div>
    )
}