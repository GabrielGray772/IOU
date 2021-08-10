/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBalance = /* GraphQL */ `
  mutation CreateBalance(
    $input: CreateBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    createBalance(input: $input, condition: $condition) {
      id
      User_id
      Balance
      Toward_UserID
      createdAt
      updatedAt
    }
  }
`;
export const updateBalance = /* GraphQL */ `
  mutation UpdateBalance(
    $input: UpdateBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    updateBalance(input: $input, condition: $condition) {
      id
      User_id
      Balance
      Toward_UserID
      createdAt
      updatedAt
    }
  }
`;
export const deleteBalance = /* GraphQL */ `
  mutation DeleteBalance(
    $input: DeleteBalanceInput!
    $condition: ModelBalanceConditionInput
  ) {
    deleteBalance(input: $input, condition: $condition) {
      id
      User_id
      Balance
      Toward_UserID
      createdAt
      updatedAt
    }
  }
`;
export const createTransactions = /* GraphQL */ `
  mutation CreateTransactions(
    $input: CreateTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    createTransactions(input: $input, condition: $condition) {
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
export const updateTransactions = /* GraphQL */ `
  mutation UpdateTransactions(
    $input: UpdateTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    updateTransactions(input: $input, condition: $condition) {
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
export const deleteTransactions = /* GraphQL */ `
  mutation DeleteTransactions(
    $input: DeleteTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    deleteTransactions(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      Group_Name
      Password
      createdAt
      updatedAt
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      Group_Name
      Password
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      Group_Name
      Password
      usersID
      createdAt
      updatedAt
    }
  }
`;
