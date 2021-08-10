// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Balance, Transactions, Users, Group } = initSchema(schema);

export {
  Balance,
  Transactions,
  Users,
  Group
};