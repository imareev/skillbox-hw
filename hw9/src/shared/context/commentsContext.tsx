import React from "react";
import { useComments } from "../../hooks/useComments";

export const commentsContext = React.createContext<IComment>({});

interface IComment{
    data?:string
}

export function CommentsContextProvider({ children }: { children: React.ReactNode }) {
    const data = useComments();
    return (
        <commentsContext.Provider value={data}>
            {children}
        </commentsContext.Provider>
    )
}
