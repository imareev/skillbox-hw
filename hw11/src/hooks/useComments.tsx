import React, { useContext, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";
import { bestPostContext } from "../shared/context/bestPostContext";
import { useSelector } from "react-redux";
import { RootReducer } from "../store/store";

interface Iprops {
    token: string;
}
interface IBestPost {
    date?: string;
    id?: string;
    author?: string;
    icon_img?: string;
    created_ups?: string;
    title?: string;
    num_comments?: string;
    thumbnail?: string
}


interface IComment {
    icon_img:string,
    author: string,
    league: string,
    body: string,
    replies: IComment[] | string;
}


function ParsingComments(resp: any[], adptData: IComment[] = []): IComment[] {
    adptData = resp.map((child: any) => {
      const parsedComment: IComment = {
        icon_img:'https://habrastorage.org/r/w48/getpro/habr/avatars/9af/987/8b0/9af9878b02f82d2e0864184d83479017.jpg',
        author: child.data.author,
        league: child.data.subreddit,
        body: child.data.body,
        replies: (child.data.replies !== '' && child.kind !== 'more') ? ParsingComments(child.data.replies.data.children, adptData) : ''
      };
      return parsedComment;
    });
    return adptData;
  }



export function useComments(idComment?: string){
    const token = useSelector<RootReducer,string>(state=>state.token.token)
    const [data, setData] = React.useState<IComment[]>([]);
    React.useEffect(() => {
        if (!token || token === "undefined") return;
        axios
            .get(`https://oauth.reddit.com/comments/${idComment}.json`, {
                headers: { Authorization: `bearer ${token}` }
            })
            .then((resp) => {
                const adptData: IComment[] = ParsingComments(resp.data[1].data.children);
                setData([...adptData]);
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, [token]);
    
    return data;

}