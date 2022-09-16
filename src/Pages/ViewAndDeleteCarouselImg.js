import React, { useEffect, useRef, useState, useContext, useCallback, } from "react";
import Typography from "@mui/material/Typography";
import {
  Container, Divider, Grid, Snackbar, Alert, Input, Box, ImageList, ImageListItem, ImageListItemBar,
  IconButton, Slide, Dialog, DialogContentText, DialogActions, DialogContent, DialogTitle,
} from "@mui/material";
import { ColorModeContext } from "../App";
import CardHome from "../components/CardHome";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Photos from "../Pages/Photos";
import { Button } from "@mui/material";
import { listAll, ref, getStorage, getDownloadURL, deleteObject } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ViewAndDeleteCarouselImg = (props) => {
  const [open, setOpen] = useState(false);
  
  const [selPhoto, setSelPhoto] = useState([]);
  let navigate = useNavigate();
  const pagesCollectionRef = collection(db, "pages");
  const storage = getStorage();
  // Points to the root reference
  const storageRef = ref(storage);
  // Points to 'images'

  const [photos, setPhotos] = useState([]);
  const photosCollectionRef = collection(db, "photos");
  const carouselPicsRef = ref(storage, "carouselPics");


  const handleClickOpen = (url) => {
    alert('This Image Will Be deleted')
    const photoRef = ref(storage, url);
    const deleteRef = ref(storage, `carouselPics/${photoRef.name}`);
    console.log(deleteRef)
    deleteObject(deleteRef)
  };

  useEffect(() => {
    listAll(carouselPicsRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPhotos((prev) => [...prev, url]);
        });
      });
    });

  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ m: 1 }}>
      <ArrowBackIcon
        sx={{
          alignItems: "stretch",
          color: "secondary.main",
        }}
        fontSize="large"
        onClick={() => navigate("/updateImages")}
      />
      <Typography>These are the images the user sees on the home page Image Carousel. When you press the delete icon you will DELETE the picture!</Typography>

      <Box sx={{ mt: 12, align: "center" }}>
        <ImageList sx={{ height: 700 }} variant="" rowHeight="200">
          {photos.map((url) => (
            <ImageListItem >
              <img
                src={`${url}?w=164&h=164&fit=crop&auto=format`}
                loading="lazy"

              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                position="top"
                actionIcon={
                  <IconButton size="large" onClick={() => handleClickOpen(url)}>
                    <DeleteIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <Snackbar open={open} onClose={handleClose} autoHideDuration={5000}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default ViewAndDeleteCarouselImg;
