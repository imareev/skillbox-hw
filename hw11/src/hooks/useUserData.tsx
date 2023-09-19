import React from "react"
import { useSelector } from "react-redux";
import { RootReducer } from "../store/store";
import { useDispatch } from "react-redux";
import { IUserData, meRequestAsync } from "../store/me/actions";


export function useUserData() {
    const data = useSelector<RootReducer, IUserData>(state => state.me.data)
    const token = useSelector<RootReducer, string>(state => state.token)
    const dispatch = useDispatch()
    React.useEffect(() => {
        if (!token || token === "undefined") return;
        dispatch(meRequestAsync());
    }, [token]);
    return data;
}