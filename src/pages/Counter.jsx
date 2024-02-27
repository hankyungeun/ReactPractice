import { useState } from 'react';

function Counter(){
    const [num, setNum] = useState(1);
    const [message, setMessage] = useState('안녕');
    const [like, setLike] = useState(false);
    const [name, setName] = useState('OOO');
    const [age, setAge] = useState(20);

    function addNumber(){
        setNum(num+1);
    }

    function changeInputValue(event){
        //이벤트 객체 : event
        // 이벤트 객체가 가지고 있는 입력받은 값을 message 변수에 저장
        setMessage(event.target.value)
    }

    function changeLike(event){
        setLike(event.target.checked);
        //setLike(!like);
    }

    function addAge(){
        setAge(age+1);
    }

    function changName(event){
        setName(event.target.value)
    }
    return(
        <>
            <button onClick={addNumber}>클릭 시 증가(+1)</button>
            <div>{num}</div>
            
            <hr />
            
            <input type="text" value={message} onChange={changeInputValue}/>
            <button onClick={()=>setMessage("안녕")}>Reset</button>
            
            <hr />
            
            <input type="checkbox" checked={like} onChange={changeLike}/>
            <label>좋아요</label>
            <p>
                {/* {체크가 된 상태면, 해당 게시글을 좋아합니다.} */}
                {/* {체크가 해제된 상태면, 해당 게시글을 좋아하지 않습니다.} */}
                해당 게시글을 {like ? "좋아합니다" : "좋아하지 않습니다."}
            </p>
            
            <hr />
            
            <input type="text" name='userName' onChange={changName} />
            <button onClick={addAge}>나이 증가</button>
            <p>
                안녕하세요. {name}님 당신은 {age}살입니다.
            </p>
        </>
    )
}

export default Counter;