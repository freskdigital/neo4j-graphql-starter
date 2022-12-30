# Neo4j+GraphQL Starter

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffreskdigital%2Fneo4j-graphql-starter&env=NEO4J_USER,NEO4J_PASSWORD,NEO4J_URI&envDescription=Environment%20variables%20required%20to%20connect%20to%20your%20Neo4j%20database)

Immediately start building a GraphQL API on Vercel backed by a Neo4j AuraDB instance.

## Prerequisites

As you need to provide the credentials as environment variables in order to deploy the GraphQL API, you at least need to have set up a [Neo4j AuraDB](https://neo4j.com/cloud/platform/aura-graph-database/) instance.

In addition you need the following development tools installed:

- [Node.js](https://nodejs.org/) >v16.x and [npm](https://github.com/npm/cli/) >v8.x
- [Vercel CLI](https://vercel.com/cli) >v27.x

## Getting Started

Click the deploy button and follow the instructions to clone the repository and deploy the API. After the API has been successfully deployed, the you will be able to interact with it at `https://<deployment-url>/graphql`. However, the preview in Vercel will display a “Not found” page.

_Note_: unless you have deployed the movies sample database you will need to [update the GraphQL type definitions](https://graphql-toolbox.neo4j.io/) in order to interact with your database.

## Next Steps

Make any required additional changes in the project settings, e.g.:

- Set up additional domains
- Add integrations to the project
- Configure (additional) environment variables

## Further Reading

- [Neo4j GraphQL Library](https://neo4j.com/docs/graphql-manual/): documentation on how to work with Neo4j and GraphQL.
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server/docs): documentation on how to configure and manage the GraphQL server.
- [Vercel ](https://vercel.com/docs): documentation on how to configure, deploy and manage the API.

## Additional Tools

- [Neo4j GraphQL Toolbox](https://graphql-toolbox.neo4j.io/): generate GraphQL type definitions from and interact with an existing database.
- [@neo4j/introspector](https://www.npmjs.com/package/@neo4j/introspector): programmatically generate GraphQL type definitions from an existing database.
- [Envelop](https://the-guild.dev/graphql/envelop/docs): additional library and set of plugins for customizing the GraphQL execution layer.
- [GraphQL Tools](https://the-guild.dev/graphql/tools/docs/introduction): additional set of tools for building a GraphQL API.
