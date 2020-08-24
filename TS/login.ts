import {User} from './users';
import loggedIn from './loggendIn';

export default function(dbUser:User, FormInfo:{username:string, password:string}){

    if( FormInfo.username == dbUser.username ){

        if( FormInfo.password == dbUser.password ){

            localStorage.setItem('username', FormInfo.username);

            loggedIn();

        }else{
            return;
        }

    }else {
        return;
    }

}