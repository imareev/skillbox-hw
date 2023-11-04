import React, { useContext } from "react";
import { tokenContext } from "../shared/context/tokenContext";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootReducer } from "../store/store";

interface IBestPost {
    date?: string;
    id?: string;
    author?: string;
    icon_img?: string;
    created_ups?: string;
    title?: string;
    num_comments?: string;
    thumbnail?:string
}

export function useBestPosts() {
    const token = useSelector<RootReducer,string>(state=>state.token.token)
    const [data, setData] = React.useState<IBestPost[]>([]);

    React.useEffect(() => {
        if (!token || token === "undefined") return;
        axios
            .get('https://oauth.reddit.com/best.json?sr_detail=true', {
                headers: { Authorization: `bearer ${token}` }
            })
            .then((resp) => {
                const adaptedResp: IBestPost[] = resp.data.data.children.map((child: any) => ({
                    author: child.data.author,
                    icon_img: child.data.sr_detail.icon_img,
                    thumbnail: child.data.thumbnail,
                    title: child.data.title,
                    id:child.data.id,
                    num_comments:child.data.num_comments,


                }));

                setData(prev => prev.concat(...adaptedResp));
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, [token]);

    return data;
}
