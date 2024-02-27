import HItem from "../components/HItem";
function HobbyList(){
    
    // function hItem(value, isChecked){
    //     return (
    //         <li>{value} {isChecked && 'v'}</li>
    //     )
    // }
    return (
        <div>
            <h3>취미 리스트</h3>
            <ul>
                <HItem value={"등산"} isChecked={true}/>
                <HItem value={"드라마 보기"} isChecked={true}/>
                <HItem value={"게임"} />
                <HItem value={"요리"} />
            </ul>
        </div>
    );
}

export default HobbyList;