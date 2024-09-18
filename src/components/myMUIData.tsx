import styled from "@emotion/styled"

const MUIData=styled.div`
    width:100px;
    height:100px;
    background-color:red;
    color:white;
`
export function MyMUIData(){
    return(<>
        <MUIData>This is another imported data for mui</MUIData>
    </>)
}