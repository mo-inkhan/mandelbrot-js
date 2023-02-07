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
 * Square a number
 *
 * @param {number} n Number to be squared
 *
 * @return {number} Square of number
 *
 */
const square = (n: number): number => {
    return Math.pow(n, 2)
}

/**
 * Square root a number
 *
 * @param {number} n Number
 *
 * @return {number} Square root of the number
 *
 */
const sqrt = (n: number): number => {
    return Math.pow(n, 0.5);
}

/**
 * Modulus of a given number
 *
 * @param {ICordinate} Z Complex number
 *
 * @return {number} Modulus of the number
 *
 */
export const complexMod = (Z: ICordinate): number => {
    return sqrt(square(Z[0]) + square(Z[1]));
}

/**
 * Addition of two complex numbers
 *
 * @param {ICordinate} Z1 Complex number
 * @param {ICordinate} Z2 Complex number
 *
 * @return {ICordinate} Addition of two numbers
 *
 */
export const complexADD = (Z1: ICordinate, Z2: ICordinate): ICordinate => {
    return [Z1[0] + Z2[0], Z1[1] + Z2[1]];
}

/**
 * Square of a complex numbers
 *
 * @param {ICordinate} Z Complex number
 *
 * @return {ICordinate} Square of the number
 *
 */
export const complexSquare = (Z: ICordinate): ICordinate => {
    return [square(Z[0]) - square(Z[1]), 2 * Z[0] * Z[1]];
}
