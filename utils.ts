export function getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function firstLetterToUpperCase(string: string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
}