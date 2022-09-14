import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , Link, Box} from '@mui/material';
import { NavLink } from "react-router-dom";


const CardHome = (props) => {
    return(
        <div>
            <Card  sx={{
          m: { xs: 1, sm: 5},

          textAlign: "center",
        }}>
             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                <Divider color="primary"/>
                    <Typography gutterBottom variant="h4" component="div" sx={{mt:2, }}>
                        {props.title}
                    </Typography>
                        <Divider color="primary"/>
                    <Typography sx={{mt:2, mb:2}} variant="body1"  >
                        {props.info}
                    </Typography>
                    
                    <Typography sx={{mt: 2}} variant="body1"  >
                        {props.subInfo}
                    </Typography>

                    <Link href={props.link}>{props.link}</Link>
      
                </CardContent>
                </Box>

            </Card>
        </div>
    )
}
    export default CardHome;