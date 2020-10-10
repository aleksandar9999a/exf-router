import { Component } from 'exf-ts';
import { IRoute } from './../interfaces/interfaces';
export declare class Router extends Component {
    routes: IRoute[];
    guard?: () => boolean;
    onCreate(): void;
    onDestroy(): void;
    handleChange: () => void;
    render(): any;
}
