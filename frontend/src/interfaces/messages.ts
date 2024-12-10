interface ErrorInfo {
    TEXT: string;
    NAME?: string;
}

interface ValidationErrors {
    [key: string]: ErrorInfo;
}


interface ValidationMessage {
    ERROR: ValidationErrors;

}

export interface Messages {
    [key: string]: ValidationMessage;
}