import React, { useEffect, useRef, useState, useContext, useCallback} from "react";
import Typography from '@mui/material/Typography';
import { Container, Divider, Grid, Paper, ListItem , ListItemText, Box, TextField} from "@mui/material";
import { ColorModeContext } from '../App'
import CardHome from '../components/CardHome'
import {collection , doc, getDocs , updateDoc} from "firebase/firestore"; 
import {db} from '../firebase-config'
import Carousel from 'react-material-ui-carousel'
import {Button } from '@mui/material'
import { getStorage, ref, listAll , getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import '../App.css'

const UpdateCardData = (props) => {
  let navigate = useNavigate()
    const [pages, setPages] = useState([]);
    const [updateRef, setupdateRef] = useState();
    const [updateFieldName, setupdateFieldName] = useState();

    const pagesCollectionRef = collection(db, "pages");
    const storage = getStorage();
    const ourMissonRef = doc(db, "pages", "ourMission");
    const historyRef = doc(db, "pages", "history");
    const philanthropyRef = doc(db, "pages", "philanthropy");
    const alumniRef = doc(db, "alumni", "alumni");
    const freshmanScholarshipRef = doc(db, "scholarship", "freshmanScholarship");
    const scholarshipRef = doc(db, "scholarship", "scholarship");

    useEffect(() => {
        const getPages = async () => {
            const data = await getDocs(pagesCollectionRef);
            setPages(data.docs.map((doc) => ({ ...doc.data() })));

        }

        getPages();
    }, [])


   async function updateDocData(){
      const value = document.getElementById(updateFieldName).value
      if(value == ""){
        return
      }else{
        await updateDoc(updateRef, {
            body: document.getElementById(updateFieldName).value
        });
        console.log('updated')
       navigate('/')
      }
   }

   async function updateAlumniEventsData(){
    const value = document.getElementById(updateFieldName).value
    if(value == ""){
      return
    }else{
      await updateDoc(updateRef, {
          events: document.getElementById(updateFieldName).value
      });
      console.log('updated')
     navigate('/')
    }
 }



    return (
        <Box  
        sx={{mt:12}}
        >
             <Container maxWidth="lg">
             < Typography variant="h6" 
       sx={{m:1}}> DOUBLE CLICK UPDATE INFO TO UPDATE THE WEBSITE</Typography>
       < Typography variant="h6" 
       sx={{m:1}}> Update Our Mission</Typography>
          <TextField
          fullWidth
          id="updateMission"
          name="Update Our Mission"
          label="Type New Data Here"
          placeholder="Type New Data Here"
          multiline
        />
        <Button
        variant = "contained"
        sx={{mt:1}}
        onClick={() => {
              setupdateFieldName('updateMission')
              setupdateRef(ourMissonRef)
              updateDocData()
        }}
        
        > 
            Update Info
        </Button>
        {/* "The purpose of Alpha Gamma Rho is "to make better men." We achieve this goal through academics, social events, and in being a professional fraternity. In fact, we are the only social and professional fraternity at LSU. AGR is similar to other social fraternities in that it has a strong group of members and an on-campus house in which members can live during their college years. Our members also enjoy socials and exchanges with other Greek organizations. However, AGR offers more than just the social aspect; it is also a professional fraternity. All members of AGR have career interests related to our fraternity’s values, which is beneficial when seeking a job or internship. We also take pride in the traditions handed down to us from our many great alumni. This tradition includes, but is not limited to, an interest in agriculture, a love for your brother and your community, and a strong desire to make yourself the best person you can be." */}



< Typography variant="h6" 
       sx={{m:1, mt:2}}> Update History of Alpha Gamma Rho</Typography>
          <TextField
          fullWidth
          id="updateHistoryofAlphaGammaRho"
          label="Type New Data Here"
          placeholder="Type New Data Here"
          multiline
        />
        <Button
        variant = "contained"
        sx={{mt:1}}
        onClick={() => {
              setupdateFieldName('updateHistoryofAlphaGammaRho')
              setupdateRef(historyRef)
              updateDocData()
        }}
        
        > 
            Update Info
        </Button>
        {/* The history of Alpha Gamma Rho began at Ohio State University in 1904. Since then, the fraternity has grown to 71 chapters nation-wide in nearly 50 states. Over 100 years of history reflects the character of the organization today: friends coming together from various walks of life, finding common interests and a common cause, and pursuing a passion for bettering themselves and the industry that they love. Here at LSU, the Alpha Epsilon chapter chartered in 1926 as the first Agricultural fraternity, and also the first professional and social fraternity on campus. In 1971, we purchased 17 Dalrymple Dr., which was previously the Sigma Nu house. Alpha Epsilon remained there until 2012, when we sold the house to Delta Chi. We then purchased 3980 W. Lakeshore Dr., a home formerly inhabited by Alpha Omicron Pi sorority. Our new house, which was three times the size of the old one, had been vacant for years and needed some remodeling. However, it is now the most impressive fraternity house at LSU. Here on "Sorority Row", we are constantly improving our chapter, and we invite you to join in our success. */}


< Typography variant="h6" 
       sx={{m:1, mt:2}}> Update Philanthropy</Typography>
          <TextField
          fullWidth
          id="Update Philanthropy"
          label="Type New Data Here"
          placeholder="Type New Data Here"
          multiline
        />
        <Button
        variant = "contained"
        sx={{mt:1}}
        onClick={() => {
              setupdateFieldName('Update Philanthropy')
              setupdateRef(philanthropyRef)
              updateDocData()
        }}
        > 
            Update Info
        </Button>
        {/* Alpha Gamma Rho fraternity partnered with 4-H and the Louisiana Cattlemen’s Association to host the first annual Bar-B-Que cook-off on April 5, 2014. During the “Alpha Gamma Rhoast Off”, which was held at the LSU Dairy Farm, we raised money to benefit the Louisiana 4-H Foundation. The 4-H Foundation supports various aspects of the Louisiana 4-H program, such as scholarships, Camp Grant Walker, the 4-H Youth Development Program. Our philanthropic event was a great success with tremendous support from the agricultural community. ​ For the past two years, Alpha Gamma Rho has held its annual Movember Cook Off. The sorority that donates the most money wins a cook out held by the men of AGR at the fraternity house. With a wide assortment of food, there isn't anything you wouldn't like. All the proceeds from this fundraiser go toward the Testicular Cancer Society in hopes of furthering research and treatment. */}



< Typography variant="h6" 
       sx={{m:1, mt:2}}> Update Alumni Body</Typography>
          <TextField
          fullWidth
          id="Update Alumni Body"
          label="Type New Data Here"
          placeholder="Type New Data Here"
          multiline
        />
        <Button
        variant = "contained"
        sx={{mt:1}}
        onClick={() => {
              setupdateFieldName('Update Alumni Body')
              setupdateRef(alumniRef)
              updateDocData()
        }}
        > 
            Update Info
        </Button>
        {/* AGR fosters continuing growth through the help of our great Alumni. With some of the best Greek alumni in the nation, we can continue to grow and give back to our founders. We hold Homecoming, Founders Day and a Crawfish Boil each year for our Alumni to come back and enjoy the company of their brothers and get to know some new faces. The dates of the next events are as follows: */}
        
< Typography variant="h6" 
       sx={{m:1, mt:2}}> Update Alumni Events</Typography>
          <TextField
          fullWidth
          id="Update Alumni Events"
          label="Type New Data Here"
          placeholder="Type New Data Here"
          multiline
        />
        <Button
        variant = "contained"
        sx={{mt:1}}
        onClick={() => {
              setupdateFieldName('Update Alumni Events')
              setupdateRef(alumniRef)
              updateAlumniEventsData()
        }}
        > 
            Update Info
        </Button>
        {/* Alumni Crawfish Boil: TBA , ​ Founders Day: TBA , ​ Homecoming: TBA , ​ Alumni, please contact Stephen Rioux for more information or any questions: (512) 366-2058 */}

< Typography variant="h6" 
       sx={{m:1, mt:2}}> Update Scholarship Info</Typography>
          <TextField
          fullWidth
          id="Update Scholarship Info"
          label="Type New Data Here"
          placeholder="Type New Data Here"
          multiline
        />
        <Button
        variant = "contained"
        sx={{mt:1}}
        onClick={() => {
              setupdateFieldName('Update Scholarship Info')
              setupdateRef(scholarshipRef)
              updateDocData()
        }}
        > 
            Update Info
        </Button>
        
< Typography variant="h6" 
       sx={{m:1, mt:2}}> Update Freshman Scholarship Info</Typography>
          <TextField
          fullWidth
          id="Update Freshman Scholarship Info"
          label="Type New Data Here"
          placeholder="Type New Data Here"
          multiline
        />
        <Button
        variant = "contained"
        sx={{mt:1}}
        onClick={() => {
              setupdateFieldName('Update Freshman Scholarship Info')
              setupdateRef(freshmanScholarshipRef)
              updateDocData()
        }}
        > 
            Update Info
        </Button>
        {/* Every Fall Alpha Epsilon chapter of LSU offers two $1000 dollar scholarships to two outstanding freshman entering LSU. There is a short application that anyone is able to apply and a short phone or in person interview that allows participation. It is very easy and a great opportunity to earn some money and learn a little about our organization. Here is a link to our short $1000 Freshman Scholarship application: */}

        </Container>
        </Box>
    );

}
export default UpdateCardData;