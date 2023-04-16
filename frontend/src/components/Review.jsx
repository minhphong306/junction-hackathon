import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";

function Review() {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      avatar: "https://picsum.photos/id/1015/50/50",
      rating: 2,
      comment:
        "Phishing websites often have URLs that look similar to legitimate websites but with slight variations, such as misspellings or extra words.",
    },
    {
      id: 2,
      name: "Jane Doe",
      avatar: "https://picsum.photos/id/1012/50/50",
      rating: 1,
      comment:
        "Phishing websites may ask for personal information, such as passwords or credit card numbers, which legitimate websites would not ask for.",
    },
    {
      id: 3,
      name: "James Lee",
      avatar: "https://picsum.photos/id/1027/50/50",
      rating: 2,
      comment:
        "Phishing websites may have poor website design with broken links or images, low-quality graphics, and poor spelling and grammar.",
    },
  ];

  return (
    <Box p={5}>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h5">Community report</Typography>
        <Box ml={2}>
          <Rating name="read-only" value={1.5} readOnly />
        </Box>
      </Box>
      <Typography variant="subtitle1">
        {reviews.length} reviews by users
      </Typography>
      {reviews.map((review) => (
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #e4e4e4",
            p: 3,
            m: 5,
          }}
          key={review.id}
          display="flex"
          alignItems="center"
          mt={2}
        >
          <Avatar src={review.avatar} alt={review.name} />
          <Box ml={2}>
            <Typography variant="subtitle1">{review.name}</Typography>
            <Rating name="read-only" value={review.rating} readOnly />
            <Typography variant="body1">{review.comment}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Review;
