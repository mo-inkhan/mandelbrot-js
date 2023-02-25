"use strict";
/**
 * Project Mandelbrot
 *
 * @author      Moin Khan
 * @copyright   Moin Khan
 *
 * @link https://mo.inkhan.dev
 *
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Mandelbrot_instances, _Mandelbrot_getNextCordinates;
Object.defineProperty(exports, "__esModule", { value: true });
const complex_1 = require("./complex");
class Mandelbrot {
    constructor(MAX_ITERATIONS) {
        _Mandelbrot_instances.add(this);
        this.MAX_ITERATIONS = MAX_ITERATIONS !== null && MAX_ITERATIONS !== void 0 ? MAX_ITERATIONS : 100;
    }
    /**
     * The orbit of the critical point z=0 under iteration of the quadratic map
     *
     * @param {ICordinate} number Complex number
     *
     * @return {ICordinate[]} The sequence
     *
     */
    getOrbit(number) {
        let value = [0, 0];
        let values = [];
        for (let i = 0; i <= this.MAX_ITERATIONS; i++) {
            value = __classPrivateFieldGet(this, _Mandelbrot_instances, "m", _Mandelbrot_getNextCordinates).call(this, value, number);
            values.push(value);
        }
        return values;
    }
    /**
     * Check if the given complex number is a part of the Mandelbrot set
     *
     * @param {ICordinate} number Complex number
     *
     * @return {[boolean, number]} The sequence
     *
     */
    isMandelbrot(number) {
        let value = [0, 0];
        for (let i = 0; i <= this.MAX_ITERATIONS; i++) {
            value = __classPrivateFieldGet(this, _Mandelbrot_instances, "m", _Mandelbrot_getNextCordinates).call(this, value, number);
            if ((0, complex_1.complexMod)(value) > 2)
                return [false, i];
        }
        return [true, this.MAX_ITERATIONS];
    }
}
_Mandelbrot_instances = new WeakSet(), _Mandelbrot_getNextCordinates = function _Mandelbrot_getNextCordinates(current, number) {
    return (0, complex_1.complexADD)((0, complex_1.complexSquare)(current), number);
};
exports.default = Mandelbrot;
