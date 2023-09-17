import React from "react";
import { useBestPosts } from "../../hooks/useBestPosts";

interface IBestPost {
    date?: string;
    id?: string;
    author?: string;
    icon_img?: string;
    created_ups?: string;
    title?: string;
    num_comments?: string;
}

export const bestPostContext = React.createContext<IBestPost[]>([]);

export function BestPostContextProvider({ children }: { children: React.ReactNode }) {
    const data = useBestPosts();
    return (
        <bestPostContext.Provider value={data}>
            {children}
        </bestPostContext.Provider>
    )
}
