import React, { useContext } from 'react';
import { Comment } from './Comment/Comment';
import { commentsContext } from '../../../context/commentsContext';

interface IComment {
  icon_img: string,
  author: string,
  league: string,
  body: string,
  replies: IComment[] | string;
}

const Comments: React.FC<{ data: IComment[] }> = ({ data }) => {
  if (typeof data === 'string') {
    return <p/>;
  }
  return (
    <div>
      {
        data.map((item) => item.body===''?<div className='njb'/>:(
          <Comment
            
            icon_img={item.icon_img}
            author={item.author}
            league={item.league}
            body={item.body}
            replies={item.replies}
          />
        ))
      }
    </div>
  );
}

export default Comments;
