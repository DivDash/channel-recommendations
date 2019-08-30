import { Channel } from './../../../libs/channel/src/lib/channel';
import * as express from 'express';
import { Message } from '@recommendation/api-interfaces';

const app = express();

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const channels: Array<Channel> = [
  {
    id: '312312',
    name: 'My channel',
    likes: 123213
  },
  {
    id: '312312',
    name: 'My channel',
    likes: 123213
  },
  {
    id: '312312',
    name: 'My channel',
    likes: 123213
  },
  {
    id: '312312',
    name: 'My channel',
    likes: 123213
  }
];

app.get('/channels', (req, res)=>{
      res.status(200).json(channels)
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
