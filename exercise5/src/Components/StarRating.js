import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating(props) {
    
    if (props.tahti === 1){
    return (
    <>
        <FaStar color="ffa41c" />
        <FaStar color="grey" />
        <FaStar color="grey" />
        <FaStar color="grey" />
        <FaStar color="grey" />
    </>
    )
    }
    else if(props.tahti === 2)
    {
    return(   
    <>
        <FaStar color="ffa41c" />
        <FaStar color="ffa41c" />
        <FaStar color="grey" />
        <FaStar color="grey" />
        <FaStar color="grey" />
    </>)
    }
    else if(props.tahti === 3)
    {
    return(   
    <>
        <FaStar color="ffa41c" />
        <FaStar color="ffa41c" />
        <FaStar color="ffa41c" />
        <FaStar color="grey" />
        <FaStar color="grey" />
    </>)
    }
    else if(props.tahti === 4)
    {
    return(   
    <>
        <FaStar color="ffa41c" />
        <FaStar color="ffa41c" />
        <FaStar color="ffa41c" />
        <FaStar color="ffa41c" />
        <FaStar color="grey" />
    </>)
    }

    else if(props.tahti === 5)
    {
    return(   
    <>
        <FaStar color="ffa41c" />
        <FaStar color="ffa41c" />
        <FaStar color="ffa41c" />
        <FaStar color="ffa41c" />
        <FaStar color="ffa41c" />
    </>)
    }

    if (props.tahti === 0){
        return (
    <>
        <FaStar color="grey" />
        <FaStar color="grey" />
        <FaStar color="grey" />
        <FaStar color="grey" />
        <FaStar color="grey" />
     </>
        )
        }

    

    
  }