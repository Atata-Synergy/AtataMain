import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
   <CommentView>
       <Comment>
           <p>testing@testing.com</p>
           <span>I love what you produce!!!</span>
       </Comment>
       <Comment>
           <p>testing@testing.com</p>
           <span>I love what you produce!!!</span>
       </Comment>
       <Comment>
           <p>testing@testing.com</p>
           <span>I love what you produce!!!</span>
       </Comment>
       <Comment>
           <p>testing@testing.com</p>
           <span>I love what you produce!!!</span>
       </Comment>
       <Comment>
           <p>testing@testing.com</p>
           <span>I love what you produce!!!</span>
       </Comment>
       <Comment>
           <p>testing@testing.com</p>
           <span>I love what you produce!!!</span>
       </Comment>
       <Comment>
           <p>testing@testing.com</p>
           <span>I love what you produce!!!</span>
       </Comment>
       <Comment>
           <p>testing@testing.com</p>
           <span>I love what you produce!!!</span>
       </Comment>
       <Comment>
           <p>testing@testing.com</p>
           <span>I love what you produce!!!</span>
       </Comment>
   </CommentView>
  );
}


const CommentView = styled.div`
height: 65%;
overflow: scroll;
overflow-x: hidden;
width: 90%;
margin: auto;

`
const Comment = styled.div`
p{
font-size: 15px;
font-weight: 700;
}
span{
    font-size: 12px;
}

`
