import React,  { useRef, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import picture from "./Good.jpg"
import shopLogo from "../photos/SmartShopLogo.jpg"
import groupLogo from "../photos/groupLogoFinal.png"
import { motion, useAnimation, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch,
    useParams, 
    useHistory
  } from "react-router-dom";




export default function Projects() {

    let match = useRouteMatch();
    let history = useHistory()
   
    const [showShop, setShowShop] = useState(false)
    const [showGroup, setShowGroup] = useState(false)


    function GroupViz() {
    
        return (
            <motion.div
                onHoverStart={() => setShowGroup(!showGroup)}
                whileHover={{scale: 1.02}}
                exit={{scale: 1, transition: {duration: 1}}}
                onTap={() => window.open("https://github.com/alexyoung23j/ShopSmart")}
                onHoverEnd={() => {
                    setShowGroup(false)
                }}
                style={{ overflow: "visible", display: "flex", flexDirection: "column", marginLeft: "15%",  position: "relative", height: "40vh", width: "40vh", justifyContent: "center",  alignItems: "center", cursor: "pointer"}}
            >
                <motion.img 
                    initial={{opacity: .5}}
                    whileHover={{opacity: .1,}}
                    src={groupLogo} 
                    style={{x: 0, y: 0, position: "absolute", height: "40vh",  width: "40vh", borderRadius: 15}}
                    
                /> 

                
            
                <AnimatePresence>
                    <motion.div
                        initial={{opacity: 1}}
                        exit={{opacity: 1}}
                        style={{display: "flex", textAlign: "center", zIndex: 2, position: "relative", fontFamily: "Avenir-light",   fontSize: 35, color: "black", justifyContent: "center"}}
                    >
                        Group Visualizer 
                    </motion.div>
                    {showGroup && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {duration: 0}}}
                            exit={{opacity: 0, transition: {duration: 1}}}
                            style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}
                        >
                            <div
                                style={{ marginTop: "5%",width: "35vh", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 19, color: "black", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            >
                                A simple educational tool to help new students visualize some of the basic ideas of Group Theory, a branch of mathematics. 
                            </div>
                            <div
                                style={{marginTop: "4%", width: "35vh", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 15, color: "black", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            >
                                click to try it
                            </div>


                       
                            <GitHubIcon 
                                style={{ width: "35vh", marginTop: "4%", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 40, color: "black", justifyContent: "center", alignItems: "center", borderRadius: 10}}
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
                onHoverStart={() => setShowShop(!showShop)}
                whileHover={{scale: 1.02}}
                onTap={() => window.open("https://github.com/alexyoung23j/ShopSmart")}
                onHoverEnd={() => {
                    setShowShop(false)
                }}
                style={{ overflow: "visible", display: "flex", flexDirection: "column",  position: "relative", height: "40vh", width: "40vh", justifyContent: "center",  alignItems: "center", cursor: "pointer"}}
            >
                <motion.img 
                    initial={{opacity: .5}}
                    whileHover={{opacity: .1,}}
                    src={shopLogo} 
                    style={{x: 0, y: 0, position: "absolute", height: "40vh",  width: "40vh", borderRadius: 15}}
                    
                /> 

                
            
                <AnimatePresence>
                    <motion.div
                        initial={{opacity: 1}}
                        exit={{opacity: 1}}
                        style={{display: "flex", zIndex: 2, position: "relative", fontFamily: "Avenir-light",  fontSize: 35, color: "black", justifyContent: "center"}}
                    >
                        SmartShop
                    </motion.div>
                    {showShop && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {duration: 0}}}
                            exit={{opacity: 0, transition: {duration: 1}}}
                            style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}
                        >
                            <div
                                style={{ marginTop: "8%",width: "35vh", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 19, color: "black", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            >
                                A personal productivity application that calculates and visualizes the shortest route through a store based on a user's list of groceries. 
                            </div>
                            <div
                                style={{marginTop: "4%", width: "35vh", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 15, color: "black", justifyContent: "center", alignItems: "center", borderRadius: 10}}
                            >
                                click for a demo
                            </div>


                       
                            <GitHubIcon 
                                style={{ width: "35vh", marginTop: "4%", textAlign: "center", fontFamily: "Avenir-light", fontStyle: "bold", fontSize: 40, color: "black", justifyContent: "center", alignItems: "center", borderRadius: 10}}
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
            style={{display: "flex", flexDirection: "row", marginTop: "5%"}}
        >
            {SmartShop()}
            {GroupViz()}

           
           
        </div>
    )
}