import React, { useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useSearchParams } from "react-router-dom";
import { DateContainer } from "../../components/dateContainer/dateContainer";
import { DayDiary } from "../../components/DayDiary/DayDiary";
import { showHomeLink } from "../../store/slices/headerSlice";
import CameraIcon from '@mui/icons-material/Camera';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';



export const Day = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const liveRef = useRef(null);
    let stream = null;
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recordedChunks, setRecordedChunks] = useState([]);


    useEffect(() => {
        dispatch(showHomeLink());
    }, []);

    const submitHandler = (e) => {
        console.log(e.target.value);
    }


    const startCam = async () => {
        try {
            stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
            console.log(stream);
            liveRef.current.srcObject = stream;
            liveRef.current.play();
            
            const recorder = new MediaRecorder(stream);

            recorder.ondataavailable = (event) => {
                setRecordedChunks((prev) => [...prev, event.data]);
            }

            setMediaRecorder(recorder);
        } catch (err) {
            console.log(err);
        }

        return () => {
            if (liveRef.current && liveRef.current.srcObject) {
                liveRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
            if (mediaRecorder) {
                mediaRecorder.stop();
            }
        };
    }

    const record = async (constraints) => {
        if (mediaRecorder) {
            mediaRecorder.start()
        }
    }

    const closeCam = async() => {
        
            if (mediaRecorder) {
                mediaRecorder.stop();
                stream.getTracks().forEach(track => track.stop());
            }
        
    }

    return (
        <div>
            <DateContainer className={"flex-wrap gap-10 justify-center px-20 py-14"}> 
                <DayDiary 
                    date={searchParams.get('date')}
                    onSubmit={submitHandler}
                />
            </DateContainer>
            <div 
                className="mediaDiary m-10 border-box-border rounded-lg flex px-20 py-14"
                >
                    <video ref={liveRef} autoPlay playsInline></video>
                    {recordedChunks.length > 0 && (
                        <div>
                            <video controls>
                                <source src={URL.createObjectURL(new Blob(recordedChunks))} type="video/webm" />
                            </video>
                        </div>
                    )}
                    <div className="w-full rounded-lg flex  bg-tile-color">
                        
                        <CameraIcon 
                            className="m-10" 
                            style={{fontSize: "50px"}} 
                            onClick={startCam}
                            sx={{ color: "#A7A7A7",  '&:hover': {color:'white'}}}/>                    
                        
                        <GraphicEqIcon className="m-10" onClick={record} sx={{ color: "#A7A7A7", '&:hover': {color:'white'} }} style={{fontSize: "50px"}}/>
                        <button onClick={closeCam}>close</button>
                    </div>
                    
            </div>  
        </div>
    )
}
