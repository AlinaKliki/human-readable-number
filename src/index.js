const wordNumber = (num) => {
    switch (num) {
        case '0': return ''
        case '1': return'one'
        case '2': return 'two'
        case '3': return 'three'
        case '4': return 'four'
        case '5': return 'five'
        case '6': return 'six'
        case '7': return 'seven'
        case '8': return 'eight'
        case '9': return 'nine'
    }
}

module.exports = function toReadable (number) {
    let output = ''
    number = number.toString().split('')
    if (number.length === 3) output = `${wordNumber(number[0])} hundred `

    if (number.length > 1) {
        if (number[number.length-2] > 1) {
            switch (number[number.length-2]) {
                case '2': return (output + 'twenty ' + wordNumber(number[number.length-1])).trim()
                case '3': return (output + 'thirty ' + wordNumber(number[number.length-1])).trim()
                case '4': return (output + 'forty ' + wordNumber(number[number.length-1])).trim()
                case '5': return (output + 'fifty ' + wordNumber(number[number.length-1])).trim()
                case '6': return (output + 'sixty ' + wordNumber(number[number.length-1])).trim()
                case '7': return (output + 'seventy ' + wordNumber(number[number.length-1])).trim()
                case '8': return (output + 'eighty ' + wordNumber(number[number.length-1])).trim()
                case '9': return (output + 'ninety ' + wordNumber(number[number.length-1])).trim()
            }
        }
        else if (number[number.length-2] === '1') {
            switch (number[number.length-1]) {
                case '0': return output + 'ten'
                case '1': return output + 'eleven'
                case '2': return output + 'twelve'
                case '3': return output + 'thirteen'
                case '4': return output + 'fourteen'
                case '5': return output + 'fifteen'
                case '6': return output + 'sixteen'
                case '7': return output + 'seventeen'
                case '8': return output + 'eighteen'
                case '9': return output + 'nineteen'
            }
        } else return (output + wordNumber(number[number.length-1])).trim()
    } else return number[0] === '0' ? 'zero' : wordNumber(number[0])
}