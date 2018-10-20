'use strict';
 
export const checks = {
   validateIdentifier( { name } : { name : string}){
       if (!/[a-zA-Z]+[_$a-zA-Z0-9]*/.test(name))
         throw new Error(`invalid identifier ${name}`);
   }
}