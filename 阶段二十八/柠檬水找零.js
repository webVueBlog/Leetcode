/**
 * @param {number[]} bills
 * @return {boolean}
 860. 柠檬水找零
 bills = [5,5,5,10,20]
 */
var lemonadeChange = function(bills) {
    let five = ten = 0
    for (let i = 0; i < bills.length; i++) {
        switch (bills[i]) {
            case 5:
                five++
                break
            case 10:
                if (!five) return false
                ten++
                five--
                break
            case 20:
                if (!five || (!ten && five < 3)) return false
                if (ten) {
                    ten--
                    five--
                } else {
                    five -= 3
                }
                break
        }
    }
    return true
};