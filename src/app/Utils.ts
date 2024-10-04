export function toUpperCase(arg: string): string {
    return arg.toUpperCase();
}

export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    length: number, 
    characters: string[],
    extraInfo: Object | undefined
}; 

export function getStringInfo(arg: string): stringInfo {
    return {
        lowerCase: arg.toLowerCase(),
        upperCase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length, 
        extraInfo: {}
    };
}