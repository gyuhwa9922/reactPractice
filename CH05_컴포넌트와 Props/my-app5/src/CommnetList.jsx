import React from 'react';
import Comment from './Comment';

const list = [{
  name: 'lee',
  comment: 'hello my name is GYU HWA LEE',
  avatarUrl: 'https://pbs.twimg.com/profile_images/1182661646931709955/pa1XLNgH_400x400.jpg'
},
{
  name: 'lee',
  comment: 'hello my name is GYU HWA LEE',
  avatarUrl: 'https://pbs.twimg.com/profile_images/1182661646931709955/pa1XLNgH_400x400.jpg'
},
{
  name: 'lee',
  comment: 'hello my name is GYU HWA LEE',
  avatarUrl: 'https://pbs.twimg.com/profile_images/1182661646931709955/pa1XLNgH_400x400.jpg'
},
{
  name: 'lee',
  comment: 'hello my name is GYU HWA LEE',
  avatarUrl: 'https://pbs.twimg.com/profile_images/1182661646931709955/pa1XLNgH_400x400.jpg'
}
];


function CommnetList() {
  return (
    <>
      {
        list.map((data, idx) => {
          return(
            <Comment main = {data.name} comment = {data.comment} avatarUrl = {data.avatarUrl}/>
          )
        })
      }
    </>
  );
}

export default CommnetList;