import { getStringInfo, toUpperCase } from "../src/app/Utils"

describe('Utils test suite', () => { 
    
    it('should return uppercase of valid string', () => {
        // arrange
        const sut = toUpperCase;
        const expected = 'ABC';
        // act
        const actual = sut('abc');
        // assert
        expect(actual).toBe(expected);
    })

    it.only('should return info for valid string', () => {
        const actual = getStringInfo('My-String');

        expect(actual.lowerCase).toBe('my-string');
        expect(actual.length).toBe(9);
        expect(actual.extraInfo).toEqual({});
        expect(actual.upperCase).toBe('MY-STRING');
        expect(actual.characters).toContain<string>('M');

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();

    })

 })