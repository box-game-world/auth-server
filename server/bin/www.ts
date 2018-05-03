import App from '../app'
import express from 'express'
import bodyParser from 'body-parser'
import RouteFacade from '../routers/route_facede'


const app:express.Application = App.getInstance().app;

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true})); 
RouteFacade.init( app ); 
app.listen( 7000 , ()=>console.log( '포트:7000 연결 성공' ) );

