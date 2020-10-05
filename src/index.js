module.exports = function toReadable (number) {
    let numbFromOneToTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                           'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let numbFromtTwentyToNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = ' hundred'
    if (number === 0) {
        return 'zero';
    }
    let result = '';
    let numb = number;
    let firstI= 0;

    if (number > 99){
        result += numbFromOneToTwenty[Math.floor(numb/100)] + hundred;
        numb = numb - Math.floor(numb/100) * 100;
        if (numb < 100){
            if (number % 100 !== 0){
                result += ' ';
                if (numb > 20){
                    result += numbFromtTwentyToNinety[Math.floor(numb/10)-2]
                    numb -= Math.floor(numb/10)*10;
                    firstI = numb;
                    if (firstI !== 0) {
                        result +=' ';
                    }
                } 
            }
        }
    }
    if (number < 100){
        if (numb > 20){
            result += numbFromtTwentyToNinety[Math.floor(numb/10)-2]
            numb -= Math.floor(numb/10)*10;
            firstI = numb;
            if (firstI !== 0) {
                result +=' ';
            }
        }
    }
    return  result += numbFromOneToTwenty[numb]; 
}
