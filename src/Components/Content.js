import React from "react";
import { Box } from "@mui/system";
import {data}  from "../Assets/Data";
import Cards from "./Cards";
export default function Content(props)
{

    return(
        <Box>
             {data && data.map(details=>{

                    return(<Cards info={details}/>)
             })}    
        </Box>
       
    )
}