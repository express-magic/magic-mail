var cwd           = process.cwd();

import nodemailer from 'nodemailer';
import {join} from 'path';
import smtpTransport from 'nodemailer-smtp-transport';
import {log} from 'magic-log';
import config from join( cwd, 'config');


export function send(email) => {
  if ( config.mailTransport && config.mail ) {
    config.mailTransport.to = config.mailTransport.to || config.mail;

    let trans = smtpTransport(config.mailTransport)
      , transport = nodemailer.createTransport(trans)
    ;

    log('email to be sent:', email);
  }

  return email;
}
