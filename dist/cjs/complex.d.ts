/**
 * Project Mandelbrot
 *
 * @author      Moin Khan
 * @copyright   Moin Khan
 *
 * @link https://mo.inkhan.dev
 *
 */
export type ICordinate = [number, number];
/**
 * Modulus of a given number
 *
 * @param {ICordinate} Z Complex number
 *
 * @return {number} Modulus of the number
 *
 */
export declare const complexMod: (Z: ICordinate) => number;
/**
 * Addition of two complex numbers
 *
 * @param {ICordinate} Z1 Complex number
 * @param {ICordinate} Z2 Complex number
 *
 * @return {ICordinate} Addition of two numbers
 *
 */
export declare const complexADD: (Z1: ICordinate, Z2: ICordinate) => ICordinate;
/**
 * Square of a complex numbers
 *
 * @param {ICordinate} Z Complex number
 *
 * @return {ICordinate} Square of the number
 *
 */
export declare const complexSquare: (Z: ICordinate) => ICordinate;
