import React from "react";

interface IItem {
  text: string,
  id: string,
  onClick:(id:string)=>void;
  className:string,
  As?: 'a'|'li'|'button' |'div';
}

interface Props {
  list: IItem[];
}

// export function MyNewComponent({ list}: Props) {
//   return (
//     <ul>
//       {list.map((item) => (
//         <li  onClick={()=>item.onClick(item.id)} key={item.id}>{item.value}</li>
//       ))}
//     </ul>)
// };
// export function GenericList({list}:Props){
//   return(
//     <>
//     {list.map(({As ='div'}))}
//     </>
//   )
// }