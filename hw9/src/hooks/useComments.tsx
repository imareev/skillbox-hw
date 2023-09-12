import React, { useContext, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";
import { bestPostContext } from "../shared/context/bestPostContext";

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
    author?: string,
    league?: string,
    body?: string,
    replies?: IComment[] | string;
}


function ParsingComments(resp: any[], adptData: IComment[] = []): IComment[] {
    let i = 0;
    console.log("Recursive call", ++i);
    resp.forEach((child: any) => {
        const parsedComment: IComment = {
            author: child.data.author,
            league: child.data.subreddit,
            body: child.data.body,
        };
        if (child.data.replies !== '' && child.kind !== 'more') {
            const children = child.data.replies.data.children;
            parsedComment.replies = ParsingComments(children, adptData);
        }
        adptData.push(parsedComment);
    });
    console.log("req", adptData);
    return adptData;
}



export function useComments(idComment?: string) {
    const token = useContext(tokenContext);
    const [data, setData] = React.useState({});
    const dataPost: IBestPost[] = useContext(bestPostContext)
    React.useEffect(() => {
        if (!token || token === "undefined") return;
        axios
            .get(`https://oauth.reddit.com/comments/16fsfce.json`, {
                headers: { Authorization: `bearer ${token}` }
            })
            .then((resp) => {
                const adptData: IComment[] = ParsingComments(resp.data[1].data.children);
                console.log('comment', resp)
                //setData(ParcingComments(resp.data[1].data));
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, [token]);
    return data;
}