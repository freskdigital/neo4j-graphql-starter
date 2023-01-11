# Neo4j+GraphQL Starter

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffreskdigital%2Fneo4j-graphql-starter&env=NEO4J_USER,NEO4J_PASSWORD,NEO4J_URI&envDescription=Environment%20variables%20required%20to%20connect%20to%20your%20Neo4j%20database)

Immediately start building a [GraphQL](https://graphql.org) API on [Vercel](https://vercel.com) backed by a [Neo4j AuraDB](https://neo4j.com/cloud/platform/aura-graph-database/) instance.

## Prerequisites

As you need to provide the credentials as environment variables in order to deploy the GraphQL API, you at least need to have set up a Neo4j AuraDB instance.

If you have not yet created an account on Vercel, you will be prompted to create one before being able to clone and deploy the project.

In addition you need the following development tools installed:

- [Node.js](https://nodejs.org/) >v16.x and [npm](https://github.com/npm/cli/) >v8.x
- [Vercel CLI](https://vercel.com/cli) >v27.x

## Getting Started

Click the deploy button and follow the instructions to clone the repository and deploy the API. After the API has been successfully deployed, the you will be able to interact with it at `https://<deployment-url>/graphql`. However, the preview in Vercel will display a “Not found” page.

_Note_: unless you have deployed the movies sample database you will need to [update the GraphQL type definitions](./schema/type-definitions.graphql) in order to interact with your database.

## Next Steps

Make any required additional changes in the project settings in Vercel:

- Assign domains to your production deployments and/or Git branches.
- Configure (additional) build/runtime environment variables.
- (Optionally) add 3rd party integrations to the project (e.g. monitoring, log drain, observability tools).

## Local Development

After cloning the newly created repository to your own machine, link the local repository with Vercel first:

```bash
vercel link
? Set up “<path/to/repository>”? [Y/n] y
? Which scope should contain your project? <your-team>
? Found project “<your-team/your-project>”. Link to it? [Y/n] y

vercel env pull
```

After successfully linking the project, you’re able to run and develop locally through Vercel by running the following commands:

```bash
npm install
npm start
```

## Documentation

- [Neo4j JavaScript Driver](https://neo4j.com/docs/javascript-manual/): learn more about how to manage the connection to your Neo4j AuraDB instance.
- [Neo4j GraphQL Library](https://neo4j.com/docs/graphql-manual/): learn more about how to work with Neo4j and GraphQL.
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server/docs): learn more about how to configure and manage the GraphQL server.
- [Vercel](https://vercel.com/docs): learn more about how to configure, deploy and manage the API.

## Additional Tools

- [Neo4j GraphQL Toolbox](https://graphql-toolbox.neo4j.io/): generate GraphQL type definitions from and interact with an existing database.
- [@neo4j/introspector](https://www.npmjs.com/package/@neo4j/introspector): programmatically generate GraphQL type definitions from an existing database.
- [Envelop](https://the-guild.dev/graphql/envelop/docs): additional library and set of plugins for customizing the GraphQL execution layer.
- [GraphQL Tools](https://the-guild.dev/graphql/tools/docs/introduction): additional set of tools for building a GraphQL API.
