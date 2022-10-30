import React from "react";
import Arrow from "../SVG/Arrow";
import Card from "./Card";
import classes from "./GallaryCard.module.css";

const GallaryCard = (props) => {
  const cardImage = {
    opacity: props.content.courseImage ? 0.6 : 0.12,
  };

  return (
    <div onClick={props.onToggleModal}>
      <Card className={classes["gallar-card-container"]}>
        <div className={classes['gallary-image--container']}>
          <img
            className={classes["gallary-image"]}
            style={cardImage}
            src={`${
              process.env.PUBLIC_URL +
              `${
                props.content.courseImage
                  ? props.content.courseImage
                  : "./placeholderImage-3.svg"
              }`
            }`}
            alt="תמונה של המסלול"
            loading="lazy"
          ></img>
        </div>
        <h3 className={`cartTitle ${classes.h3}`}>
          {props.content.courseName}
        </h3>
        <div className={classes["text-area"]}>
          <p className={`text ${classes.text}`}>{props.content.text}</p>
        </div>
        <Arrow className={classes.icon}/>
      </Card>
    </div>
  );
};

export default GallaryCard;
