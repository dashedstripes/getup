import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
  '/',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

app.get('*', (_, res) => res.sendStatus(200));

app.listen(4000, () => console.log('http://localhost:4000'));