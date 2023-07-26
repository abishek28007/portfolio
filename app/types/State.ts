export interface State {
    userSymbol: string;
    systemSymbol: string;
    win: number;
}
export interface Action {
    type: string;
    data: string;
}
export interface Wining {
    win: string[];
    icon: string;
}