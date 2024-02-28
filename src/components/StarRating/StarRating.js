import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating/Rating.js";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography/Typography.js";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#bc89de",
  },
  "& .MuiRating-iconHover": {
    color: "#9447c7",
  },
});

export default function StarRating() {
  return (
    <Box
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
    </Box>
  );
}
