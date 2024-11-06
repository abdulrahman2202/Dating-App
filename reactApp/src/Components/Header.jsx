import { IconButton,Avatar } from '@mui/material';
import { Forum } from '@mui/icons-material';
import './Header.css';



export default function Header(){
    return(
        <div className="header">
            <IconButton >
                <Avatar sx={{width:56,height:56}} alt="Remy Sharp" src='https://mui.com/static/images/avatar/1.jpg' />
            </IconButton>
            <img src="/Dating.png" alt="Dating" className="header_logo" />
            <IconButton>
                <Forum />
            </IconButton>
            
        </div>
    )
}