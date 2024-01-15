let userId = 0;

let account = [
  {
    accountName: null,
    accountNumber: null,
    pin: null,
    Funds: null
  }
];

function getUser() {
  let user = prompt("What's your name ");
  return user;
}

function selectOption(options) {
  switch (options) {
    case 1:
      createAccount();
      break;
    case 2:
      depositFunds();
      break;
    case 3:
      withdrawFunds();
      break;
    case 4:
      fundTransfer();
      break;
    case 5:
      checkStatement();
      break;
    case 6:
      fundHistory();
      break;
    default:
      console.log('Enter correct option');
  }
}

// option statement function
function optionsStatement() {
  console.log('1 Create Account');
  console.log('2 Deposit Money');
  console.log('3 Withdraw Money');
  console.log('4 Transfer Money');
  console.log('5 Check Statement');
  console.log('6 Transaction History');
}

optionsStatement();

let optionInput = prompt('Enter your option ');
optionInput = parseInt(optionInput);

if (!isNaN(optionInput) && optionInput >= 1 && optionInput <= 6) {
  selectOption(optionInput);
} else {
  console.log('Enter correct option');
}

// Create account number function
function accountNumbers() {
  return Math.floor(Math.random() * 1000000000);
}

// create pin function
function getPin() {
  return Math.floor(Math.random() * 10000);
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
  console.log('Your account name is ' + account[0].accountName + '\n your account number is ' + account[0].accountNumber + '\n your pin is ' + account[0].pin 
  )
  console.log(account);
}

// check statement
function checkStatement() {
  const user = getUser(); 
  const profile = account.findIndex((userProfile) => userProfile.accountName === user);

  if (profile !== -1) {
    console.log('hello');
  } else {
    console.log('nahway');
  }
}

// deposit fund function
function depositFunds() {
  confirmUser();
  console.log('deposit me');
}

function confirmUser() {
  console.log(validateUser(userId));
}

// validate user function
function validateUser(userId) {
  const user = getUser(); 
  let userExists = false;

  for (let i = 0; i < account.length; i++) {
    if (user === account[i].accountName) {
      userExists = true;
    }
  }

  return userExists ? 'welcome ' + user : 'Contact Admin';
}

// withdraw funds function

function withdrawFunds(){
  console.log('hello withdraw me')
}


function fundTransfer() {
  console.log('hello transfer me')
}

function fundHistory() {
  console.log('hllo check my history')
}
