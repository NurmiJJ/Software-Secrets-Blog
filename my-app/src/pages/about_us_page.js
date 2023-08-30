import * as React from 'react';
import { Typography } from "@mui/material";

import ComparisonDiagram from '../components/navigation/comparison';
import about_us_banner from '../images/about_us_banner.jpg';
import Person from '../components/about_me/about_me.js';

const info_text = "On this page you can find information about us. Feel free to contact us!"

function About() {

  setTimeout(() => {
    document.getElementById('banner_image').src = about_us_banner;
    document.getElementById("banner-header").innerHTML = '';
  }, 60);

  return (
    <div>
      <div className='content'>
        <Typography className='header'>About Us</Typography> 
        <Typography>{info_text}</Typography>
      </div>
      <Person></Person>
      <ComparisonDiagram 
        variant="comp3" 
        titles={["otsikko1", "otsikko2", "otsikko 3"]} 
        contents={["liibalaabaa", "luubaliibaa","mfmgldj"]}
      /> 
    </div>
  );
}
  
export default About;