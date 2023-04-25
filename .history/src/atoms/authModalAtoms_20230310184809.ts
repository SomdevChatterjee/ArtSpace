import {atom} from 'recoil';

export interface AuthModalState{
    open:boolean,
    view : 'login' | 'signup' | 'resetPasword'
}

const defaultModalState: AuthModalState ={
    open:false,
    view:'login'
}


export const auhtModalState = atom<AuthModalState>({
    key:'authModalState"
    default: defaultModalState,
})