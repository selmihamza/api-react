import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { red } from "@material-ui/core/colors";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { CardHeader } from "@material-ui/core";

export default function UserDetails(props) {
  const useStyles = makeStyles({
    root: {
      width: 500,
      height: 350,
      margin: "2%",
      padding: "1%"
    },
    list: {
      display: "flex",
      justifyContent: "space-around"
    },
    media: {
      height: 140
    },
    avatar: {
      backgroundColor: red[500]
    }
  });
  const classes = useStyles();

  const { user } = props.location.state;

  return (
    <div className={classes.list}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {user.name.charAt(0)}
              </Avatar>
            }
            title={user.username}
            subheader={user.email}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              name : {user.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              phone : {user.phone}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              address : {user.address.street}
              {user.address.city}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              webSite : {user.website}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Company : {user.company.name}
              <br />
              {user.company.catchPhrase}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {/* Print */}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
