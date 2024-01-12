let account = [
  {
    accountName: null,
    accountNumber: null,
    pin: null,
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



let user = prompt ("What's your name ")



 let userId = 0;
   
  function validateUser(userId)  {
    
    userExists = false;
  
    for (userId; userId < account.length; userId++) {
    
      if (user === account[userId].accountName) {
        userExists = true;
      }
    
    }
    
    return userExists ? 'welcome ' + user : 'Contact Admin';
  }

function addFunds() {
  
}

createAccount()

    
    function introduceUser() {
      console.log(validateUser(userId))
    }
    
    introduceUser()
//function depositFunds() {
 // prompt('Enter account name')
//}
