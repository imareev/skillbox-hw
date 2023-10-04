import React from "react"
import { useDispatch } from "react-redux"
import { setToken } from "../store/store"
import { tokenRequestSuccess } from "../store/token/action"

export function useToken() {
    const dispatch = useDispatch()
    React.useEffect(() => {
        if (window.__token__) {
            dispatch(tokenRequestSuccess(window.__token__))
        }
    }, [])
    
   
}