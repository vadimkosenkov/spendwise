import { graphqlProvider } from './core/graphql.provider';
import { ApplicationConfig } from "@angular/core";

export const appConfig: ApplicationConfig = {
  providers: [
    ...graphqlProvider
  ],
};
