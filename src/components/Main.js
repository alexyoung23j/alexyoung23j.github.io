import React,  { useRef, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import picture from "./Good.jpg"
import { motion, useAnimation, useViewportScroll, AnimatePresence } from "framer-motion"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';




export default function Main() {

    const aboutAnim = useAnimation()
    const projectsAnim = useAnimation()
    const workAnim = useAnimation()
    const podcastAnim = useAnimation()
    const contactAnim = useAnimation()
    const aboutFieldAnim = useAnimation()
    const projectsFieldAnim = useAnimation()


    const projectRef = useRef()
    const aboutRef = useRef()
    const workRef = useRef()
    const podcastRef = useRef()
    const contactRef = useRef()

    const [curPage, setCurPage] = useState()



    const scrollToRef = (ref) => ref.current.scrollIntoView({behavior: "smooth"})

    useEffect(() => {
        //projectRef.current.scrollIntoView()
    }, [])

    function checkCurPage(page) {
        if (page != curPage) {
            clearAnims2()
            setCurPage(page)
            if (page === "about") {
                aboutFieldAnim.set({scale:1.0, translateX: 0,  transition: {duration: 3, type: "spring"}})
            }
            if (page === "projects") {
                projectsFieldAnim.set({scale: 1, translateX: 0, transition: {duration: 3000, }})
                
            }
        }
    }

    function clearAnims2() {
        projectsFieldAnim.set({scale: 1, translateX: 200})
        aboutFieldAnim.set({translateX: 200})

    }


    function scrollEvent() {
        let aboutPos = (window.innerHeight + aboutRef.current.getBoundingClientRect().y)
        let projectPos = (window.innerHeight + projectRef.current.getBoundingClientRect().y)
        let podcastPos = (window.innerHeight + podcastRef.current.getBoundingClientRect().y)
        let contactPos = (window.innerHeight + contactRef.current.getBoundingClientRect().y)


        console.log(aboutPos, projectPos)


        if (aboutPos >= 450 && aboutPos <= window.innerHeight) {
            clearAnims()
            aboutAnim.set({scale: 1.05, color: "#b2b2ff"})
            checkCurPage("about")
            
        } 
        if (projectPos >= 150 && projectPos <= window.innerHeight+450) {
            clearAnims()
            projectsAnim.set({scale: 1.05, color: "#b2b2ff"})
            checkCurPage("projects")

        } 
      
         if (podcastPos >= 150 && podcastPos <= window.innerHeight+150) {
            clearAnims()
            podcastAnim.set({scale: 1.05, color: "#b2b2ff"})
        }  
         if (contactPos >= 150 && contactPos <= window.innerHeight+150) {
            clearAnims()
            contactAnim.set({scale: 1.05, color: "#b2b2ff"})
        }  
        

    }

    function clearAnims() {
        aboutAnim.set({scale: 1, color: "#00004c"})
        projectsAnim.set({scale: 1, color: "#00004c"})
        podcastAnim.set({scale: 1, color: "#00004c"})
        contactAnim.set({scale: 1, color: "#00004c"})

    }
    


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
                    onTap={() => {
                        scrollToRef(aboutRef)
                    }}
                >
                    about
                </motion.div>
                <motion.div
                    animate={projectsAnim}
                    whileHover={{scale: 1.1, cursor: "pointer", color: "#b2b2ff"}}
                    style={{fontFamily: "Avenir-light", fontSize: 25, marginTop: "5%", color: "#00004c"}}
                    onTap={() => {
                        scrollToRef(projectRef)
                    }}
                >
                
                    projects
                </motion.div>
              
                <motion.div
                    animate={podcastAnim}
                    whileHover={{scale: 1.1, cursor: "pointer", color: "#b2b2ff"}}
                    style={{fontFamily: "Avenir-light", fontSize: 25,marginTop: "5%", color: "#00004c"}}
                    onTap={() => {
                        scrollToRef(podcastRef)
                    }}
                >
                
                    podcast
                </motion.div>
                <motion.div
                    animate={contactAnim}
                    whileHover={{scale: 1.1, cursor: "pointer", color: "#b2b2ff"}}
                    style={{fontFamily: "Avenir-light", fontSize: 25,marginTop: "5%", color: "#00004c"}}
                    onTap={() => {
                        scrollToRef(contactRef)
                    }}
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
                
                <motion.div 
                whileHover={{scale: 1.02}}
                style={{display: "flex", flex: 1.7, alignItems: "flex-end", justifyContent: "center"}}>
                    <Avatar style={{height: 180, width: 180, backgroundColor: "#cecee5"}}>
                        <Avatar style={{height: 170, width: 170}} alt="header" src={picture}/>
                    </Avatar>
                </motion.div>
                
               {sections()}
               
               
                
                
            </div>
            <div style={{display: "flex", flex: 4,backgroundColor: "#ccccff", overflow: "hidden", flexDirection: "column", }}>
                <div onScroll={() => scrollEvent()} style={{overflowY: "scroll", width: "102%"}}>
                    <div ref={aboutRef} style={{display: "flex",  height: "100vh", justifyContent:"flex-start", alignItems: "center",}}>
                        <ArrowBackIosIcon style={{marginLeft: "3%", color: "#b2b2ff", fontSize: 30}}/>
                        <motion.div 
                        animate={aboutFieldAnim}
                        style={{backgroundColor: "#e5e5ff50", borderRadius:40, width: "80%",  marginLeft:"1%", display: "flex", height: "65%", alignItems: "center"}}>
                    
                            <div style={{ display: "flex", alignItems: "flex-start", marginLeft: "5%", flexDirection: "column", marginTop: "-8%", }}>
                                <h1 style={{fontFamily: "Avenir-light", fontSize: 80, color: "#00004c"}}>
                                    Alexander J. Young
                                </h1>
                                <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "-7%", }}>
                                    <motion.div
                                        style={{display: "flex",}}
                                        whileHover={{ cursor: "pointer", color: "#b2b2ff"}}
                                        onTap={() => openLink("github")}
                                        >
                                        <GitHubIcon style={{fontSize: 30}}/>
                                    </motion.div>
                                    <motion.div
                                        style={{display: "flex",marginLeft: "5%"}}
                                        whileHover={{cursor: "pointer", color: "#b2b2ff"}}
                                        onTap={() => openLink("linkedIn")}
                                        >
                                        <LinkedInIcon style={{fontSize: 30}}/>
                                    </motion.div>
                                    <div style={{fontFamily: "Avenir-light", marginLeft: "5%", fontSize: 25, color: "#00004c", width: 250}}>
                                        San Diego, CA
                                    </div>
                                </div>
                                
                                <div style={{display: "flex", flexDirection: "row", marginTop:"3%", flexGrow: 1}}>
                                    <div style={{fontFamily: "Avenir-light", fontStyle: "italic", fontSize: 30, color: "#00004c", marginRight: 8}}>
                                        Math / Computer Science Student @   
                                    </div>
                                    <a href="https://math.ucsd.edu/" target="_blank" style={{fontFamily: "Avenir-light", fontStyle: "italic", fontSize: 30, color: "#00004c",}}>
                                        UC San Diego 
                                    </a>
                                </div>
                                
                                <div style={{fontFamily: "Avenir-light", fontStyle: "italic", marginTop: "3%", fontSize: 25, color: "#00004c"}}>
                                    I am passionate about using technology to build valuable services. 
                                </div>
                                

                            </div>
                        </motion.div>
                        
                    </div>
                    <div ref={projectRef} style={{display: "flex",  height: "100vh", justifyContent:"flex-start", alignItems: "center",}}>
                        <ArrowBackIosIcon style={{marginLeft: "3%", color: "#b2b2ff", fontSize: 30}}/>
                        <motion.div 
                        animate={projectsFieldAnim}
                        style={{backgroundColor: "#e5e5ff50", borderRadius:40, width: "80%",  marginLeft:"1%", display: "flex", height: "85%", alignItems: "flex-start"}}>
                    
                            <div style={{ display: "flex", alignItems: "flex-start", marginLeft: "5%", flexDirection: "column", }}>
                                <h1 style={{fontFamily: "Avenir-light", fontSize: 80, color: "#00004c"}}>
                                Projects                                
                                </h1>
                                <motion.div
                                    style={{}}
                                >

                                </motion.div>
                            </div>
                        </motion.div>
                        
                    </div>
                    
                    
                    <div ref={podcastRef} style={{display: "flex", height: "100vh", width: "100vh"}}>
                        podcast
                    </div>
                    <div ref={contactRef} style={{display: "flex",  height: "100vh", width: "100vh"}}>
                        contact
                    </div>
                </div>
            </div>
        </div>
    )

}