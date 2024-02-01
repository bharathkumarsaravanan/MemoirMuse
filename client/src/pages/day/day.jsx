import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useSearchParams } from "react-router-dom";
import { DateContainer } from "../../components/dateContainer/dateContainer";
import { DayDiary } from "../../components/DayDiary/DayDiary";
import { showHomeLink } from "../../store/slices/headerSlice";

export const Day = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showHomeLink());
    }, []);

    const submitHandler = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <DateContainer className={"flex-wrap gap-10 justify-center px-20 py-14"}> 
                <DayDiary 
                    date={searchParams.get('date')}
                    onSubmit={submitHandler}
                />
            </DateContainer>
        </div>
    )
}
