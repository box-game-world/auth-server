
import express from 'express';
import login from './login/index';

export default class RouteFacade{

  public static init( app:express.Application ):void{
    app.use( '/', express.static( '../public' ) );   
    app.use( '/login', login );   
  }
}

