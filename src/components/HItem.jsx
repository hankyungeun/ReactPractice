// 컴포넌트 명은 Pascal 표기법(대문자로 시작)
function HItem({value, isChecked}){
    return(
        <li>{value}{isChecked && 'v'}</li>
    )
}
export default HItem;