/**
 * Project Mandelbrot
 *
 * @author      Moin Khan
 * @copyright   Moin Khan
 *
 * @link https://mo.inkhan.dev
 *
 */
import { ICordinate } from "./complex";
declare class Mandelbrot {
    #private;
    MAX_ITERATIONS: number;
    constructor(MAX_ITERATIONS?: number);
    /**
     * The orbit of the critical point z=0 under iteration of the quadratic map
     *
     * @param {ICordinate} number Complex number
     *
     * @return {ICordinate[]} The sequence
     *
     */
    getOrbit(number: ICordinate): ICordinate[];
    /**
     * Check if the given complex number is a part of the Mandelbrot set
     *
     * @param {ICordinate} number Complex number
     *
     * @return {[boolean, number]} The sequence
     *
     */
    isMandelbrot(number: ICordinate): [boolean, number];
}
export default Mandelbrot;
