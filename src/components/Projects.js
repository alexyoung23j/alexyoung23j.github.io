import React,  { useRef, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import picture from "./Good.jpg"
import shopLogo from "../photos/SmartShopLogo.jpg"
import groupLogo from "../photos/groupRubik.png"
import cropLogo from "../photos/CropLogo.png"
import { motion, useAnimation, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch,
    useParams, 
    useHistory
  } from "react-router-dom";




export default function Projects() {

    const shopHoverAnim = useAnimation()
    const groupHoverAnim = useAnimation()
    const cropHoverAnim = useAnimation()
   
    const [showShop, setShowShop] = useState(false)
    const [showGroup, setShowGroup] = useState(false)
    const [showCrop, setShowCrop] = useState(false)

    useEffect(() =>  {
        groupHoverAnim.set({opacity: .5, transition: {duration: 0}})
        shopHoverAnim.set({opacity: .5, transition: {duration: 0}})
        cropHoverAnim.set({opacity: .5})
    }, [showShop, showGroup, showCrop])

    function AutoCrop() {
    
        return (
            <motion.div
                whileHover={{scale: 1.05}}
                onHoverStart={() => {
                    setShowCrop(true)
                    groupHoverAnim.start({opacity: .5, transition: {duration: 0}})
                    shopHoverAnim.start({opacity: .5, transition: {duration: 0}})
                    cropHoverAnim.start({opacity: .2})
                }}
                exit={{scale: 1, transition: {duration: 1}}}
                onTap={() => window.open("https://www.youtube.com/watch?v=l6FcalFdxSg&feature=youtu.be&ab_channel=AlexYoung")}
                onHoverEnd={() => {
                    cropHoverAnim.start({opacity: .5, transition: {duration: 0}})
                    groupHoverAnim.start({opacity: .5, transition: {duration: 0}})
                    shopHoverAnim.start({opacity: .5, transition: {duration: 0}})


                    setShowCrop(false)

                }}
                style={{ overflow: "visible", display: "flex", flexDirection: "column", marginLeft: "2vw",  position: "relative", height: "20vw", width: "20vw", justifyContent: "center",  alignItems: "center", cursor: "pointer", borderRadius: 20}}
            >
                <motion.img 
                    initial={{opacity: .5}}
                    animate={cropHoverAnim}
                    src={cropLogo} 
                    style={{x: 0, y: 0, position: "absolute", height: "20vw",  width: "20vw", borderRadius: 20}}
                    
                /> 

                
            
                <AnimatePresence>
                    <motion.div
                        initial={{opacity: 1}}
                        exit={{opacity: 1}}
                        style={{display: "flex", textAlign: "center", zIndex: 2, position: "relative", fontFamily: "Avenir-Heavy", width: "35vh",  fontSize: 35, color: "#00004c", justifyContent: "center"}}
                    >
                        Auto Crop
                    </motion.div>
                    {showCrop && (
                        <motion.div
                            initial={{opacity: 0, scale: .9}}
                            animate={{opacity: 1, scale: 1, transition: {duration: .5}}}
                            exit={{opacity: 0, transition: {duration: 1}}}
                            style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column",}}
                        >
                            <div
                                style={{ marginTop: "5%",width: "35vh", textAlign: "center", fontFamily: "Avenir-Book", fontStyle: "bold", fontSize: 20, color: "#00004c", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            >
                                A tool for use within an academic lab. Built to assist in the analysis of data from an ocular pressure sensor.
                            </div>
                            <div
                                style={{marginTop: "4%", width: "35vh", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 17, color: "#00004c", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            >
                                click for a demo
                            </div>


                       
                            <YouTubeIcon 
                                style={{ width: "35vh", marginTop: "4%", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 40, color: "#00004c", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            />
                            
                        </motion.div>
                        )                
                    }
                </AnimatePresence>
            </motion.div>
        )
    }

    function GroupViz() {
    
        return (
            <motion.div
            whileHover={{scale: 1.05}}
                onHoverStart={() => {
                    setShowGroup(true)
                    cropHoverAnim.start({opacity: .5, transition: {duration: 0}})
                    shopHoverAnim.start({opacity: .5, transition: {duration: 0}})

                    groupHoverAnim.start({opacity: .2})
                }}
                exit={{scale: 1, transition: {duration: 1}}}
                onTap={() => window.open("https://alexyoung23j.github.io/GroupViz/")}
                onHoverEnd={() => {
                    groupHoverAnim.start({opacity: .5, transition: {duration: 0}})
                    cropHoverAnim.start({opacity: .5, transition: {duration: 0}})
                    shopHoverAnim.start({opacity: .5, transition: {duration: 0}})

                    setShowGroup(false)

                }}
                style={{ overflow: "visible", display: "flex", flexDirection: "column", marginLeft: "2vw",  position: "relative", height: "20vw", width: "20vw", justifyContent: "center",  alignItems: "center", cursor: "pointer", borderRadius: 20}}
            >
                <motion.img 
                    initial={{opacity: .5}}
                    animate={groupHoverAnim}
                    src={groupLogo} 
                    style={{x: 0, y: 0, position: "absolute", height: "20vw",  width: "20vw", borderRadius: 20}}
                    
                /> 

                
            
                <AnimatePresence>
                    <motion.div
                        initial={{opacity: 1}}
                        exit={{opacity: 1}}
                        style={{display: "flex", textAlign: "center", zIndex: 2, position: "relative", fontFamily: "Avenir-Heavy",  width: "18vw", fontSize: 35, color: "#00004c", justifyContent: "center"}}
                    >
                        Group Visualizer
                    </motion.div>
                    {showGroup && (
                        <motion.div
                            initial={{opacity: 0, scale: .9}}
                            animate={{opacity: 1, scale: 1, transition: {duration: .5}}}
                            exit={{opacity: 0, transition: {duration: 1}}}
                            style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", }}
                        >
                            <div
                                style={{ marginTop: "5%",width: "35vh", textAlign: "center",  fontFamily: "Avenir-Book", fontStyle: "bold", fontSize: 20, color: "#00004c", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            >
                                An educational tool to help new students visualize some of the basic ideas of Group Theory, a branch of mathematics. 
                            </div>
                            <div
                                style={{marginTop: "4%", width: "35vh", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 17, color: "#00004c", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            >
                                click to try it
                            </div>


                       
                            <GitHubIcon 
                                style={{ width: "35vh", marginTop: "4%", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 40, color: "#00004c", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            />
                            
                        </motion.div>
                        )                
                    }
                </AnimatePresence>
            </motion.div>
        )
    }
    
    function SmartShop() {
    
        return (
            <motion.div
                onTap={() => window.open("https://github.com/alexyoung23j/ShopSmart")}
                whileHover={{scale: 1.1, transition: {duration: .5}}}
                onHoverStart={() => {
                    setShowShop(true)
                    shopHoverAnim.start({opacity: .2})
                    cropHoverAnim.start({opacity: .5, transition: {duration: 0}})
                    groupHoverAnim.start({opacity: .5, transition: {duration: 0}})

                }}
                onHoverEnd={() => {
                    shopHoverAnim.start({opacity: .4,})
                    cropHoverAnim.start({opacity: .5, transition: {duration: 0}})
                    groupHoverAnim.start({opacity: .5, transition: {duration: 0}})
                    setShowShop(false)
                }}
                style={{ overflow: "visible", display: "flex", flexDirection: "column",  position: "relative", height: "20vw", width: "20vw", justifyContent: "center",  alignItems: "center", cursor: "pointer"}}
            >
                <motion.img 
                    animate={shopHoverAnim}
                    initial={{opacity: .4}}
                    src={shopLogo} 
                    style={{x: 0, y: 0, position: "absolute", height: "20vw",  width: "20vw", borderRadius: 20}}
                    
                /> 

                
            
                <AnimatePresence>
                    <motion.div
                        style={{display: "flex", color: "#00004c", zIndex: 2, position: "relative", fontFamily: "Avenir-Heavy", width: "35vh", fontSize: 35, justifyContent: "center"}}
                    >
                        SmartShop
                    </motion.div>
                    
                    
                    {showShop && (
                        <motion.div
                            initial={{opacity: 0, scale: .9}}
                            animate={{scale: 1, opacity: 1, transition: {duration: .5}}}
                            exit={{transition: {duration: 1}}}
                            style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}
                        >
                            <div
                                style={{ width: "35vh", marginTop: "4%", textAlign: "center", fontFamily: "Avenir-Book", fontStyle: "bold", fontSize: 20 , color: "#00004c", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            >
                                An app that calculates and visualizes the shortest route through a store based on a user's list of groceries. 
                            </div>
                            <div
                                style={{marginTop: "4%", width: "35vh", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 17, color: "#00004c", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            >
                                click for a demo
                            </div>


                       
                            <GitHubIcon 
                                style={{ width: "35vh", marginTop: "4%", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 40, color: "#00004c", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            />
                            
                        </motion.div>
                        )                
                    }
                </AnimatePresence>
            </motion.div>
        )
    }
    
    return (
        <div
            style={{display: "flex", flexDirection: "row", marginTop: "10vw", alignItems: "center", justifyContent: "center",  }}
        >
            
            {SmartShop()}
            {GroupViz()}
            {AutoCrop()}
           
           
        </div>
    )
}