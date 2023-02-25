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
Object.defineProperty(exports, "__esModule", { value: true });
exports.complexSquare = exports.complexADD = exports.complexMod = void 0;
/**
 * Square a number
 *
 * @param {number} n Number to be squared
 *
 * @return {number} Square of number
 *
 */
const square = (n) => {
    return Math.pow(n, 2);
};
/**
 * Square root a number
 *
 * @param {number} n Number
 *
 * @return {number} Square root of the number
 *
 */
const sqrt = (n) => {
    return Math.pow(n, 0.5);
};
/**
 * Modulus of a given number
 *
 * @param {ICordinate} Z Complex number
 *
 * @return {number} Modulus of the number
 *
 */
const complexMod = (Z) => {
    return sqrt(square(Z[0]) + square(Z[1]));
};
exports.complexMod = complexMod;
/**
 * Addition of two complex numbers
 *
 * @param {ICordinate} Z1 Complex number
 * @param {ICordinate} Z2 Complex number
 *
 * @return {ICordinate} Addition of two numbers
 *
 */
const complexADD = (Z1, Z2) => {
    return [Z1[0] + Z2[0], Z1[1] + Z2[1]];
};
exports.complexADD = complexADD;
/**
 * Square of a complex numbers
 *
 * @param {ICordinate} Z Complex number
 *
 * @return {ICordinate} Square of the number
 *
 */
const complexSquare = (Z) => {
    return [square(Z[0]) - square(Z[1]), 2 * Z[0] * Z[1]];
};
exports.complexSquare = complexSquare;
