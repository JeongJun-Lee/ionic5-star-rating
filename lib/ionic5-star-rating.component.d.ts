import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class StarRating implements ControlValueAccessor, OnInit {
    ngOnInit(): void;
    private _rating;
    private onChange;
    private onTouched;
    disabled: boolean;
    writeValue(obj: number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    rating: number;
    ratingChanged: EventEmitter<number>;
    readonly: string;
    activeColor: string;
    defaultColor: string;
    activeIcon: string;
    defaultIcon: string;
    halfIcon: string;
    halfStar: string;
    maxRating: number;
    fontSize: string;
    Math: any;
    parseFloat: any;
    iconsArray: number[];
    constructor();
    changeRating(event: any): void;
}
