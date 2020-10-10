import { Component } from 'exf-ts';
import { IElementRepresentation } from 'exf-ts/lib/interfaces/interfaces';
export declare class RouterLink extends Component {
    childs: IElementRepresentation[];
    route: string;
    stopRefresh: (e: any) => void;
    stylize(): any;
    render(): any;
}
