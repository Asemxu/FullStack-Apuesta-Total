interface BaseInfo {
    TEXT: string;
    NAME?: string;
}

interface ErrorInfo extends BaseInfo {
}

interface SuccessInfo {
    TEXT: string;
    NAME?: string;
}

interface ValidationErrors {
    [key: string]: ErrorInfo;
}


interface ValidationMessage {
    ERROR: ValidationErrors;
    SUCCESS?: SuccessInfo;
    REJECT?: SuccessInfo;

}

export interface Messages {
    [key: string]: ValidationMessage;
}