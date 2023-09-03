import React, { useContext } from "react"
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";
interface Iprops {
    token: string;
}
interface IUserData {
    name?: string,
    iconImg?: string;

}

export function useUserData() {
    const token = useContext(tokenContext)
    const [data, setData] = React.useState<IUserData>({})

    React.useEffect(() => {
        axios
            .get('https://oauth.reddit.com/api/v1/me.json',
             {
                headers: { Authorization: `bearer ${token}` }
            })
            .then((resp) => {
                const userData = resp.data;
                console.log('resp', resp.data)
                if(resp.status== 200){
                    console.log(resp.status,'авторизация пройдена')
                }else{
                    console.log('авторизация провалена')
                }
                setData({ name: userData.name, iconImg: userData.icon_img });

            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, [token]);

    return data;
}