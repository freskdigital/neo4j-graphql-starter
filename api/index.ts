import { useDisableIntrospection } from '@envelop/disable-introspection';
import { loadFiles } from '@graphql-tools/load-files';
import { Neo4jGraphQL } from '@neo4j/graphql';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createYoga } from 'graphql-yoga';
import * as neo4j from 'neo4j-driver';

const isProd = process.env['VERCEL_ENV'] === 'production';

const driver = neo4j.driver(
	process.env['NEO4J_URI'] as string,
	neo4j.auth.basic(
		process.env['NEO4J_USER'] as string,
		process.env['NEO4J_PASSWORD'] as string
	)
);

const schema = (async () => {
	const typeDefs = await loadFiles('schema/**/*.graphql');

	const neo4jGraph = new Neo4jGraphQL({ typeDefs, driver });

	const schema = await neo4jGraph.getSchema();

	return schema;
})();

const handler = createYoga<{ req: VercelRequest; res: VercelResponse }>({
	schema,
	context: (args) => ({
		...args,
		driver,
	}),
	graphiql: !isProd,
	plugins: [
		useDisableIntrospection({
			disableIf: () => isProd,
		}),
	],
});

export default handler;
