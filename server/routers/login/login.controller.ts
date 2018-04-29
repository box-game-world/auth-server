
import express from 'express'
import axios from 'axios';

export default {

  async postLogin( req:express.Request, res:express.Response ):Promise<any>{
    const body:{ user_email:string, user_password:string } = req.body;
    const email:string = body.user_email;
    const password:string = body.user_password;
    
    try{
      const result = await axios.post( 'http://localhost:7001/login', { email, password } )
      res.json( result.data );
    }catch( error ){
      const result:any = error.response;
      res.status( result.status );
      res.json( result.data );
    }
  }
}
