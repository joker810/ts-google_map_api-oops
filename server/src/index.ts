import express, {type Request,type Response} from 'express';
import loginRoutes from './routes/loginRoutes.js';
import cookieSession from 'cookie-session';
const app=express();
const port = 3000;

app.use(express.json()) //parse json bodies
app.use(cookieSession({keys:["shsh"]})) // add a request.session object which lets us store small data which can be used after relogin.which comes from browser cookie..(keys:['signing key'])
app.use(express.urlencoded({extended:true})) //parse Url encoded form submission.

app.use(loginRoutes); // defined routes with Router middleware. 1st args is route path defined here and we can define path at route source . 2nd args is import from route source


app.listen(port,()=>{
    console.log('listening to port ',port);
    
})