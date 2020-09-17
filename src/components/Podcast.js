import React,  { useRef, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import picture from "./Good.jpg"
import podcastLogo from "../photos/podcastLogo.jpg"
import spotify from "../photos/spotify.png"
import { motion, useAnimation, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { Icon, InlineIcon } from '@iconify/react';
import spotifyIcon from '@iconify/icons-mdi/spotify';
import soundcloudIcon from '@iconify/icons-logos/soundcloud';

import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import YouTubeIcon from '@material-ui/icons/YouTube';
import applePodcasts from '@iconify/icons-cib/apple-podcasts';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch,
    useParams, 
    useHistory
  } from "react-router-dom";




export default function Podcast() {

    const shopHoverAnim = useAnimation()
    const groupHoverAnim = useAnimation()
    const cropHoverAnim = useAnimation()
   
    const [showShop, setShowShop] = useState(false)
    const [showGroup, setShowGroup] = useState(false)
    const [showCrop, setShowCrop] = useState(false)

       
    
    function Logo() {
    
        return (
            <motion.div
                onTap={() => window.open("https://podcasts.apple.com/us/podcast/topical-storm/id1450223221")}
                whileHover={{scale: 1.05}}
            
                style={{marginLeft: "5vw", overflow: "visible", display: "flex", flexDirection: "column",  position: "relative", height: "17vw", width: "17vw", justifyContent: "center",  alignItems: "center", cursor: "pointer"}}
            >
                <motion.img 
                    animate={shopHoverAnim}
                    initial={{opacity: 1}}
                    src={podcastLogo} 
                    style={{x: 0, y: 0, position: "absolute", height: "17vw",  width: "17vw", borderRadius: 20}}
                    
                /> 

                
            
               
            </motion.div>
        )
    }
    
    return (
        <div
            style={{display: "flex", flexDirection: "row", marginTop: "10vw", alignItems: "center", width: "65vw", justifyContent: "flex-start", alignItems: "center",  }}
        >
            
            {Logo()}
            <div
                style={{display: "flex", flexDirection: "column", alignItems: "center"}}
            >
                <div style={{fontFamily: "Avenir-light", fontSize: 25, color: "#00004c",  marginBottom: "2%", width: "45vw", textAlign: "center",}}>
                    Check us out wherever you to listen to podcasts!                           
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <motion.div
                        whileHover={{scale:1.05}}
                        onTap={() => window.open("https://open.spotify.com/show/2cYZDz7Yj6mwBNgEs0rNLg?si=g6pGkkfNQimFqcns90xxMQ")}
                    >
                        <Icon icon={spotifyIcon} color="#1DB954" width="5vw" />
                    </motion.div>

                    <motion.div
                        whileHover={{scale:1.05}}
                        style={{marginLeft: "20%"}}
                        onTap={() => window.open("https://podcasts.apple.com/us/podcast/topical-storm/id1450223221")}
                    >
                        <Icon icon={applePodcasts} color="#D56Dfb" width="4vw"/>
                    </motion.div>

                    <motion.div
                        whileHover={{scale:1.05}}
                        style={{marginLeft: "20%"}}
                        onTap={() => window.open("https://soundcloud.com/topicalstorm")}
                    >
                        <Icon icon={soundcloudIcon} width="5vw"/>
                    </motion.div>


                </div>
            </div>
            
 
           
        </div>
    )
}

