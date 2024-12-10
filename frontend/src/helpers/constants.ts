import type { MedalI } from "@/interfaces/medal"
import type { Messages  } from "@/interfaces/messages"

import type { DefaultValues  } from "@/interfaces/values"


export const TYPEUSER = {
    USER: "User",
    ADMIN: "Admin",
    NOTUSER: ""
}

export const ROLES = {
    USER: "User",
    ADMIN: "Admin",
}

export const VALID = {
    ISVALID: true,
    NOTVALID: false,
}

export const MESSAGES: Messages = {
    LOGIN: {
        ERROR: {
            EMAIL: {
                TEXT: "Debe ingresar un email válido",
                NAME: "email-error"
            },
            PASSWORD: {
                TEXT: "Debe ingresar una contraseña válida",
                NAME: "password-error"
            }
        }
    },
    HTTP : {
        ERROR:{
            UNEXPECTED : {
                TEXT: "Ha ocurrido un error inesperado intente més tarde o inicie sesión de nuevo.",
            }
        }
    }
}

export const DEFAULTVALUES: DefaultValues={
    EMPTY: "",
    NOTERROR : false
}

export const FORMTYPES = {
    LOGIN: "LOGIN"
}

export const HTMLELEMENTS = {
    ID:{
        LOGINLOADER : "#loader-login",
        FORMLOGIN : "#form-login",
        FORMPOKEMONS : "#form-pokemons",
        TOKENUSER : "#tokenuser",
        PROGRESSBARUPLOADPOKEMON : "#progress-bar-pokemon",
        PROGRESSBARUPLOADPOKEMONINFO : "#progress-bar-pokemon-info",
        MEDALFORM : "#medal-form",
        MEDALFORMIMAGE : "#medal-form-image",


    },
    INCLUDE:{
        LOGOUTBUTTON :'btn-logout',
        LOGINBUTTON : 'btn-login',
    },
    EVENTS : {
        ONCLICK : 'click'
    },
    
}

export const CLASSES = {
    HIDDEN : 'hidden',
}

export const VISIBILITY = {
    SHOW: true,
    HIDDEN: false
}

export const ROUTES = {
    LOGIN: "/",
    USER : {
        UPLOADPOKEMONS : "/user/upload-pokemons",
        ACHIEVEMENTS : "/user/achievements",
    },
    ADMIN : {
        ACCEPTREQUEST : "/admin/accept",
        HISTORYREQUEST : "/admin/history-accepts",
    }
}

export const STATUS = {
    SUCCESS : true,
    HTTP:{
        EXPIREDAUTHORIZATION : 403
    }
}

export const POKEMONS = {
    MIN : 10,
    EMPTY : 0
}

export const MEDALS :Record<string, MedalI> = {
    WOOD : { 
        name : 'Madera',
        image : "wood",
        MAX_ACCEPT : 10
    } ,
    IRON : { 
        name : 'Metal',
        image : "iron",
        MAX_ACCEPT : 15
    } ,
    BRONZE : { 
        name : 'Bronce',
        image : "bronze",
        MAX_ACCEPT : 25
    } ,
    SILVER : { 
        name : 'Plata',
        image : "silver",
        MAX_ACCEPT : 40
    } ,
    GOLD : { 
        name : 'Oro',
        image : "gold",
        MAX_ACCEPT : 60
    } ,
    PLATINUM : { 
        name : 'Platino',
        image : "platinum",
        MAX_ACCEPT : 85
    } ,
    INMORTAL : { 
        name : 'Inmortal',
        image : "inmortal",
        MAX_ACCEPT : 115
    } ,
    DIAMOND : { 
        name : 'Diamante',
        image : "diamond",
        MAX_ACCEPT : 150
    } ,
    RADIANT : { 
        name : 'Radiante',
        image : "radiant",
        MAX_ACCEPT : 190
    } 
}

export const NOTMEDALS = 0

export const REQUEST = {
    STATUS :{
        ACCEPTED : {
            TEXT : "Aceptado",
            VALUE : 1
        },
        REJECTED : {
            TEXT : "Rechazado",
            VALUE : 2
        }
    }
}