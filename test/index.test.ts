/**
 * Project Mandelbrot
 *
 * @author      Moin Khan
 * @copyright   Moin Khan
 *
 * @link https://mo.inkhan.dev
 *
 */

import { describe, expect, test } from '@jest/globals';
import Mandelbrot from '../src';

describe('mandelbrot module', () => {
    test('[0, .5] belongs to mandelbrot', () => {
        const mandelbrot = new Mandelbrot();
        expect(mandelbrot.isMandelbrot([0, .5])).toBeTruthy();
    });

    test('get orbit for [0, .5]', () => {
        const mandelbrot = new Mandelbrot(5);
        expect(mandelbrot.getOrbit([0, .5])).toEqual([
            [0, 0.5],
            [-0.25, 0.5],
            [-0.1875, 0.25],
            [-0.02734375, 0.40625],
            [-0.1642913818359375, 0.477783203125],
            [-0.2012851310428232, 0.3430086746811867],
        ]);
    });
});