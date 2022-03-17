let userInput: unknown;
let userName: string;

userInput = 5;

userInput = '김세정';

if (typeof userInput === 'string') {
  console.log(userInput);
}

/*
// Never types
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('Not authorized lorem oajdioas jdoasj ', 501);
*/
