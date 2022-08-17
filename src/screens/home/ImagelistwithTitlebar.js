import React from 'react';
import {createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
    },


  }),
);


export default function ImagelistwithTitlebar(props) {
  const classes = useStyles();
  const itemData = props.itemData;
  var release_date = new Date("2010-07-16T00:00:00+05:30");

  console.log(release_date.toDateString());
  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={3} style={{ height: 'auto' }}>

        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.poster_url}>
            <img className="image-list" src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Release Date: {(new Date(item.release_date)).toDateString()}</span>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}