import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { MyMUIData } from './myMUIData.tsx'

const Text=styled.div`
    padding-left:10px;
    padding-right:20px;
`;
export function MUIDemo(){
    return(
        <Box
            sx={{
                width:'200px',
                height:'400px',
                boxShadow:'2',
                margin:'10px',
                bgcolor:'rebeccapurple',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <img src="client-photo.png" alt="client-photo" width='200px' height='100px'/>
            <Text>
                Lorem, ipsum dolor sit amet explicabo itaque? Incidunt.
            </Text>
            <MyMUIData/>
        </Box>
    )
}