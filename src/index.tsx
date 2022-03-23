import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {ox_ai} from './ox_game'
import {list} from './list'

const App = () => {
    const [move, setMove] = useState<number[]>([])
    const [config, setConfig] = useState('black')
    const [flag, setFlag] = useState(0)

    const [ox1, setOx1] = useState('')
    const [ox2, setOx2] = useState('')
    const [ox3, setOx3] = useState('')
    const [ox4, setOx4] = useState('')
    const [ox5, setOx5] = useState('')
    const [ox6, setOx6] = useState('')
    const [ox7, setOx7] = useState('')
    const [ox8, setOx8] = useState('')
    const [ox9, setOx9] = useState('')

    const [comment, setComment] = useState('「開始」ボタンを押してください')

    let ai = new ox_ai()
    ai.dic = list

    const handleClick = (n: number) => {
        let newMove: number[] = move

        if(flag === 1 && checkMove(n)){
            newMove.push(n)
            setMove(newMove)
            onMark(n)
            if(ai.checkWinner(newMove)[0] === 1){
                setComment('先手の勝ちです。')
                setFlag(0)
            }
            else if(ai.checkWinner(newMove)[0] === 2){
                setComment('後手の勝ちです。')
                setFlag(0)    
            }
            else if(newMove.length === 9){
                setComment('引き分けです。')
                setFlag(0)                   
            }
        }

        const s = ai.ai_search(newMove)

        if(flag === 1 && checkMove(s)){
            newMove.push(s)
            setMove(newMove)
            onMark(s)
            if(ai.checkWinner(newMove)[0] === 1){
                setComment('先手の勝ちです。')
                setFlag(0)
            }
            else if(ai.checkWinner(newMove)[0] === 2){
                setComment('後手の勝ちです。')
                setFlag(0)    
            }
            else if(newMove.length === 9){
                setComment('引き分けです。')
                setFlag(0)                   
            }
        }
    }

    const checkMove = (n: number): boolean => {
        for (let i of move){
            if(i === n) return false
        }
        return true
    }

    const onMark = (n: number): void => {
        let ox = move.length%2===0?'o':'x'
        switch(n){
            case 1:
                setOx1(ox)
                break
            case 2: 
                setOx2(ox)
                break
            case 3:
                setOx3(ox)
                break
            case 4:
                setOx4(ox)
                break
            case 5:
                setOx5(ox)
                break
            case 6:
                setOx6(ox)
                break
            case 7:
                setOx7(ox)
                break
            case 8:
                setOx8(ox)
                break
            case 9:
                setOx9(ox)
                break
        }
    }

    const handleChange = (e: any) => {
        setConfig(e)
    }

    const gameInit = () => {
        setFlag(1)
        setMove([])
        setOx1('')
        setOx2('')
        setOx3('')
        setOx4('')
        setOx5('')
        setOx6('')
        setOx7('')
        setOx8('')
        setOx9('')
        setComment('さあ始めましょう。')
        if (config === 'white'){
            console.log(move.length)
            console.log(move)
            const newMove: number[] = []
            const s = ai.ai_search(newMove)
            newMove.push(s)
            setMove(newMove)
            onMark(s)
        }
    }

    return (
        <>
            <h1 className="flex justify-center m-2">OXゲーム</h1>
            <div className="container mx-auto h-64 w-64 grid grid-rows-3 grid-flow-col gap-1">
                <div className="bg-gray-100 text-2xl h-20 w-20 text-center px-4 py-6" onClick={() => handleClick(1)}>{ox1}</div>
                <div className="bg-gray-100 text-2xl h-20 w-20 text-center px-4 py-6" onClick={() => handleClick(4)}>{ox4}</div>
                <div className="bg-gray-100 text-2xl h-20 w-20 text-center px-4 py-6" onClick={() => handleClick(7)}>{ox7}</div>
                <div className="bg-gray-100 text-2xl h-20 w-20 text-center px-4 py-6" onClick={() => handleClick(2)}>{ox2}</div>
                <div className="bg-gray-100 text-2xl h-20 w-20 text-center px-4 py-6" onClick={() => handleClick(5)}>{ox5}</div>
                <div className="bg-gray-100 text-2xl h-20 w-20 text-center px-4 py-6" onClick={() => handleClick(8)}>{ox8}</div>
                <div className="bg-gray-100 text-2xl h-20 w-20 text-center px-4 py-6" onClick={() => handleClick(3)}>{ox3}</div>
                <div className="bg-gray-100 text-2xl h-20 w-20 text-center px-4 py-6" onClick={() => handleClick(6)}>{ox6}</div>
                <div className="bg-gray-100 text-2xl h-20 w-20 text-center px-4 py-6" onClick={() => handleClick(9)}>{ox9}</div>
            </div>
            <div className="flex justify-center m-2 text-sm flex items-center">
                <label className="mx-2"><input type="radio" value="black" onChange={() => handleChange('black')} checked={config === 'black'} />先手</label>
                <label className="mx-2"><input type="radio" value="white" onChange={() => handleChange('white')}  checked={config === 'white'}/>後手</label>
                <button className="bg-gray-400 px-1 text-white" onClick={gameInit}>開始</button>
            </div>
            <hr />
            <div className="flex justify-center m-2">
                {comment}
            </div>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
