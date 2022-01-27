import { buildSubgraphSchema } from '@apollo/subgraph';
import { deprecate } from 'util';

export * from './composition';

/**
 * @deprecated Use `buildSubgraphSchema` instead.
 */
 export const buildFederatedSchema = deprecate(
  buildSubgraphSchema,
  `'buildFederatedSchema' is deprecated. Use 'buildSubgraphSchema' instead.`,
);
export { buildSubgraphSchema };
