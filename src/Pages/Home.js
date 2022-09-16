import React, { useEffect, useRef, useState, useContext, useCallback} from "react";
import Typography from '@mui/material/Typography';
import { Container, Divider, Grid, Paper, ListItem , ListItemText, Box} from "@mui/material";
import { ColorModeContext } from '../App'
import CardHome from '../components/CardHome'
import {collection , doc, getDocs} from "firebase/firestore"; 
import {db} from '../firebase-config'
import Carousel from 'react-material-ui-carousel'
import {Button } from '@mui/material'
import { getStorage, ref, listAll , getDownloadURL } from "firebase/storage";


const Home = (props) => {
    const [pages, setPages] = useState([]);
    const pagesCollectionRef = collection(db, "pages");
    const storage = getStorage();
    const [photos, setPhotos] = useState([]);
// Points to the root reference
const storageRef = ref(storage);

// Points to 'images'
const imageListRef = ref(storage, "imageList");



    useEffect(() => {
        const getPages = async () => {
            const data = await getDocs(pagesCollectionRef);
            setPages(data.docs.map((doc) => ({ ...doc.data() })));

        }

        getPages();

        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
              getDownloadURL(item).then((url) => {
                setPhotos((prev) => [...prev, url]);
              });
            });
          });
    }, [])



    return (

        <Box>
           <Container maxWidth="lg">
            <Box sx={{maxHeight:{xs:250,sm:350, md:450}}}>
             <Carousel
              sx={{maxHeight:{xs:250,sm:350, md:450}}}
            //className="slider"
             animation={'slide'}
             duration={400}
             navButtonsAlwaysVisible={'true'}
             >

            {
                photos.map( (url) => 
               <div className="slider">
                <img   
                className='img'
                src={`${url}`}
                 />
                 </div>
                 )
            }
                </Carousel>
            </Box>
            </Container>
           
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
        </Box>
    );

}
export default Home;