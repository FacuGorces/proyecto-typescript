import {getUsers} from './users';

export default function(){

    if( localStorage.username ){

        document.getElementById('loginModalButtonContainer')!.innerHTML = `
            <span class="user-name">Hola, ${getUsers()[0].username}</span>
            <button id="closeSessionButton" class="btn btn-danger my-2 my-sm-0 sign-off" data-toggle="modal">Cerrar Sesión</button>
        `;

        document.getElementById('closeSessionButton')!.addEventListener('click', function(e){
            e.preventDefault();

            localStorage.clear();

            window.location.reload();
        });

    }

}