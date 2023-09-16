function findUserByUsername(usersArray, username) {
  return usersArray.find((val) => {
    return Object.values(val)[0] === username;
  })
}

function removeUser(usersArray, username) {
  let val = usersArray.findIndex((obj) => {
    return obj.username === username;
  });
  if(val === -1) {
    return 
  }
  return usersArray.splice(val,1)[0];
}