/* eslint-disable import/no-extraneous-dependencies, no-console */
import 'source-map-support/register';
import express from 'express';
import { json } from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import proxy from 'http-proxy-middleware';
import schema from './schema';

const app = express();
app.use('/api/graphql', json(), graphqlExpress({ schema }));
app.use('/api', graphiqlExpress({ endpointURL: '/api/graphql' }));
app.use(proxy({ target: 'http://localhost:3000' }));

app.listen(8080, () => console.log('Server running on http://localhost:8080/'));
