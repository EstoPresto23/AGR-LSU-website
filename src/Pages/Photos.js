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
import {listAll, ref, getStorage, getDownloadURL } from "firebase/storage"
import { db } from "../firebase-config";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Photos = (props) => {
  const [photos, setPhotos] = useState([]);
  const photosCollectionRef = collection(db, "photos");
  const storage = getStorage();
  const imageListRef = ref(storage, 'imageList')
  


  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPhotos((prev) => [...prev, url])
        })
      })
    })
  }, []);


  return (
    <Box sx={{ mt:12 , align: 'center' }}>
      <ImageList
        sx={{   height:700 ,}}
        variant=""
        
        rowHeight= '200'
        
      >
        {photos.map((url) => (
          <ImageListItem >
            <img
              src={`${url}?w=164&h=164&fit=crop&auto=format`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
export default Photos;
