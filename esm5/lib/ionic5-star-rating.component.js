/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic5-star-rating.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var HTML_TEMPLATE = "\n<div class=\"ionic5-star-rating\">\n  <button [ngStyle]=\"{'width' : fontSize, 'height' : fontSize}\" *ngFor=\"let index of iconsArray\" id=\"{{index}}\" type=\"button\" ion-button icon-only (click)=\"changeRating($event)\">\n    <ion-icon [ngStyle]=\"{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }\" name=\"{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}\"></ion-icon>\n  </button>\n</div>\n";
/** @type {?} */
var CSS_STYLE = "\n    .ionic5-star-rating button {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        padding : 0px;\n    }\n";
var StarRating = /** @class */ (function () {
    function StarRating() {
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
    StarRating.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rating = this.rating || 3; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    StarRating.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this.rating = obj;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StarRating.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StarRating.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    StarRating.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    };
    Object.defineProperty(StarRating.prototype, "rating", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rating;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rating = val;
            // for form
            if (this.onChange) {
                this.onChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    StarRating.prototype.changeRating = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        /** @type {?} */
        var id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === "true") {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // unique event
        this.ratingChanged.emit(this.rating);
    };
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
    StarRating.ctorParameters = function () { return []; };
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
    return StarRating;
}());
export { StarRating };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWM1LXN0YXItcmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lvbmljNS1zdGFyLXJhdGluZy8iLCJzb3VyY2VzIjpbImxpYi9pb25pYzUtc3Rhci1yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRW5FLGFBQWEsR0FBRyxxa0JBTXJCOztJQUVLLFNBQVMsR0FBRyw4SkFPakI7QUFFRDtJQTRFRTtRQXhCQSxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBVSxDQUFDO1FBR2xFLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFFM0IsZ0JBQVcsR0FBWSxTQUFTLENBQUM7UUFFakMsaUJBQVksR0FBWSxTQUFTLENBQUM7UUFFbEMsZUFBVSxHQUFZLE1BQU0sQ0FBQztRQUU3QixnQkFBVyxHQUFZLGNBQWMsQ0FBQztRQUV0QyxhQUFRLEdBQVksV0FBVyxDQUFDO1FBRWhDLGFBQVEsR0FBWSxPQUFPLENBQUM7UUFFNUIsY0FBUyxHQUFZLENBQUMsQ0FBQztRQUV2QixhQUFRLEdBQVksTUFBTSxDQUFDO1FBRzNCLGVBQVUsR0FBYyxFQUFFLENBQUM7UUFHekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQzs7OztJQWpFRCw2QkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsc0NBQXNDO1FBQ3RFLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFF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a0M7O0lBQ2xDLGdDQUM2Qjs7SUFDN0IsaUNBQ3NDOztJQUN0Qyw4QkFDZ0M7O0lBQ2hDLDhCQUM0Qjs7SUFDNUIsK0JBQ3VCOztJQUN2Qiw4QkFDMkI7O0lBQzNCLDBCQUFVOztJQUNWLGdDQUFpQjs7SUFDakIsZ0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5jb25zdCBIVE1MX1RFTVBMQVRFID0gYFxuPGRpdiBjbGFzcz1cImlvbmljNS1zdGFyLXJhdGluZ1wiPlxuICA8YnV0dG9uIFtuZ1N0eWxlXT1cInsnd2lkdGgnIDogZm9udFNpemUsICdoZWlnaHQnIDogZm9udFNpemV9XCIgKm5nRm9yPVwibGV0IGluZGV4IG9mIGljb25zQXJyYXlcIiBpZD1cInt7aW5kZXh9fVwiIHR5cGU9XCJidXR0b25cIiBpb24tYnV0dG9uIGljb24tb25seSAoY2xpY2spPVwiY2hhbmdlUmF0aW5nKCRldmVudClcIj5cbiAgICA8aW9uLWljb24gW25nU3R5bGVdPVwieydjb2xvcic6aW5kZXggPCB0aGlzLk1hdGgucm91bmQodGhpcy5wYXJzZUZsb2F0KHJhdGluZykpID8gYWN0aXZlQ29sb3IgOiBkZWZhdWx0Q29sb3IsICdmb250LXNpemUnIDogZm9udFNpemUgfVwiIG5hbWU9XCJ7eyhoYWxmU3RhciA9PT0ndHJ1ZScgJiYgKHJhdGluZyAtIGluZGV4ID4gMCkgJiYgKHJhdGluZyAtIGluZGV4IDw9IDAuNSkpID8gaGFsZkljb24gOiAoaW5kZXggPCB0aGlzLk1hdGgucm91bmQodGhpcy5wYXJzZUZsb2F0KHJhdGluZykpKSA/IGFjdGl2ZUljb24gOiBkZWZhdWx0SWNvbn19XCI+PC9pb24taWNvbj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbmBcblxuY29uc3QgQ1NTX1NUWUxFID0gYFxuICAgIC5pb25pYzUtc3Rhci1yYXRpbmcgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBwYWRkaW5nIDogMHB4O1xuICAgIH1cbmBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uaWM1LXN0YXItcmF0aW5nJyxcbiAgdGVtcGxhdGU6IEhUTUxfVEVNUExBVEUsXG4gIHN0eWxlczogW0NTU19TVFlMRV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICAgIHVzZUV4aXN0aW5nOiBTdGFyUmF0aW5nLFxuICAgICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbl1cbn0pXG5leHBvcnQgY2xhc3MgU3RhclJhdGluZyBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXR7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yYXRpbmcgPSB0aGlzLnJhdGluZyB8fCAzOyAvL2RlZmF1bHQgYWZ0ZXIgaW5wdXRgcyBpbml0aWFsaXphdGlvblxuICAgIGZvcih2YXIgaT0wOyBpIDwgdGhpcy5tYXhSYXRpbmc7IGkrKykge1xuICAgICAgdGhpcy5pY29uc0FycmF5LnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmF0aW5nIDogbnVtYmVyO1xuICBwcml2YXRlIG9uQ2hhbmdlIDogYW55O1xuICBwcml2YXRlIG9uVG91Y2hlZCA6IGFueTtcbiAgcHVibGljIGRpc2FibGVkIDogYm9vbGVhbjtcblxuICB3cml0ZVZhbHVlKG9iajogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yYXRpbmcgPSBvYmo7XG4gIH1cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlYWRvbmx5ID0gaXNEaXNhYmxlZCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiO1xuICB9XG5cbiAgQElucHV0KCkgcHVibGljIHNldCByYXRpbmcodmFsIDogbnVtYmVyKXtcbiAgICB0aGlzLl9yYXRpbmcgPSB2YWw7XG4gICAgLy8gZm9yIGZvcm1cbiAgICBpZih0aGlzLm9uQ2hhbmdlKXtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJhdGluZygpOiBudW1iZXJ7XG4gICAgcmV0dXJuIHRoaXMuX3JhdGluZztcbiAgfVxuICBcbiAgQE91dHB1dCgpXG4gIHJhdGluZ0NoYW5nZWQgOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpXG4gIHJlYWRvbmx5OiBzdHJpbmcgPSBcImZhbHNlXCI7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZUNvbG9yIDogc3RyaW5nID0gJyM0ODhhZmYnO1xuICBASW5wdXQoKVxuICBkZWZhdWx0Q29sb3IgOiBzdHJpbmcgPSAnI2FhYWFhYSc7XG4gIEBJbnB1dCgpXG4gIGFjdGl2ZUljb24gOiBzdHJpbmcgPSAnc3Rhcic7XG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRJY29uIDogc3RyaW5nID0gJ3N0YXItb3V0bGluZSc7XG4gIEBJbnB1dCgpXG4gIGhhbGZJY29uIDogc3RyaW5nID0gJ3N0YXItaGFsZic7XG4gIEBJbnB1dCgpXG4gIGhhbGZTdGFyIDogc3RyaW5nID0gXCJmYWxzZVwiO1xuICBASW5wdXQoKVxuICBtYXhSYXRpbmcgOiBudW1iZXIgPSA1O1xuICBASW5wdXQoKVxuICBmb250U2l6ZSA6IHN0cmluZyA9ICcyOHB4JztcbiAgTWF0aDogYW55O1xuICBwYXJzZUZsb2F0IDogYW55O1xuICBpY29uc0FycmF5IDogbnVtYmVyW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLk1hdGggPSBNYXRoO1xuICAgIHRoaXMucGFyc2VGbG9hdCA9IHBhcnNlRmxvYXQ7XG4gIH1cblxuICBjaGFuZ2VSYXRpbmcoZXZlbnQpe1xuXG4gICAgaWYodGhpcy5yZWFkb25seSAmJiB0aGlzLnJlYWRvbmx5ID09PSBcInRydWVcIikgcmV0dXJuO1xuICAgIC8vIGV2ZW50IGlzIGRpZmZlcmVudCBmb3IgZmlyZWZveCBhbmQgY2hyb21lXG4gICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmlkID8gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkKSA6IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICBpZih0aGlzLmhhbGZTdGFyICYmIHRoaXMuaGFsZlN0YXIgPT09IFwidHJ1ZVwiKSB7XG4gICAgICB0aGlzLnJhdGluZyA9ICgodGhpcy5yYXRpbmcgLSBpZCA+IDApICYmICh0aGlzLnJhdGluZyAtIGlkIDw9IDAuNSkpID8gaWQgKyAxIDogaWQgKyAuNTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yYXRpbmcgPSBpZCArIDE7XG4gICAgfVxuICAgIFxuICAgIC8vIHVuaXF1ZSBldmVudFxuICAgIHRoaXMucmF0aW5nQ2hhbmdlZC5lbWl0KHRoaXMucmF0aW5nKVxuICB9XG59Il19