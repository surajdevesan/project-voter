import React from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardText } from 'material-ui/Card';
import ChatMessageClass from './chatMessage.scss';
import IconButton from 'material-ui/IconButton';
import SendButton from 'material-ui/svg-icons/content/send';
import opensocket from '../utils/socketConnection';

const sendMessage = () => {
  let message="Test Messages";
  const socket = opensocket.getSocket();
  let messageObj = {
    'sender': 'Suraj',
    'message': "Hello world"
  };
  socket.emit('subscribeToTimer', messageObj);
};
const ChatMessage = () => {
  return (
    <div className='absolute-position'>
      <TextField
        hintText="Type your message here.."
        multiLine={true}
        style={{width: '85%'}}
        rows={1}
      />
      <IconButton tooltip="SVG Icon">
        <SendButton onClick = {sendMessage} />
      </IconButton>
    </div>
  );
};

export default ChatMessage;
