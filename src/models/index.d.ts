import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BalanceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TransactionsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GroupMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Balance {
  readonly id: string;
  readonly User_id?: string;
  readonly Balance?: number;
  readonly Toward_UserID?: string;
  readonly usersID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Balance, BalanceMetaData>);
  static copyOf(source: Balance, mutator: (draft: MutableModel<Balance, BalanceMetaData>) => MutableModel<Balance, BalanceMetaData> | void): Balance;
}

export declare class Transactions {
  readonly id: string;
  readonly Date?: string;
  readonly Category?: string;
  readonly Value: number;
  readonly User_ID_Owed?: string;
  readonly User_ID?: string;
  readonly Group_ID?: string;
  readonly usersID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Transactions, TransactionsMetaData>);
  static copyOf(source: Transactions, mutator: (draft: MutableModel<Transactions, TransactionsMetaData>) => MutableModel<Transactions, TransactionsMetaData> | void): Transactions;
}

export declare class Users {
  readonly id: string;
  readonly User_ID: string;
  readonly User_Name: string;
  readonly groupID?: string;
  readonly Transactions?: (Transactions | null)[];
  readonly Balances?: (Balance | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class Group {
  readonly id: string;
  readonly Group_Name: string;
  readonly Password: string;
  readonly Users?: (Users | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Group, GroupMetaData>);
  static copyOf(source: Group, mutator: (draft: MutableModel<Group, GroupMetaData>) => MutableModel<Group, GroupMetaData> | void): Group;
}