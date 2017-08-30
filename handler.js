import { graphqlLambda, graphiqlLambda } from 'apollo-server-lambda';
import schema from './schema';

export const graphql = graphqlLambda({ schema });
export const graphiql = graphiqlLambda({
  endpointURL: '/graphql',
});
