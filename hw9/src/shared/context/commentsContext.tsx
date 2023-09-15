import React from "react";
import { useComments } from "../../hooks/useComments";

interface IComment {
    icon_img: string,
    author: string,
    league: string,
    body: string,
    replies: IComment[] | string;
}

export const commentsContext = React.createContext<IComment[]>([]);

export function CommentsContextProvider({ children, idPost }: { children: React.ReactNode, idPost: string }) {
    const data = useComments(idPost);

    return (
        <commentsContext.Provider value={data}>
            {children}
        </commentsContext.Provider>
    )
}
