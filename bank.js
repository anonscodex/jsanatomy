let user = prompt ("What's your name ")
 let userId = 0;
 

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
  return Math.floor(Math.random() * 1000000000);
}


//create pin function
function getPin() {
  return Math.floor(Math.random() * 10000 );
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
    account[0].pin = getPin();
  }
  console.log(account);
}

//Get Profile

function getProfile() {
  const profile = account.findIndex((userProfile) => userProfile.accountName === user)
  
  if(profile !== -1){
    console.log('hello')
  }else{
    console.log('nahway')
  }
  
  
}







 
// validate user function  
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

    
    function confirmUser() {
      console.log(validateUser(userId))
    }
    
    confirmUser()
    
    getProfile()
//function depositFunds() {
 // prompt('Enter account name')
//}
