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
  Snackbar,
  Alert,
  Input,
  Box,
} from "@mui/material";
import { ColorModeContext } from "../App";
import CardHome from "../components/CardHome";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { Button } from "@mui/material";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import {  useNavigate } from "react-router-dom";
import {auth} from "../firebase-config"


const UploadImgList = (props) => {
  const [imgUpload, setImgUpload] = useState(null);
  let navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const pagesCollectionRef = collection(db, "pages");
  const storage = getStorage();
  // Points to the root reference
  const storageRef = ref(storage);
  // Points to 'images'


  const handleClose = () => {
    setOpen(false);
  };

  const uploadImageToPhotos = () => {
    if (imgUpload == null) return;
    const imagesRef = ref(storage, `imageList/${imgUpload.Name + v4()}`);
    uploadBytes(imagesRef, imgUpload).then(() => {
      setOpen(true);
    });
  };

  const uploadImageToCarousel = () => {
    if (imgUpload == null) return;
    const imagesRef = ref(storage, `carouselPics/${imgUpload.Name + v4()}`);
    uploadBytes(imagesRef, imgUpload).then(() => {
      setOpen(true);
    });
  };


  return (
    <Box sx={{ m: 5 }}>
      <Input
        sx={{ m: 2 }}
        type="file"
        onChange={(event) => {
          setImgUpload(event.target.files[0]);
        }}
      />
      <Button
        onClick={uploadImageToPhotos}
        sx={{m:2}}
        // variant="Contained"
      >
        Upload Image To Photos Tab
      </Button>

      <Button
        onClick={() => navigate('/ViewAndDeleteImgList')}
        sx={{m:2}}
        // variant="Contained"

      >
       View and Delete Images To Photos Tab
      </Button>

      <Button
        onClick={uploadImageToCarousel}
        sx={{m:2}}
        // variant="Contained"
      >
        Upload Image To Home Carousel Tab
      </Button>

      <Button
        onClick={() => navigate('/ViewAndDeleteCarouselImg')}
        sx={{m:2}}
        // variant="Contained"

      >
       View and Delete Images To Image Carousel
      </Button>
      

      <Snackbar open={open} onClose={handleClose} autoHideDuration={5000}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default UploadImgList;
