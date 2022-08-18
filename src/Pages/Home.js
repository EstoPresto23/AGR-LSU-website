import React, { useEffect, useRef, useState, useContext, useCallback} from "react";
import Typography from '@mui/material/Typography';
import { Container, Divider, Grid, Paper, ListItem , ListItemText, Box} from "@mui/material";
import { ColorModeContext } from '../App'
import CardHome from '../components/CardHome'
import {collection , doc, getDocs} from "firebase/firestore"; 
import {db} from '../firebase-config'
import Carousel from 'react-material-ui-carousel'
import {Button } from '@mui/material'



const Home = (props) => {
    const [pages, setPages] = useState([]);
    const pagesCollectionRef = collection(db, "pages");
    


    useEffect(() => {
        const getPages = async () => {
            const data = await getDocs(pagesCollectionRef);
            setPages(data.docs.map((doc) => ({ ...doc.data() })));
        }

        getPages();
    }, [])

    return (
        <Box>
           
            {pages.sort((a, b) => a.id > b.id ? 1 : -1 )
                .map((page) => {
                return(
                    
                     <CardHome
                     title={page.title}
                     info={page.body}
                    />
                    
                  
                );
            })}
       
        </Box>
    );

}
export default Home;