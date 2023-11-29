import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import './CardsStyle.css';
//For using image in react project that is locally availabel in machine first we need to import that image in top of the component with proper path
//then it will allow to use that image in the working directory
import electronics from "../../images/electronics-store-image.jpg";
import laptopIMG from "../../images/Laptop_img.jpg";
import MobileIMG from "../../images/Mobile_img.jpg";
import LedTVIMG from "../../images/LEDTV_img.png";
import RefrigeratorIMG from "../../images/Refrigerator_img.png";
export const HomePage = () => {


  return (
    <div>
      
      <div className="Cardcontainer">
        <img style={{ width: "100%" }} src={electronics} alt="" />
        <div class="top-left">
          <h1>My electronics, Start visit now...</h1>
        </div>
      </div>

      <h3>
        We love to offer different different kind of electronics gadgets for you
      </h3>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col">
            <Card>
              <CardActionArea>
                <CardMedia>
                  <img
                    style={{ width: "300px", height: "300px" }}
                    src={MobileIMG}
                    alt=""
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          <div className="col">
            <Card>
              <CardActionArea>
                <CardMedia>
                  <img
                    style={{ width: "300px", height: "300px" }}
                    src={laptopIMG}
                    alt=""
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          <div className="col">
            <Card>
              <CardActionArea>
                <CardMedia>
                  <img
                    style={{ width: "300px", height: "300px" }}
                    src={LedTVIMG}
                    alt=""
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          <div className="col">
            <Card>
              <CardActionArea>
                <CardMedia>
                  <img
                    style={{ width: "300px", height: "300px" }}
                    src={RefrigeratorIMG}
                    alt=""
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
// Hello H i am Akhilesh here can you guess me is that only this one is Akhilesh