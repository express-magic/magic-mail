import nodemailer from 'nodemailer';
import {join} from 'path';
import smtpTransport from 'nodemailer-smtp-transport';
import {log} from 'magic-log';
import config from '../../config'; //TODO: load config from host as well.

export function send(email) {
  if ( config.mailTransport && config.mail ) {
    config.mailTransport.to = config.mailTransport.to || config.mail;

    let trans = smtpTransport(config.mailTransport)
      , transport = nodemailer.createTransport(trans)
    ;

    log('email to be sent:', email);
  }

  return email;
}
