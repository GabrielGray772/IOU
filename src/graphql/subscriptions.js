/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBalance = /* GraphQL */ `
  subscription OnCreateBalance {
    onCreateBalance {
      id
      User_id
      Balance
      Toward_UserID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBalance = /* GraphQL */ `
  subscription OnUpdateBalance {
    onUpdateBalance {
      id
      User_id
      Balance
      Toward_UserID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBalance = /* GraphQL */ `
  subscription OnDeleteBalance {
    onDeleteBalance {
      id
      User_id
      Balance
      Toward_UserID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTransactions = /* GraphQL */ `
  subscription OnCreateTransactions {
    onCreateTransactions {
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
export const onUpdateTransactions = /* GraphQL */ `
  subscription OnUpdateTransactions {
    onUpdateTransactions {
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
export const onDeleteTransactions = /* GraphQL */ `
  subscription OnDeleteTransactions {
    onDeleteTransactions {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      Group_Name
      Password
      usersID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
      Group_Name
      Password
      usersID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
      Group_Name
      Password
      usersID
      createdAt
      updatedAt
    }
  }
`;
