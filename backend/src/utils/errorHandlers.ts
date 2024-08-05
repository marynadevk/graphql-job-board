import { GraphQLError } from 'graphql';

export const notFoundException = (message: string) => {
  return new GraphQLError(message, {
    extensions: { code: 'NOT_FOUND' },
  });
}

export const unauthorizedError = (message: string) => {
  return new GraphQLError(message, {
    extensions: { code: 'UNAUTHORIZED' },
  });
}
