import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { red } from "@material-ui/core/colors";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState({
    users: []
  });

  const useStyles = makeStyles({
    root: {
      maxWidth: 200,
      minWidth: 200,
      maxHeight: 345,
      margin: "2%",
      padding: "1%"
    },
    list: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      margin: "2%"
    },
    media: {
      height: 140
    },
    avatar: {
      backgroundColor: red[500]
    }
  });
  const classes = useStyles();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData({
        users: result.data
      });
    };
    fetchData();
  }, []);

  return (
    <div className={classes.list}>
      {data.users.map((item, i) => (
        <Card key={i} className={classes.root}>
          <CardActionArea>
            <Avatar aria-label="recipe" className={classes.avatar}>
              {item.name.charAt(0)}
            </Avatar>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.phone}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              // onClick={() => {
              //   history.push(match.url + "/" + item.id);
              // }}
            >
              {/* Show More Details */}

              <Link
                to={{
                  pathname: `users/${item.id}`,
                  state: {
                    user: item
                  }
                }}
              >
                Show More Details
              </Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
