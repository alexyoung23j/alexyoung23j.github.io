import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import picture from "./Good.jpg"
import { motion, useAnimation, useViewportScroll } from "framer-motion"
import { Frame, Scroll } from "framer"





export default function Main() {

    const aboutAnim = useAnimation()
    const projectsAnim = useAnimation()
    const workAnim = useAnimation()
    const podcastAnim = useAnimation()
    const contactAnim = useAnimation()

    const {scrollYProgress} = useViewportScroll()

    function openLink(link) {

        if (link === "github") {
            
           window.open("https://github.com/alexyoung23j", '_blank');
              
        }

        if (link === "linkedIn") {
            
            window.open("https://www.linkedin.com/in/alexyoung23j/", '_blank');
               
         }


    }


    function sections() {
        return (
            <div style={{display: "flex", flex: 2.4, alignItems: "center", justifyContent: "flex-start", marginTop: "5%", flexDirection: "column", }}>
                <motion.div
                    animate={aboutAnim}
                    whileHover={{scale: 1.1, cursor: "pointer", color: "#b2b2ff"}}
                    style={{fontFamily: "Avenir-light", fontSize: 25, display: "flex", alignContent: "flex-start", color: "#00004c"}}
                >
                    about
                </motion.div>
                <motion.div
                    animate={aboutAnim}
                    whileHover={{scale: 1.1, cursor: "pointer", color: "#b2b2ff"}}
                    style={{fontFamily: "Avenir-light", fontSize: 25, marginTop: "5%", color: "#00004c"}}
                >
                    projects
                </motion.div>
                <motion.div
                    animate={aboutAnim}
                    whileHover={{scale: 1.1, cursor: "pointer", color: "#b2b2ff"}}
                    style={{fontFamily: "Avenir-light", fontSize: 25,marginTop: "5%", color: "#00004c"}}
                >
                    work
                </motion.div>
                <motion.div
                    animate={aboutAnim}
                    whileHover={{scale: 1.1, cursor: "pointer", color: "#b2b2ff"}}
                    style={{fontFamily: "Avenir-light", fontSize: 25,marginTop: "5%", color: "#00004c"}}
                >
                    podcast
                </motion.div>
                <motion.div
                    animate={aboutAnim}
                    whileHover={{scale: 1.1, cursor: "pointer", color: "#b2b2ff"}}
                    style={{fontFamily: "Avenir-light", fontSize: 25,marginTop: "5%", color: "#00004c"}}
                >
                    contact
                </motion.div>
                <div style={{display: "flex", flex: 1, marginTop: "15%", alignItems: "flex-start", justifyContent: "center"}}>
                    <motion.div

                        whileHover={{ cursor: "pointer", color: "#b2b2ff"}}
                        onTap={() => openLink("github")}
                    >
                        <GitHubIcon style={{fontSize: 30}}/>
                    </motion.div>
                    <motion.div
                        whileHover={{cursor: "pointer", color: "#b2b2ff"}}
                        style={{marginLeft: "40%"}}
                        onTap={() => openLink("linkedIn")}
                    >
                        <LinkedInIcon style={{fontSize: 30}}/>
                    </motion.div>
              
                   
               </div>
            </div>
        )
    }
    return (
        <div style={{display: "flex",  height: "100vh"}}>
            <div style={{display: "flex", flex: 1,  backgroundColor: "#e5e5ff", flexDirection: "column"}}>
                
                <div style={{display: "flex", flex: 1.7, alignItems: "flex-end", justifyContent: "center"}}>
                    <Avatar style={{height: 180, width: 180, backgroundColor: "#cecee5"}}>
                        <Avatar style={{height: 170, width: 170}} alt="header" src={picture}/>
                    </Avatar>
                </div>
                
               {sections()}
               
               
                
                
            </div>
            <div style={{display: "flex", flex: 4, backgroundColor: "#ccccff"}}>
                <motion.div>

                </motion.div>
            </div>
            
        </div>
    )

}