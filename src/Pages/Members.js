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
import CardTable from "../components/CardTable";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import BasicTable from "../components/table";

const Members = (props) => {
  return (
    <Box>
      <CardTable title="Members"

      />
    </Box>
  );
};
export default Members;
