import {getUsers} from './users';
import login from './login';
import loggendIn from './loggendIn';

// Check if Logged in
loggendIn();


document.getElementById('loginButton')!.addEventListener('click', function(e){

    e.preventDefault();

    let username:string = (<HTMLInputElement>document.getElementById('username')).value;
    let password:string = (<HTMLInputElement>document.getElementById('password')).value;

    login(getUsers()[0], {username, password});

});