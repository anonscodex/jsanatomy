let user = prompt ("What's your name ")
const usersId = [
  
  {
    name:'Anonscode',
    state:'Osun',
    residence:'Kano',
    stack:'Javascript',
    hobby:'dreaming',
  },
  
  
   {
    name:'Abdi',
    state:'Oyo',
    residence:'Bauchi',
    stack:'Javascript',
    hobby:'sleeping',
  },
  
 {
    name:'Sultan',
    state:'Kaduna',
    residence:'Enugu',
    stack:'Javascript',
    hobby:'Eating',
  },
  
   {
    name:'Binta',
    state:'Abuja',
    residence:'Lagos',
    stack:'Javascript',
    hobby:'Reading',
  }
  
  
  ]
  
  
 let userId = 0;
   
  function validateUser(userId)  {
    
    userExists = false;
  
    for (userId; userId < usersId.length; userId++) {
    
      if (user === usersId[userId].name) {
        userExists = true;
      }
    
    }
    
    return userExists ? 'welcome user' : 'Contact Admin';
  }
  
  //validateUser (userId);
  
  function usersInfo()  {
    
    const userIndex = usersId.findIndex((userInfo) => userInfo.name === user)
    
    if (userIndex !== -1) {
      return 'here is your introduction ' + '\nMy name is ' +
      usersId[userIndex].name + ' I am from ' + 
      
      usersId[userIndex].state + ' state but I live in ' +
      usersId[userIndex].residence + ' state I am writing ' +
      usersId[userIndex].stack + ' and I like ' + usersId[userIndex].hobby 
    }else {
      return 'We cannot provide your info as a non member'
    }
    
    }
    
    //userInfo(userId)
    
    function introduceUser() {
      console.log(validateUser(userId), usersInfo())
    }
    
    introduceUser(userId);
