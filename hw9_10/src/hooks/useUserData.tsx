import React, { useContext } from "react"
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";
import { useSelector } from "react-redux";
import { RootReducer } from "../store";
interface Iprops {
    token: string;
}
interface IUserData {
    name?: string,
    iconImg?: string;

}

export function useUserData() {
    const token = useSelector<RootReducer,string>(state=>state.token)
    const [data, setData] = React.useState({ name: "", iconImg: "" });
    React.useEffect(() => {
        if (!token || token === "undefined") return;
        axios
            .get('https://oauth.reddit.com/api/v1/me.json', {
                headers: { Authorization: `bearer ${token}` }
            })
            .then((resp) => {
                setData({ name: resp.data.name, iconImg: resp.data.icon_img });
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, [token]);
    return data;
}