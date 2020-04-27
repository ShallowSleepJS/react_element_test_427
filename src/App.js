import React from 'react';
import {Card,CardContent,Divider} from '@material-ui/core';

import TopHeader from './components/top_header';
import SubTitle from './components/sub_title';
import ResponseList from './components/response_list';
import Message from './components/message';
import ActionButton from './components/action_button';
import Files from './components/files';

function App() {
  //组件所需参数
  const title = 'Louver design change on market street south side partition D-53 with butterfly stele'
  const strTime = '2020-04-21 1:29:00';
  const message = 'Hi all, please see attached the latest design changes per our discussion and sign-off. Thanks!';
  const msgAuthor = 'Steven';
  const responses = [
    {
      name:'Steven Banks',
      email: 'steven@acme.com',
      type: 'yes'
    },
    {
      name:'Dan Smith',
      email: 'Dan@acme.com',
      type: 'yes'
    },
    {
      name:'Xavier King',
      email: 'Xavier@acme.com',
      type: 'no'
    },
    {
      name:'John Boggs',
      email: 'John@acme.com',
      type: ''
    },
  ]
  const files = [
    {
      file:'Louver Design',
      type:'pdf',
    },
    {
      file:'Site Photo',
      type:'jpg',
    }
  ];
  //计算回复yes/no/pending
  const voteCount = (arr) => {
    let v1 = 0;
    let v2 = 0;
    let v3 = 0;
    arr.forEach((response) => {
      if(response.type === 'yes'){
        v1++;
      }else if(response.type === 'no'){
        v2++;
      }else{
        v3++;
      }
    })
    return `${v1} yes, ${v2} no, ${v3} pending`
  }

  return (
    <div>
      <TopHeader title = {title} strTime = {strTime}/>
      <Divider />
      <CardContent>
        <SubTitle title = 'STAKEHOLDERS' detail = {voteCount(responses)} />
        <ResponseList response = {responses}/>

        <SubTitle title = 'MESSAGE' />
        <Message message = {message}  author = {msgAuthor} />

        <SubTitle title = {`FILE (${files.length})`} />
        <Files files = {files} />
      </CardContent>
      <Divider />
      <ActionButton />
    </div>
  );
}

export default App;
