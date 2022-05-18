import React from "react";
import { Card, CardMedia,Box, CardContent, Typography} from "@mui/material";

export default function Cards(props)
{
    return(
        <Card sx={{height:200,width:550,display:'flex',marginTop:2}} className="Maincard">
            <Box sx ={{height:200,width:250,display:'flex'}} paddingTop={1}>
                <CardMedia 
                        component="img"
                        image={props.info.image}
                        className="place-image"
                    />
            </Box>  
            <Box sx={{display:"flex",flexDirection:"row"}}>
                <CardMedia component="img" image="images/Fill 220.png" alt="Location" className="Location-image"/>
                <CardContent>
                   <Typography className="Location-name">{props.info.location}</Typography>
                   <Typography className="place-name">{props.info.place}</Typography>
                   <Typography className="Date">{props.info.date}</Typography>
                   <Typography className="About">{props.info.about}</Typography>
                </CardContent>
            </Box>
        </Card>
    )
   
}