import { useLoaderData, useLocation } from "react-router-dom";
import { Box, List, ListItem } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

function CardPage() {
  const data = useLoaderData();

  return (
    <>
      <Grid sx={{ pt: 4 }} container spacing={2} columns={12}>
        <Grid xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              maxHeight: "100%",
            }}
          >
            <img
              style={{
                textAlign: "center",
                maxHeight: "600px",
                maxWidth: "100%",
              }}
              src={data.card.images[0].url}
              alt={data.card.images[0].name}
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid
          sx={{
            p: 5,
          }}
          xs={12}
          md={6}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                pb: "20%",
              }}
            >
              <List
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {data.card.interests.map((int, i) => (
                  <ListItem
                    sx={{
                      backgroundColor: "rgba(215, 112, 229, 0.2)",
                      borderRadius: "20px",
                      color: "#D770E5",
                      mr: "5px",
                    }}
                    key={i}
                  >
                    <Typography variant="h6" component="div">
                      {int.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: "20px",
                }}
                variant="h4"
                component="div"
              >{`${data.card.price} ETH`}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography gutterBottom variant="h3" component="div">
                {data.card.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.card.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default CardPage;
