import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea , Link} from '@mui/material';
import { NavLink } from "react-router-dom";
import BasicTable from "./table"

const CardTable = (props) => {
    return(
        <div>
            <Card  sx={{
          m: { xs: 1, sm: 5},

          textAlign: "center",
        }}>
                <CardContent>
                <Divider color="primary"/>
                    <Typography gutterBottom variant="h4" component="div" sx={{mt:2, }}>
                        {props.title}
                    </Typography>
                        <Divider color="primary"/>
                        <BasicTable></BasicTable>
      
                </CardContent>
            </Card>
        </div>
    )
}
    export default CardTable;