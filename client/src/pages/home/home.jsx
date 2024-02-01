import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { dates } from "../../actions/homeActions";
import { DateContainer } from "../../components/dateContainer/dateContainer";
import { DateCells } from "../../components/dateCells/dateCells";
import { hideHomeLink } from "../../store/slices/headerSlice";

export const Home = () => {
    const dispatch = useDispatch();
    let postDate = new Date();
    const val = useSelector(state => state.home);

    useEffect(() => {
        dispatch(dates(postDate));
        dispatch(hideHomeLink());
    }, []);


    const openDiary = (getDate) => {
        console.log(getDate);
    }

    return (
        <div className="h-screen w-screen">
            <DateContainer className={"flex-wrap gap-10 justify-center px-20 py-14"}> 
                {
                    val.dates.map((date, index) => {
                        return (
                            <DateCells key={index} date={date} clickAction={openDiary} />
                        )
                    })
                }
            </DateContainer>
        </div>
    )
}

