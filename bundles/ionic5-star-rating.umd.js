(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@ionic/angular'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ionic5-star-rating', ['exports', '@angular/core', '@angular/forms', '@ionic/angular', '@angular/common'], factory) :
    (global = global || self, factory(global['ionic5-star-rating'] = {}, global.ng.core, global.ng.forms, global.angular, global.ng.common));
}(this, (function (exports, core, forms, angular, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ionic5-star-rating.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var HTML_TEMPLATE = "\n<div class=\"ionic5-star-rating\">\n  <button [ngStyle]=\"{'width' : fontSize, 'height' : fontSize}\" *ngFor=\"let index of iconsArray\" id=\"{{index}}\" type=\"button\" ion-button icon-only (click)=\"changeRating($event)\">\n    <ion-icon [ngStyle]=\"{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }\" name=\"{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}\"></ion-icon>\n  </button>\n</div>\n";
    /** @type {?} */
    var CSS_STYLE = "\n    .ionic5-star-rating button {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        padding : 0px;\n    }\n";
    var StarRating = /** @class */ (function () {
        function StarRating() {
            this.ratingChanged = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ionic5-star-rating',
                        template: HTML_TEMPLATE,
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
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
            rating: [{ type: core.Input }],
            ratingChanged: [{ type: core.Output }],
            readonly: [{ type: core.Input }],
            activeColor: [{ type: core.Input }],
            defaultColor: [{ type: core.Input }],
            activeIcon: [{ type: core.Input }],
            defaultIcon: [{ type: core.Input }],
            halfIcon: [{ type: core.Input }],
            halfStar: [{ type: core.Input }],
            maxRating: [{ type: core.Input }],
            fontSize: [{ type: core.Input }]
        };
        return StarRating;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ionic5-star-rating.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StarRatingModule = /** @class */ (function () {
        function StarRatingModule() {
        }
        StarRatingModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [StarRating],
                        imports: [
                            angular.IonicModule,
                            common.CommonModule
                        ],
                        exports: [StarRating]
                    },] }
        ];
        return StarRatingModule;
    }());

    exports.StarRating = StarRating;
    exports.StarRatingModule = StarRatingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ionic5-star-rating.umd.js.map
