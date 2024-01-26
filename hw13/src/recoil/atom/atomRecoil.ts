import { atom, selector } from "recoil";

export const comment = atom({
    key: "comment", 
    default: "hello recoil" ,
  });

  
 export const commentState = selector({
    key: 'commentState', 
    get: ({get}) => {
      const text = get(comment);
      return text;
    },
  });  