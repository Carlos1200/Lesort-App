import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#14274E",
  },
  media: {
    width: 400,
    height: 200,
  },
  btn: {
    display: "flex",
    justifyContent: "center",
  },
  btnColor: {
    color: "#ffffff",
  },
});

const Card = () => {
  const classes = useStyles();
  return (
    <Cards className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='/img-default.jpg'
          title='Contemplative Reptile'
        />
        <CardContent>
          <h2 className='text-center text-white text-2xl'>Lizard</h2>
          <p className=' text-base text-white mt-2'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btn}>
        <Button size='large' variant='contained' color='primary'>
          Ver curso
        </Button>
      </CardActions>
    </Cards>
  );
};

export default Card;
