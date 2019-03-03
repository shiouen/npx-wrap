import { expect } from 'chai';

import default_npx from '../src/index';
import { npx } from '../src/';
import { async, spawn } from '../src/';

export const exporting = {
    'the default export': {
        'should be defined': () => {
            expect(default_npx).to.be.ok;
        },
        "should have 'async' defined": () => {
            expect(default_npx.async).to.be.ok;
        },
        "should have 'spawn' defined": () => {
            expect(default_npx.spawn).to.be.ok;
        }
    },
    'the single named constant export': {
        'should be defined': () => {
            expect(npx).to.be.ok;
        },
        "should have 'async' defined": () => {
            expect(npx.async).to.be.ok;
        },
        "should have 'spawn' defined": () => {
            expect(npx.spawn).to.be.ok;
        }
    },
    'the named method exports': {
        'async': {
            'should be defined': () => {
                expect(async).to.be.ok;
            }
        },
        'spawn': {
            'should be defined': () => {
                expect(spawn).to.be.ok;
            }
        }
    }
};
