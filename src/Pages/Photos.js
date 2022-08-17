import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  useCallback,
} from "react";
import Typography from "@mui/material/Typography";
import {
  Container,
  Divider,
  Grid,
  Paper,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { ColorModeContext } from "../App";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Photos = (props) => {
  const [photos, setPhotos] = useState([]);
  const photosCollectionRef = collection(db, "photos");

  useEffect(() => {
    const getPhotos = async () => {
      const data = await getDocs(photosCollectionRef);
      setPhotos(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getPhotos();
  }, []);

  return (
    <Box sx={{ mt:12 , align: 'center' }}>
      <ImageList
        sx={{   height:700 ,}}
        variant=""
        
        rowHeight= '200'
        
      >
        {photos.map((photo) => (
          <ImageListItem key={photo.img} >
            <img
              src={`${photo.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${photo.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={photo.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
export default Photos;
