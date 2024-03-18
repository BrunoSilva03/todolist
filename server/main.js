import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { Mongo } from 'meteor/mongo';
import { Email } from 'meteor/email';

//Ativar confirmação do email
Accounts.config({
  sendVerificationEmail: true,
});

const SEED_USERNAME = 'username';
const SEED_PASSWORD = 'password';
const SEED_EMAIL = 'exemplodeemail@gmail.com'


Meteor.startup(() => {
  //Configuração do envio de emails
  process.env.MAIL_URL = 'smtp.gmail.com//bruno5ssilva02@gmail.com/***colocarasenhadepois*****@smtp.gmail.com:587/'
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    const userId = Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
      email: SEED_EMAIL,
    });

    if(userId) {
      console.log('Usuário criado com sucesso:', SEED_USERNAME);
    } else {
      console.log('Erro ao criar usuário.');
    }
  }
});

const user = Accounts.findUserByUsername(SEED_USERNAME);






ServiceConfiguration.configurations.upsert(
  { service: 'github' },
  {
    $set: {
      loginStyle: 'popup',
      clientId: '8b7f9e77703b85dc14ec',
      secret: '410246a1fe1586e704ecfe9d4f93c36359f1f357',
    },
  }
);

ServiceConfiguration.configurations.upsert(
  { service: 'google' },
  {
    $set: {
      loginStyle: 'popup',
      clientId: '948634081142-72opdkneo4jgs4bpv4gtuel3og5qr9k5.apps.googleusercontent.com',
      secret: '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',
    },
  }
);

Meteor.methods({
  'cadastrarEmail': function (email) {
    console.log(`Email cadastrado: ${email}`);
  },


  'verificarEmail': function (email) {
    //faCheck
    check(email, String);

    const user = Meteor.users.findOne({ 'emails.address': email });
    if (user) {
      //o email está cadastrado
      return true;
    } else {
      //o email não está cadastrado
      return false;
    }
  }

});

