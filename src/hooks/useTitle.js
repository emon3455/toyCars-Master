/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"

export const useTitle = (title) =>{
    useEffect(()=>{
        document.title = `ToyCars Master | ${title}`;
    },title);
}