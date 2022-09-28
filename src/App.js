import { useState, useMemo, createContext, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import { useCookies } from "react-cookie";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
} from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import { db, storage } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "firebase/storage";
import Home from "./Pages/Home";
import Alumni from "./Pages/Alumni";
import Scholorship from "./Pages/Scholorship";
import Photos from "./Pages/Photos";
import Calander from "./Pages/Calander";
import Members from "./Pages/Members";
import UploadImgList from "./Pages/UploadImgList";
import ViewAndDeleteImgList from "./Pages/ViewAndDeleteImgList";
import ViewAndDeleteCarouselImg from "./Pages/ViewAndDeleteCarouselImg";
import UpdateCardData from "./Pages/UpdateCardData";
import SignIn from "./Pages/SignIn";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";


export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#04711c",
          },
          darkGold: {
            main: "#FFC400",
          },
          secondary: {
            main: "#ffff00",
          },
          background: {
            default: "#e6e6e6",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#47C54C",
          },
          darkGold: {
            main: "#FFC400",
          },
          secondary: {
            main: "#ffff00",
          },
          text: {
            primary: "#fff",
          },
          background: {
            default: "#303030",
            paper: "#424242",
          },
        }),
  },
});

function App() {
  const [mode, setMode] = useState("light");
  const [cookies, setCookie] = useCookies(["mode"]);
  const pages = collection(db, "pages");


  useEffect(() => {
    const getPages = async () => {
      const data = await getDocs(pages);
      console.log(data);
    };
    getPages();
  });

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          setCookie("mode", prevMode === "light" ? "dark" : "light");
          return prevMode === "light" ? "dark" : "light";
        });
      },
    }),
    []
  );

  useEffect(() => {
    if (cookies.mode) {
      setMode(cookies.mode);
    }

  }, []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container sx={{ mt: 10 }}>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/SignIn" element={<SignIn />} />

              <Route path="/alumni" element={<Alumni />} />

              <Route path="/scholorship" element={<Scholorship />} />

              <Route path="/photos" element={<Photos />} />


              <Route path="/members" element={<Members />} />
                    
              <Route path="/updateImages" element={
              <PrivateRoute>
              <UploadImgList />
              </PrivateRoute>} />
                    
              <Route path="/ViewAndDeleteImgList" element={
              <PrivateRoute><ViewAndDeleteImgList /></PrivateRoute>} />

              <Route path="/ViewAndDeleteCarouselImg" element={<PrivateRoute><ViewAndDeleteCarouselImg /></PrivateRoute>} />
              
              <Route path="/UpdateCardData" element={<PrivateRoute><UpdateCardData /></PrivateRoute>} />

              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </main>
        </Container>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
