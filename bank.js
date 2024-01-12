let account = [
  {
    accountName: null,
    accountNumber: null,
    Funds: null
  }
];

// Create account number function
function accountNumbers() {
  return Math.floor(Math.random() * 100000);
}

// Create account function
function createAccount() {
  let accountId = prompt('Enter account name');
  if (accountId === "") {
    console.log('Provide a unique name');
  } else {
    console.log('Account created successfully');
    account[0].accountName = accountId;
    account[0].accountNumber = accountNumbers();
  }
  console.log(account);
}

createAccount()

//function depositFunds() {
 // prompt('Enter account name')
//}
