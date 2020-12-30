export const fizzBuzz = 
(amountOfAscendingNumbersfromOne: number,
     replacingFunction: (arr: number[], rules: [number, string][]) => (string|number)[], rules: [number, string][] = [[3, 'Fizz'], [5, 'Buzz']],): (string|number)[] => {

    if(amountOfAscendingNumbersfromOne < 1) {
        return [];
    }

    const arrayWithAscendingNumbers: number[] = [];

    for(let i = 1; i <= amountOfAscendingNumbersfromOne; i++) {
        arrayWithAscendingNumbers.push(i);
    }

    return replacingFunction(arrayWithAscendingNumbers, rules);
}

export const isDivided = (num: number, num2: number): boolean => {
    return num % num2 == 0;
}

export const fizzBuzzReplacer = (arr: number[], rules: [number, string][]): (string|number)[] => {
    const modifiedArray = arr.map((el: number|string, index) => {
        rules.forEach((rule) => {
            if(isDivided(index + 1, rule[0])) {
                if(typeof el == 'number') {
                    el = rule[1];
                }
                else {
                    el += rule[1];
                }
            }
        })
        return el;
    })
    return modifiedArray;
}

fizzBuzz(1, fizzBuzzReplacer);