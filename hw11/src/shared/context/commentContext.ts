import React from "react";

type commentContextType ={
    value:string,
    onChange:(valuey:string)=> void
}

export const CommentContext = React.createContext<commentContextType>({
    value:'',
    onChange:()=>{}
});