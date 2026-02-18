import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating/Rating.js";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import Typography from "@mui/material/Typography/Typography.js";

// const StyledRating = styled(Rating)({
//   "& .MuiRating-iconFilled": {
//     color: "#bc89de",
//   },
//   "& .MuiRating-iconHover": {
//     color: "#9447c7",
//   },
// });

function StarRating({ label, rating, setRating }) {
  return (
    //new stuff is div, label, Rating
    <div className="star-rating">
      <label>{label}</label>
      <Rating
        name="customized-color"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        emptyIcon={<FavoriteBorderIcon />}
        icon={<FavoriteIcon />}
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#bc89de", // Custom filled heart color
          },
          "& .MuiRating-iconEmpty": {
            color: "#9447c7", // Custom empty heart color
          },
        }}
      />

      {/* <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Rate your book!</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Box> */}
    </div>
  );
}

export default StarRating;
