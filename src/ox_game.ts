// import {list} from './list'

export class ox_ai{
    public dic: any

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

    public checkWinner = (x: number[]): number[] => {
        const f: number[] = []
        const s: number[] = []
    
        for (let i: number = 0; i<9; i++){
            if(i % 2 === 0){
                f.push(x[i])
                if(this.isWin(f)) return [1, f.length]
            }
            else{
                s.push(x[i])
                if(this.isWin(s)) return [2, s.length]
            }
        }
        return [0, 0]
    }

    private isWin = (w: number[]): boolean => {
        if(w.includes(1) && w.includes(2) && w.includes(3)) return true
        if(w.includes(4) && w.includes(5) && w.includes(6)) return true
        if(w.includes(7) && w.includes(8) && w.includes(9)) return true
        if(w.includes(1) && w.includes(4) && w.includes(7)) return true
        if(w.includes(2) && w.includes(5) && w.includes(8)) return true
        if(w.includes(3) && w.includes(6) && w.includes(9)) return true
        if(w.includes(1) && w.includes(5) && w.includes(9)) return true
        if(w.includes(3) && w.includes(5) && w.includes(7)) return true
        return false
    }

    private isCheckArray = (x: number[], y: number[]): boolean => {
        const a = x.length>y.length?x:y
        const b = x.length<=y.length?x:y

        for (let i:number = 0; i<b.length; i++){
            if(a[i] !== b[i]) return false
        }
        return true
    }

    public ai_search = (x: number[]): number => {
        // const p: string = x.length%2===0?'f':'s'

        let Compare = (a: number[],b: number[]) => {
            return a[1]>b[1]?1:-1
        }

        if(x.length === 0) return Math.trunc(Math.random()*9+1)

        for (let i of this.dic[x.length%2===0?'f':'s'].sort(Compare)){
            if(this.isCheckArray(i[0], x)){
                return i[0][x.length]
            }
        }
        for (let i of this.dic['e'].sort(Compare)){
            if(this.isCheckArray(i[0], x)){
                return i[0][x.length]
            }           
        }
        for (let i of this.dic[x.length%2!==0?'f':'s'].sort(Compare)){
            if(this.isCheckArray(i[0], x)){
                return i[0][x.length]
            }
        }
        return 0
    }
}

/* main function */
// const ai = new ox_ai()
// ai.dic = list


// let Compare = (a: number[], b: number[]) => {
//     return a[1]>b[1]?1:-1
// }
// for (let i of ai.dic['f'].sort(Compare)){
//     console.log(i)
// }