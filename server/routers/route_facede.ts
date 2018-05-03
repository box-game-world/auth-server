
import express from 'express';
import login from './login/index';
import path from 'path';

export default class RouteFacade{

  public static init( app:express.Application ):void{
    app.use( '/', express.static( path.join( __dirname, '../public' ) ) );    
    app.use( '/login', login );   
  }
}

