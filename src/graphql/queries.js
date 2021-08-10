/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBalance = /* GraphQL */ `
  query GetBalance($id: ID!) {
    getBalance(id: $id) {
      id
      User_id
      Balance
      Toward_UserID
      createdAt
      updatedAt
    }
  }
`;
export const listBalances = /* GraphQL */ `
  query ListBalances(
    $filter: ModelBalanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User_id
        Balance
        Toward_UserID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTransactions = /* GraphQL */ `
  query GetTransactions($id: ID!) {
    getTransactions(id: $id) {
      id
      Date
      Category
      Value
      User_ID_Owed
      User_ID
      Group_ID
      createdAt
      updatedAt
      Users {
        items {
          id
          User_ID
          User_Name
          transactionsID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Date
        Category
        Value
        User_ID_Owed
        User_ID
        Group_ID
        createdAt
        updatedAt
        Users {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      User_ID
      User_Name
      transactionsID
      createdAt
      updatedAt
      Groups {
        items {
          id
          Group_Name
          Password
          usersID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User_ID
        User_Name
        transactionsID
        createdAt
        updatedAt
        Groups {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      Group_Name
      Password
      usersID
      createdAt
      updatedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Group_Name
        Password
        usersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
