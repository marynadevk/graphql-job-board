import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import { readFile } from 'node:fs/promises';
import { authMiddleware, handleLogin } from './auth.js';
import { resolvers } from './resolvers/resolvers.js';
import { companyEntity } from './db/companies.js';
import { IResolverContext } from './interfaces/index.js';
import { userEntity } from './db/users.js';

const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors(), express.json(), authMiddleware);

app.post('/login', handleLogin);

const typeDefs = await readFile('./schema.graphql', 'utf8');

async function getContext({ req }): Promise<IResolverContext> {
  const companyLoader = companyEntity.createCompanyLoader();
  const context: IResolverContext = { companyLoader };
  if (req.auth) {
    context.user = await userEntity.getUser(req.auth.sub);
  }
  return context;
}

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
app.use('/graphql', apolloMiddleware(apolloServer, { context: getContext }));

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});
