import React from "react";
import PropTypes from "prop-types";
import { getMenu } from "utils/dishes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import NextIcon from "public/icons/next.png";
import Divider from "@mui/material/Divider";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const RenderItem = ({ item }) => {
  const router = useRouter();
  return (
    !item.isBoard && (
      <Box
        sx={{
          marginVertical: 2,
          padding: 2,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "#000",
            fontSize: 16,
            marginBottom: 1,
            fontFamily: "PoppinsSemiBoldItalic",
          }}
        >
          {item.name}
        </Typography>
        <Grid container sx={{ position: "relative" }}>
          <Grid item xs={12}>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                textAlign: "center",
                color: "#9e9e9e",
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                fontSize: 12,
                fontFamily: "OpenSansRegular",
                paddingRight: "25px",
              }}
            >
              {item.description}
            </Typography>
          </Grid>
          <Image
            src={NextIcon}
            alt="Next Icon"
            height={25}
            width={25}
            onClick={() => {
              router.push(`/dish?id=${item.id}`);
            }}
            style={{ position: "absolute", right: "-2px", bottom: "20px" }}
          />
          <Grid item xs={6} style={{ marginTop: "15px" }}>
            <Typography
              component="div"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                color: "#000",
                fontSize: 12,
                fontFamily: "PoppinsMedium",
                paddingLeft: 4,
              }}
            >
              {item.callories} kCal
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: "#000",
              fontSize: 12,
              marginTop: 5,
              fontFamily: "PoppinsMedium",
              paddingRight: 30,
              marginTop: "15px",
            }}
          >
            ${item?.price?.toFixed(2)}{" "}
            {item.category === "Cortes Prime" ? "Oz" : null}
          </Grid>
        </Grid>
        <Divider
          sx={{
            backgroundColor: "#dddddd",
            marginTop: 1,
            height: 2,
            width: 297,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </Box>
    )
  );
};

const ListCards = ({ id, filteredDishes }) => {
  const dishes = getMenu(id);

  return (
    <>
      {filteredDishes.length > 0
        ? filteredDishes.map((dish) => (
            <RenderItem key={dish.name} item={dish} />
          ))
        : dishes.map((dish) => <RenderItem key={dish.name} item={dish} />)}
    </>
  );
};

export default ListCards;
