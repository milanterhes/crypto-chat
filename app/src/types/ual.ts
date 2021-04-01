export interface UAL {
    availableAuthenticators: Array<any>;
    showModal: () => void;
    activeUser: any;
    logout: () => void;
}