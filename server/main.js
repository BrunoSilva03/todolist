import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


const SEED_USERNAME = 'pattern-username';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
 if(!Accounts.findUserByUsername(SEED_USERNAME)) {
  Accounts.createUser({
    username: SEED_USERNAME,
    password: SEED_PASSWORD,
  });
 }
});
