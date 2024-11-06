/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy'
    },
    'transform': {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest'
    }
}
