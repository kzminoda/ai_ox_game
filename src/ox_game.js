"use strict";
// import {list} from './list'
exports.__esModule = true;
exports.ox_ai = void 0;
var ox_ai = /** @class */ (function () {
    function ox_ai() {
        var _this = this;
        // constructor(){
        //     this.initPattern()
        //     this.dic = {}
        //     this.dic = list
        // }
        // public initPattern = () => {
        //     this.dic = {
        //         'f': [],
        //         's': [],
        //         'e': []
        //     }
        //     for (let i: number = 1; i<=9; i++)
        //         for (let j: number = 1; j<=9; j++)
        //             for (let k: number = 1; k<=9; k++)
        //                 for (let l: number = 1; l<=9; l++)
        //                     for (let m: number = 1; m<=9; m++)
        //                         for (let n: number = 1; n<=9; n++)
        //                             for (let o: number = 1; o<=9; o++)
        //                                 for (let p: number = 1; p<=9; p++)
        //                                     for (let q: number = 1; q<=9; q++){
        //                                         let tmp: number[] = [i,j,k,l,m,n,o,p,q]
        //                                         let chk: number[] = this.checkWinner(tmp)
        //                                         if(this.checkPattern(tmp)){
        //                                             this.dic[(chk[0]===1?'f':(chk[0]===2?'s':'e'))].push({move: tmp, w_length: chk[1]})
        //                                         }
        //                                     }
        // }
        // private checkPattern = (x: number[]): boolean => {
        //     const c: number[] = [0,0,0,0,0,0,0,0,0]
        //     for (let z of x) c[z-1]++
        //     for (let y of c) if (y > 1) return false
        //     return true
        // }
        this.checkWinner = function (x) {
            var f = [];
            var s = [];
            for (var i = 0; i < 9; i++) {
                if (i % 2 === 0) {
                    f.push(x[i]);
                    if (_this.isWin(f))
                        return [1, f.length];
                }
                else {
                    s.push(x[i]);
                    if (_this.isWin(s))
                        return [2, s.length];
                }
            }
            return [0, 0];
        };
        this.isWin = function (w) {
            if (w.includes(1) && w.includes(2) && w.includes(3))
                return true;
            if (w.includes(4) && w.includes(5) && w.includes(6))
                return true;
            if (w.includes(7) && w.includes(8) && w.includes(9))
                return true;
            if (w.includes(1) && w.includes(4) && w.includes(7))
                return true;
            if (w.includes(2) && w.includes(5) && w.includes(8))
                return true;
            if (w.includes(3) && w.includes(6) && w.includes(9))
                return true;
            if (w.includes(1) && w.includes(5) && w.includes(9))
                return true;
            if (w.includes(3) && w.includes(5) && w.includes(7))
                return true;
            return false;
        };
        this.isCheckArray = function (x, y) {
            var a = x.length > y.length ? x : y;
            var b = x.length <= y.length ? x : y;
            for (var i = 0; i < b.length; i++) {
                if (a[i] !== b[i])
                    return false;
            }
            return true;
        };
        this.ai_search = function (x) {
            // const p: string = x.length%2===0?'f':'s'
            var Compare = function (a, b) {
                return a[1] > b[1] ? 1 : -1;
            };
            if (x.length === 0)
                return Math.trunc(Math.random() * 9 + 1);
            for (var _i = 0, _a = _this.dic[x.length % 2 === 0 ? 'f' : 's'].sort(Compare); _i < _a.length; _i++) {
                var i = _a[_i];
                if (_this.isCheckArray(i[0], x)) {
                    return i[0][x.length];
                }
            }
            for (var _b = 0, _c = _this.dic['e'].sort(Compare); _b < _c.length; _b++) {
                var i = _c[_b];
                if (_this.isCheckArray(i[0], x)) {
                    return i[0][x.length];
                }
            }
            for (var _d = 0, _e = _this.dic[x.length % 2 !== 0 ? 'f' : 's'].sort(Compare); _d < _e.length; _d++) {
                var i = _e[_d];
                if (_this.isCheckArray(i[0], x)) {
                    return i[0][x.length];
                }
            }
            return 0;
        };
    }
    return ox_ai;
}());
exports.ox_ai = ox_ai;
/* main function */
// const ai = new ox_ai()
// ai.dic = list
// let Compare = (a: number[], b: number[]) => {
//     return a[1]>b[1]?1:-1
// }
// for (let i of ai.dic['f'].sort(Compare)){
//     console.log(i)
// }
