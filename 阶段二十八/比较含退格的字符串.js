/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 844. 比较含退格的字符串
 stackS stackT
 // 第二种，采用标记法
 */
var backspaceCompare = function(s, t) {
    // const stackS = [], stackT = []
    // for(let i = 0; i < s.length; i++) {
    //     switch(s[i]) {
    //         case '#':
    //             stackS.pop()
    //             break
    //         default:
    //             stackS.push(s[i])
    //             break
    //     }
    // }

    // for(let i = 0; i < t.length; i++) {
    //     switch(t[i]) {
    //         case '#':
    //             stackT.pop()
    //             break
    //         default:
    //             stackT.push(t[i])
    //             break
    //     }
    // }
    // return stackS.join('') === stackT.join('')

    // signS = 0 signT = 0
    // S 'abc##' T 'ab#c#'
    let signS = 0,
        signT = 0,
        i = s.length - 1,
        j = t.length - 1
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] === '#') {
                signS++
                i--
            } else if (signS) {
                signS--
                i--
            } else {
                break
            }
        }
        while (j >= 0) {
            if (t[j] === '#') {
                signT++
                j--
            } else if (signT) {
                signT--
                j--
            } else {
                break
            }
        }
        if (s[i] !== t[j]) return false
        i--
        j--
    }
    return true
};