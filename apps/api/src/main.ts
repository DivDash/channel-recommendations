import { Channel } from './../../../libs/channel/src/lib/channel';
import * as express from 'express';
import { Message } from '@recommendation/api-interfaces';

const app = express();

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  console.log(port);
  res.send(greeting);
});

const channels: Array<Channel> = [
  {
    id: '312312',
    name: 'My channel',
    userIds: []
  },
  {
    id: '312312',
    name: 'My channel',
    userIds: []
  },
  {
    id: '312312',
    name: 'My channel',
    userIds: []
  },
  {
    id: '312312',
    name: 'My channel',
    userIds: []
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
