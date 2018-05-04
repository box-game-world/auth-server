import App from '../app'
import express from 'express'
import bodyParser from 'body-parser'
import RouteFacade from '../routers/route_facede'
import cookieParser from 'cookie-parser';
import session from 'express-session'


const app:express.Application = App.getInstance().app;

app.use( bodyParser.json() );
app.use( cookieParser() );
app.use(bodyParser.urlencoded({extended: true})); 
app.use( ( req:express.Request, res:express.Response, next:express.NextFunction )=>{
  res.header( 'Access-Control-Allow-Origin', '*' );
  res.header( 'Access-Control-Allow-Method', 'GET, POST, PUT, DELETE' );
  res.header( 'Access-Control-Allow-Header', 'Content-Type, x-access-token' );
  next();
});
app.use( session({ 
  secret:'test_secret', 
  resave:false, 
  saveUninitialized:false 
}) );
RouteFacade.init( app ); 
app.listen( 7000 , ()=>console.log( '포트:7000 연결 성공' ) );
