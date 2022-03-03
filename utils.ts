export function getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function firstLetterToUpperCase(string: string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length);
}

export function getRandomBool(truthChance: number = 50) {
    return Math.random() < truthChance / 100;
}

export function createEmptyTimeline() {
    const arr = [];
    const lifeSpan = 100;
    for (let i = 0; i < lifeSpan; i++) {
        const year = [];
        for (let j = 0; j < 12; j++) {
            const month = [];
            for (let k = 0; k < 30; k++) {
                month.push([]);
            }
            year.push(month);
        }
        arr.push(year);
    }
    return arr;
}

export function getEventCount(): number {
    let eventCount = 0;
    timeline.forEach(y => {
        y.forEach(m => {
            m.forEach(d => {
                eventCount += d.length;
            });
        });
    });
    return eventCount;
}

export function getRandomRGB():string{
    const red = getRandomNumberInRange(0, 255);
    const green = getRandomNumberInRange(0, 255);
    const blue = getRandomNumberInRange(0, 255);
    return `rgb(${red},${green}, ${blue})`;
}