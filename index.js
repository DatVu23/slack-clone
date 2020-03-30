import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, makeExecutableSchema } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/graphql', bodyParser.join(), graphqlExpress({ schema }));

app.listen(PORT, () => console.log(`Server is runnig on port ${PORT}`));
