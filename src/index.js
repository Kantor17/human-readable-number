module.exports = function toReadable(number) {
    const below20 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const dozens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',   
    }
    if (number === 0) {
        return 'zero';
    }
    if (number < 20) {
        return below20[number];
    }
    if (number < 100) {
        return (dozens[Math.floor(number / 10) * 10] + ' ' +  below20[Math.floor(number % 10)]).trim();
    }
    if (dozens[Math.floor(number / 10) % 10 * 10]) {
        return (below20[Math.floor(number / 100)] + ' hundred' + ' ' + dozens[Math.floor(number / 10) % 10 * 10] + ' ' + below20[Math.floor(number % 10)]).trim();
    }else {
        return (below20[Math.floor(number / 100)] + ' hundred' + ' ' + below20[Math.floor(number / 1) % 100]).trim();
    }
}

