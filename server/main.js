import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ServiceConfiguration } from 'meteor/service-configuration';


const SEED_USERNAME = 'username';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
 if(!Accounts.findUserByUsername(SEED_USERNAME)) {
  Accounts.createUser({
    username: SEED_USERNAME,
    password: SEED_PASSWORD,
  });
 }
});

const user = Accounts.findUserByUsername(SEED_USERNAME);

ServiceConfiguration.configurations.upsert(
  { service: 'github '},
  {
    $set: {
      loginStyle: 'popup',
      clientId: '8b7f9e77703b85dc14ec',
      secret: '410246a1fe1586e704ecfe9d4f93c36359f1f357',
    },

    //Acho que pode colocar mais um aqui
  }
);
