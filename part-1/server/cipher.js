//followed the ceaser cipher just moved the letters over 5 instead of three.
const letters = {
    a: 'f',
    b: 'g',
    C: 'h',
    d: 'i',
    e: 'j',
    f: 'k',
    g: 'l',
    h: 'm',
    i: 'n',
    j: 'o',
    k: 'p',
    l: 'q',
    m: 'r',
    n: 's',
    o: 't',
    p: 'u',
    q: 'v',
    r: 'w',
    s: 'x',
    t: 'y',
    u: 'z',
    v: 'a',
    w: 'b',
    x: 'c',
    y: 'd',
    z: 'e',
    ' ': ' '
}
phrase = "i love cryptography"


function cipher (message, key){
    message = message.split('')
    let messageReturn = ''
    for(let i = 0; i < message.length; i++){
        for(let letter in key){
            if(message[i]===key[letter]){
                messageReturn += letter
            }
        }
    }
    return messageReturn
}
console.log(letters)
console.log(cipher(phrase, letters))
