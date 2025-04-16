const accountId = 1234
let accountEmail = "abcd@gmail.com"
var accountPassword = "321"
accountCity = "Jaipur"
let accountState;
/*
Prefer not to use var because of issue in
block and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);