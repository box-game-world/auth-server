
import express from 'express'
import axios from 'axios';
import path from 'path';
import url from 'url';
import jwt from 'jsonwebtoken';

const fullUrl = ( req:express.Request ):string => {
  return url.format( {
    protocol:req.protocol,
    host: req.get( 'host' ),
    pathname: req.originalUrl
  } )
}

export default {
  async getLogin( req:express.Request, res:express.Response ):Promise<any>{
    if( req.headers.referer !== fullUrl( req ) ){
      res.cookie( 'bgw_return_url', req.headers.referer );
    }
    
    const result:any = await axios.get( 'http://localhost:7001/auth/validation-token', { params:{ token:req.cookies[ 'bgw-access-token']} } );
    if( result ){
      res.redirect( req.cookies.bgw_return_url );
    }else{
      res.sendFile( path.join( __dirname, '../../public/index.html') );
    }
  },

  async postLogin( req:express.Request, res:express.Response ):Promise<any>{
    const body:{ user_email:string, user_password:string } = req.body;
    const email:string = body.user_email;
    const password:string = body.user_password;
    
    try{
      console.log( email, password );
      const result:any = await axios.post( 'http://localhost:7001/login', { email, password } );
      res.cookie( 'bgw-access-token', result.data.token );
      res.redirect( req.cookies.bgw_return_url );
    }catch( error ){
      res.redirect( fullUrl( req ) );
    }
  }
}
