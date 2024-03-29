
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { Mongo } from 'meteor/mongo';
import { Email } from 'meteor/email';
import { config } from '../config';
import { validate } from 'react-email-validator';

// Carregando o pacote npm 'config'
// const config = require('config');

// if(!config.has('MAIL_URL')) {
//   console.log('Erro: A propriedade MAIL_URL não está definida no config.json.');
//   process.exit(1); //Sai do processo com código de erro
// }

//Configurando o MAIL_URL com base no config.json
// process.env.MAIL_URL = config.get('MAIL_URL');



//Ativar confirmação do email
Accounts.config({
  sendVerificationEmail: true,
});

const SEED_USERNAME = 'username';
const SEED_PASSWORD = 'password';
const SEED_EMAIL = 'exemplodeemail@gmail.com';
//465 ou 587 no MAIL_URL





Meteor.startup(() => {
  //Configuração do envio de emails

  process.env.MAIL_URL = config.MAIL_URL;
  console.log('MAIL_URL: ' + String(config.MAIL_URL));
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    const userId = Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
      email: SEED_EMAIL,
    });

    if (userId) {
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

ServiceConfiguration.configurations.upsert(
  { service: 'gmail' },
  {
    $set: {
      clientId: config.GMAIL_CLIENTID,
      secret: config.GMAIL_SECRET,
    }
  }
)

function isValidEmail(email) {
  console.log('entrou no isValidEmail');
  if (validate(email) == true) {
    console.log('Email é válido!');
    return true;
  } else {
    console.log('Email não é válido');
    return false;
  }
}

Meteor.methods({
  'cadastrarEmail': function (email) {
    console.log(`Email fornecido: ${email}`);

    //Verifica se o email fornecido é válido
    check(email, String);
    if (!isValidEmail(email)) {
      console.log('Esse email é inválido mermão!');
      throw new Meteor.Error('Email inválido');
    } else {
      console.log('email válido!');

      //Envia o email de confirmação
      try {

        Email.send({
          to: email,
          from: 'stevegomez002@gmail.com',
          subject: 'Confirmação de Cadastro de Email',
          text: `Olá, \n\nPor favor, confirme o seu email clicando neste link: ${Meteor.absoluteUrl()}confirmar-email/${email}\n\nAtenciosamente, Seu Aplicativo`,
        });
        console.log(`Email de confirmação enviado para ${email}`)
      } catch (error) {
        console.error(`Erro ao enviar email de confirmação para ${email}: ${error}`);
        throw new Meteor.Error('Erro ao enviar email');
      };

    }
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





// useEffect(() => {
//   const getConfig = async () => {
//     try {
//       const response = await fetch('/config.json');
//       const config = await response.json();

//       //Use a configuração
//       process.env.MAIL_URL = config.MAIL_URL;
//     } catch (error) {
//       console.error('Erro ao ler o arquivo de configuração: ', error);
//     }
//   };

//   getConfig();

// }, []);

