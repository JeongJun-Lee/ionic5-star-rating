/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic5-star-rating.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
const HTML_TEMPLATE = `
<div class="ionic5-star-rating">
  <button [ngStyle]="{'width' : fontSize, 'height' : fontSize}" *ngFor="let index of iconsArray" id="{{index}}" type="button" ion-button icon-only (click)="changeRating($event)">
    <ion-icon [ngStyle]="{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }" name="{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}"></ion-icon>
  </button>
</div>
`;
/** @type {?} */
const CSS_STYLE = `
    .ionic5-star-rating button {
        background: none;
        box-shadow: none;
        -webkit-box-shadow: none;
        padding : 0px;
    }
`;
export class StarRating {
    constructor() {
        this.ratingChanged = new EventEmitter();
        this.readonly = "false";
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'star';
        this.defaultIcon = 'star-outline';
        this.halfIcon = 'star-half';
        this.halfStar = "false";
        this.maxRating = 5;
        this.fontSize = '28px';
        this.iconsArray = [];
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rating = this.rating || 3; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.rating = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rating(val) {
        this._rating = val;
        // for form
        if (this.onChange) {
            this.onChange(val);
        }
    }
    /**
     * @return {?}
     */
    get rating() {
        return this._rating;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeRating(event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        /** @type {?} */
        let id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === "true") {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // unique event
        this.ratingChanged.emit(this.rating);
    }
}
StarRating.decorators = [
    { type: Component, args: [{
                selector: 'ionic5-star-rating',
                template: HTML_TEMPLATE,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: StarRating,
                        multi: true
                    }
                ],
                styles: [CSS_STYLE]
            }] }
];
/** @nocollapse */
StarRating.ctorParameters = () => [];
StarRating.propDecorators = {
    rating: [{ type: Input }],
    ratingChanged: [{ type: Output }],
    readonly: [{ type: Input }],
    activeColor: [{ type: Input }],
    defaultColor: [{ type: Input }],
    activeIcon: [{ type: Input }],
    defaultIcon: [{ type: Input }],
    halfIcon: [{ type: Input }],
    halfStar: [{ type: Input }],
    maxRating: [{ type: Input }],
    fontSize: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    StarRating.prototype._rating;
    /**
     * @type {?}
     * @private
     */
    StarRating.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    StarRating.prototype.onTouched;
    /** @type {?} */
    StarRating.prototype.disabled;
    /** @type {?} */
    StarRating.prototype.ratingChanged;
    /** @type {?} */
    StarRating.prototype.readonly;
    /** @type {?} */
    StarRating.prototype.activeColor;
    /** @type {?} */
    StarRating.prototype.defaultColor;
    /** @type {?} */
    StarRating.prototype.activeIcon;
    /** @type {?} */
    StarRating.prototype.defaultIcon;
    /** @type {?} */
    StarRating.prototype.halfIcon;
    /** @type {?} */
    StarRating.prototype.halfStar;
    /** @type {?} */
    StarRating.prototype.maxRating;
    /** @type {?} */
    StarRating.prototype.fontSize;
    /** @type {?} */
    StarRating.prototype.Math;
    /** @type {?} */
    StarRating.prototype.parseFloat;
    /** @type {?} */
    StarRating.prototype.iconsArray;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWM1LXN0YXItcmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljNS1zdGFyLXJhdGluZy8iLCJzb3VyY2VzIjpbImxpYi9pb25pYzUtc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRW5FLGFBQWEsR0FBRzs7Ozs7O0NBTXJCOztNQUVLLFNBQVMsR0FBRzs7Ozs7OztDQU9qQjtBQWNELE1BQU0sT0FBTyxVQUFVO0lBZ0VyQjtRQXhCQSxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR2xFLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFFM0IsZ0JBQVcsR0FBWSxTQUFTLENBQUM7UUFFakMsaUJBQVksR0FBWSxTQUFTLENBQUM7UUFFbEMsZUFBVSxHQUFZLE1BQU0sQ0FBQztRQUU3QixnQkFBVyxHQUFZLGNBQWMsQ0FBQztRQUV0QyxhQUFRLEdBQVksV0FBVyxDQUFDO1FBRWhDLGFBQVEsR0FBWSxPQUFPLENBQUM7UUFFNUIsY0FBUyxHQUFZLENBQUMsQ0FBQztRQUV2QixhQUFRLEdBQVksTUFBTSxDQUFDO1FBRzNCLGVBQVUsR0FBYyxFQUFFLENBQUM7UUFHekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQzs7OztJQWpFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztRQUN0RSxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFB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OEJBQzJCOztJQUMzQiwwQkFBVTs7SUFDVixnQ0FBaUI7O0lBQ2pCLGdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuY29uc3QgSFRNTF9URU1QTEFURSA9IGBcbjxkaXYgY2xhc3M9XCJpb25pYzUtc3Rhci1yYXRpbmdcIj5cbiAgPGJ1dHRvbiBbbmdTdHlsZV09XCJ7J3dpZHRoJyA6IGZvbnRTaXplLCAnaGVpZ2h0JyA6IGZvbnRTaXplfVwiICpuZ0Zvcj1cImxldCBpbmRleCBvZiBpY29uc0FycmF5XCIgaWQ9XCJ7e2luZGV4fX1cIiB0eXBlPVwiYnV0dG9uXCIgaW9uLWJ1dHRvbiBpY29uLW9ubHkgKGNsaWNrKT1cImNoYW5nZVJhdGluZygkZXZlbnQpXCI+XG4gICAgPGlvbi1pY29uIFtuZ1N0eWxlXT1cInsnY29sb3InOmluZGV4IDwgdGhpcy5NYXRoLnJvdW5kKHRoaXMucGFyc2VGbG9hdChyYXRpbmcpKSA/IGFjdGl2ZUNvbG9yIDogZGVmYXVsdENvbG9yLCAnZm9udC1zaXplJyA6IGZvbnRTaXplIH1cIiBuYW1lPVwie3soaGFsZlN0YXIgPT09J3RydWUnICYmIChyYXRpbmcgLSBpbmRleCA+IDApICYmIChyYXRpbmcgLSBpbmRleCA8PSAwLjUpKSA/IGhhbGZJY29uIDogKGluZGV4IDwgdGhpcy5NYXRoLnJvdW5kKHRoaXMucGFyc2VGbG9hdChyYXRpbmcpKSkgPyBhY3RpdmVJY29uIDogZGVmYXVsdEljb259fVwiPjwvaW9uLWljb24+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG5gXG5cbmNvbnN0IENTU19TVFlMRSA9IGBcbiAgICAuaW9uaWM1LXN0YXItcmF0aW5nIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgcGFkZGluZyA6IDBweDtcbiAgICB9XG5gXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbmljNS1zdGFyLXJhdGluZycsXG4gIHRlbXBsYXRlOiBIVE1MX1RFTVBMQVRFLFxuICBzdHlsZXM6IFtDU1NfU1RZTEVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogU3RhclJhdGluZyxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG5dXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJSYXRpbmcgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0e1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmF0aW5nID0gdGhpcy5yYXRpbmcgfHwgMzsgLy9kZWZhdWx0IGFmdGVyIGlucHV0YHMgaW5pdGlhbGl6YXRpb25cbiAgICBmb3IodmFyIGk9MDsgaSA8IHRoaXMubWF4UmF0aW5nOyBpKyspIHtcbiAgICAgIHRoaXMuaWNvbnNBcnJheS5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JhdGluZyA6IG51bWJlcjtcbiAgcHJpdmF0ZSBvbkNoYW5nZSA6IGFueTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQgOiBhbnk7XG4gIHB1YmxpYyBkaXNhYmxlZCA6IGJvb2xlYW47XG5cbiAgd3JpdGVWYWx1ZShvYmo6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmF0aW5nID0gb2JqO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZWFkb25seSA9IGlzRGlzYWJsZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcbiAgfVxuXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgcmF0aW5nKHZhbCA6IG51bWJlcil7XG4gICAgdGhpcy5fcmF0aW5nID0gdmFsO1xuICAgIC8vIGZvciBmb3JtXG4gICAgaWYodGhpcy5vbkNoYW5nZSl7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCByYXRpbmcoKTogbnVtYmVye1xuICAgIHJldHVybiB0aGlzLl9yYXRpbmc7XG4gIH1cbiAgXG4gIEBPdXRwdXQoKVxuICByYXRpbmdDaGFuZ2VkIDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKVxuICByZWFkb25seTogc3RyaW5nID0gXCJmYWxzZVwiO1xuICBASW5wdXQoKVxuICBhY3RpdmVDb2xvciA6IHN0cmluZyA9ICcjNDg4YWZmJztcbiAgQElucHV0KClcbiAgZGVmYXVsdENvbG9yIDogc3RyaW5nID0gJyNhYWFhYWEnO1xuICBASW5wdXQoKVxuICBhY3RpdmVJY29uIDogc3RyaW5nID0gJ3N0YXInO1xuICBASW5wdXQoKVxuICBkZWZhdWx0SWNvbiA6IHN0cmluZyA9ICdzdGFyLW91dGxpbmUnO1xuICBASW5wdXQoKVxuICBoYWxmSWNvbiA6IHN0cmluZyA9ICdzdGFyLWhhbGYnO1xuICBASW5wdXQoKVxuICBoYWxmU3RhciA6IHN0cmluZyA9IFwiZmFsc2VcIjtcbiAgQElucHV0KClcbiAgbWF4UmF0aW5nIDogbnVtYmVyID0gNTtcbiAgQElucHV0KClcbiAgZm9udFNpemUgOiBzdHJpbmcgPSAnMjhweCc7XG4gIE1hdGg6IGFueTtcbiAgcGFyc2VGbG9hdCA6IGFueTtcbiAgaWNvbnNBcnJheSA6IG51bWJlcltdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5NYXRoID0gTWF0aDtcbiAgICB0aGlzLnBhcnNlRmxvYXQgPSBwYXJzZUZsb2F0O1xuICB9XG5cbiAgY2hhbmdlUmF0aW5nKGV2ZW50KXtcblxuICAgIGlmKHRoaXMucmVhZG9ubHkgJiYgdGhpcy5yZWFkb25seSA9PT0gXCJ0cnVlXCIpIHJldHVybjtcbiAgICAvLyBldmVudCBpcyBkaWZmZXJlbnQgZm9yIGZpcmVmb3ggYW5kIGNocm9tZVxuICAgIGxldCBpZCA9IGV2ZW50LnRhcmdldC5pZCA/IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZCkgOiBwYXJzZUludChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG4gICAgaWYodGhpcy5oYWxmU3RhciAmJiB0aGlzLmhhbGZTdGFyID09PSBcInRydWVcIikge1xuICAgICAgdGhpcy5yYXRpbmcgPSAoKHRoaXMucmF0aW5nIC0gaWQgPiAwKSAmJiAodGhpcy5yYXRpbmcgLSBpZCA8PSAwLjUpKSA/IGlkICsgMSA6IGlkICsgLjU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmF0aW5nID0gaWQgKyAxO1xuICAgIH1cbiAgICBcbiAgICAvLyB1bmlxdWUgZXZlbnRcbiAgICB0aGlzLnJhdGluZ0NoYW5nZWQuZW1pdCh0aGlzLnJhdGluZylcbiAgfVxufSJdfQ==