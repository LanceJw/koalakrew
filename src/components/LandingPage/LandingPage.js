import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import Countdown from 'react-countdown';
import koala1 from '../../assets/koala1.jpg'
import KKFamPic from '../../assets/kkfampic.jpg'
import './landingpage.css'
import Navbar from '../Navbar/Navbar'
import Video1 from '../../assets/koala1vid.mp4'
import Footer from '../Footer/Footer'
import Koala1 from '../../assets/Family/Koala1.jpg'
import Koala2 from '../../assets/Family/Koala2.jpg'
import Koala3 from '../../assets/Family/Koala3.jpg'
import Koala4 from '../../assets/Family/Koala4.jpg'
import Koala5 from '../../assets/Family/Koala5.jpg'
import Koala6 from '../../assets/Family/Koala6.jpg'
import Koala7 from '../../assets/Family/Koala7.jpg'
import KKVid from '../../assets/krewbrewvid.mp4'
import WhiteKKLogo from '../../assets/WhiteKKLogo.png'


import ReactPlayer from 'react-player'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiscord, faInstagram, faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
    faDollarSign, faHandshake, faBrain, faEnvelope, faBars, faTimes, faAngleLeft
} from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
width: 80%;
margin: auto;
max-wdith: 1550px;
`

const Button = styled.a`
padding: 8px 16px;
background-color: #c74a98;
border-radius: 4px;
text-decoration: none;
color: black;
font-size: 16px;
`

const MainImage = styled.img`
opacity: 0.6;
width: 100%;
margin: auto;
`

const Links = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 40vh;
margin-bottom: 2rem;
`

const FAQ = styled.div`
width: 90%;
margin: 6rem auto 0rem
`

const Team = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`

const TeamContent = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
justify-content: space-around;
`

const FamPic = styled.img`
width: 160px;
height: 160px;
border-radius: 15%;
`

const MobileLinks = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 40vh;
margin-bottom: 2rem;
`

const styling = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0rem 0rem 6rem',
        lineHeight: '25px',
    },
    mobileContent: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0rem auto 4rem',
        lineHeight: '25px',
        width: '90%',
        textAlign: 'center'
    }
}

const introduction = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        margin: '6rem 0 6rem',
        justifyContent: 'space-between',
        gap: '1rem',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.5rem',
        width: '55%',
    },
    mobileContainer: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        margin: '5rem auto 5rem'
    },
    mobileContent: {
        width: '100%',
        textAlign: 'center',
    }
}

const countdown = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: '0rem auto 6rem',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '10rem',
        backgroundColor: '#c74a98',
        color: 'black'
    },
    information: {
        width: '70%',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        fontWeight: 'bold'
    },
    left: {
        fontSize: '12px',
        display: 'flex',
        flexDirection: 'column',
        fontStyle: 'italic'
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        gap: '6px'
    },
    mint: {
        textDecoration: 'none',
        padding: '16px 32px',
        backgroundColor: 'black',
        color: '#b81f7f',
        margin: '0 rem auto 0rem'
    },
    mobileContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '10rem',
        backgroundColor: '#c74a98',
        color: 'black',
        margin: '0rem auto 4rem',
        width: '100%'
    },
    mobileTop: {
        fontSize: '1.5em',
        width: '95%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mobileInformation: {
        width: '70%',
        margin: 'auto',
        fontSize: '12px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '0.4rem'
    },
    mobileMint: {
        padding: '9px 18px',
        backgroundColor: 'black',
        color: '#b81f7f',
        margin: '0rem auto 1.5rem',
        textDecoration: 'none',
        borderRadius: '4px'
    }

}

const perks = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0rem 0rem 6rem'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        gap: '1rem',
        margin: '1.5rem auto 0rem'
    },
    image: {
        height: '55px',
        width: '55px',
        borderRadius: '50%',
        margin: '0rem auto 1rem'
    },
    individual: {
        width: '15%',
        lineHeight: '1rem',
        fontSize: '15px',
    },
    mobileContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5rem 0rem 5rem'
    },
    mobileContent: {
        display: 'flex',
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        gap: '2rem',
        margin: '1.5rem auto 0rem'
    },
    mobileIndividual: {
        width: '30%',
        lineHeight: '1rem',
        fontSize: '15px',
    },
}

const accordion = {
    container: {
        width: '100%',
        backgroundColor: '#272725',
        color: 'white',
        fontSize: '16px'
    },
    title: {
        color: 'white',
        fontSize: '18px'
    },
    content: {
        color: '#BEBDB8',
        display: 'flex',
        flexDirection: 'column',
    }
}

const team = {
    individuals: {
        textAlign: 'center'
    },
    mobileIndividuals: {
        textAlign: 'center'
    }
}

const MobileContainer = styled.div`
width: 100%;
margin: auto;

`

const MobileNavContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: auto;
padding: 3rem 0rem 3rem;
`


const MobileNavbar = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: #272725;
z-index: 2;
overflow: hidden;
`

const LandingPage = () => {

    const [state, setState] = useState({
        mobileView: false,
      });
    
      const { mobileView } = state;
    
      useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 1100
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const renderer = ({ days, hours, minutes, seconds, }) => {
        // Render a countdown
        // return <span>{days} Days : {hours} Hours : {minutes} Minutes : {seconds} Seconds</span>;
        return <span> - Days : - Hours : - Minutes : - Seconds</span>;
    };

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const [open, setOpen] = useState(false)

    const openNavbar = () => {
        setOpen(true)
    }

    const closeNavbar = () => {
        setOpen(false)
    }

    const ConditionalRendering = () => {
        if (open) {
            return (
                <Fragment>
                    <MobileNavbar>
                        <div style={{height: '3rem', display: 'flex', alignItems: 'center'}}>
                            <p style={{marginLeft: '1rem'}} onClick={closeNavbar}><FontAwesomeIcon icon={faAngleLeft} onClick={closeNavbar}/> Back</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                            <img src={WhiteKKLogo} style={{height: '25px', width: '130px', marginTop: '2rem'}} alt='Logo'/>
                            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginTop: '1.5rem', gap: '0.6rem'}}>
                                <a href='/' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Home</a>
                                <a href='/#perks' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Perks</a>
                                <a href='/roadmap' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Roadmap</a>
                                <a href='/#kreators' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Kreators</a>
                                <a href='/theforest' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>The Forest</a>
                                <a href='/krewbrew' style={{textDecoration: 'none', color: '#bfbfbf'}} onClick={closeNavbar}>Krew Brew</a>
                            </div>
                        </div>
                        <div style={{width: '30%', margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '3rem'}}>
                            <a href='https://twitter.com/KoalaKrewNFT' alt='Twitter'><FontAwesomeIcon icon={faTwitter} style={{color: '#d9d9d9'}}/></a>
                            <a href='#' alt='Instagram'><FontAwesomeIcon icon={faInstagram} style={{color: '#d9d9d9'}}/></a>
                            <a href='#' alt='Discord'><FontAwesomeIcon icon={faDiscord} style={{color: '#d9d9d9'}}/></a>
                        </div>
                    </MobileNavbar>
                </Fragment>
            )
        } else if (!open && mobileView) {
            return (
                displayMobile()
            )
        } else {
            return (
                displayDesktop()
            )
        }
    }

    const displayDesktop = () => {
        return (
            <Fragment>
                <Navbar/>
                <Container>
                    <MainImage src={KKFamPic} />
                    {/* Introduction of Koala Krew */}
                    <div style={introduction.container}>
                        <div style={introduction.content}>
                            <h1 style={{lineHeight: '2.5rem', marginBottom: '0.8rem', color: '#95befc'}}>Welcome To Koala Krew</h1>
                            <p style={{fontSize: '18px'}}>We are a collection of 6,688 Koalas living within the Solana blockchain.
                            Every NFT represents a stake in Krew Brew, a revolutionary coffee brand where holders gain rights
                            to dividends paid out to shareholders.
                            Krew Members holding our Koalas will also gain exclusive access to our Krew Brew DAO.
                            </p>
                            <div style={{marginTop: '2rem'}}>
                                <p style={{marginBottom: '0.8rem', fontSize: '18px'}}>Join discord for our latest updates!</p>
                                <Button><FontAwesomeIcon icon={faDiscord}/>Discord</Button>
                            </div>
                        </div>
                        <div>
                            <ReactPlayer 
                            url={Video1}
                            loop = 'true'
                            playing = 'true'
                            width = '100%'
                            muted = 'true'
                            />
                        </div>
                    </div>

                    {/* Countdown timer */}
                    <div style={countdown.container}>
                        {/* Discord link */}
                        <div style={countdown.left}>
                            <p style={{fontSize: '24px'}}>Buy a Koala</p>
                        </div>

                        {/* Actual Countdown */}
                        <div style={countdown.right}>
                            <Countdown date={'2022-02-05T19:00:00.00+00:00'} renderer={renderer}/>
                            <div style={countdown.information}>
                                <span>Supply: 6,688</span>
                                <span>Price: 1.5 SOL</span>
                                <span>Date: TBA</span>
                            </div>
                        </div>
                        <a href='#' alt='Mint' style={countdown.mint}>Mint Now</a>
                    </div>

                    {/* Content for "Learn More" */}
                    <div style={styling.content}>
                        <h1 style={{textAlign: 'center', marginBottom: '1.5rem', color: '#95befc'}}>About Us</h1>
                        <div style={{width: '70%'}}>
                            <h1 style={{fontSize: '22px', marginBottom: '0.8rem'}} id='learn-more'>Owning a Koala!</h1>
                            <p>Each Koala will be available for mint at 1.5 SOL, regardless of pre-sale
                                or public sale. 15 Koalas will not be mintable - these Koalas will be
                                safeguarded by the Kreators and will be used for Krew Brew marketing
                                campaigns post-mint. 
                                <br/>Interested in knowing what's ahead for this project? Visit our roadmap
                                <a style={{textDecoration: 'none', color: '#E349AA'}} href='/roadmap'> here</a>!
                            </p>
                        </div>
                        <div style={{marginTop: '2rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{width: '60%'}}>
                                <h1 style={{fontSize: '22px', marginBottom: '0.8rem'}}>What is Krew Brew?</h1>
                                <p>Krew Brew is Singapore's first revolutionary drinkable NFT! 
                                    Bringing across affordable coffee, we aim to disrupt the current 
                                    Read-To-Drink Coffee industry with our own custom recipes.
                                    Partnering with Koala Krew, Krew Brew offers more than just a drink. 
                                    Own Krew Brew and play a part in Singapore's 1st drinkable NFT!
                                    <br/>Head on to <a style={{textDecoration: 'none', color: '#E349AA'}} href='/krewbrew' alt='Krew Brew Website'>Krew Brew</a> to find out how you can be part of Krew Brew. 
                                </p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <ReactPlayer
                                url={KKVid}
                                loop = 'true'
                                playing = 'true'
                                width = '85%'
                                muted = 'true'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Perks */}
                    <div style={perks.container}>
                        <h1 id='perks' style={{color: '#95befc', marginBottom: '0.8rem'}}>Koala Perks</h1>
                        <div style={perks.content}>
                            <div style={perks.individual}>
                                <img style={perks.image} src={koala1} alt=''></img>
                                <p>A nice Koala PFP to <br/>flex on your friends!</p>
                            </div>
                            <div style={perks.individual}>
                                {/* <img style={perks.image} src={koala1} alt=''></img> */}
                                <p><FontAwesomeIcon icon={faDollarSign} style={perks.image}/></p>
                                <p>Gain a share in the <br/>Krew Brew business</p>
                            </div>
                            <div style={perks.individual}>
                                {/* <img style={perks.image} src={koala1} alt=''></img> */}
                                <p><FontAwesomeIcon icon={faBrain} style={perks.image}/></p>
                                <p>Be part of making <br/>crucial business decisions</p>
                            </div>
                            <div style={perks.individual}>
                                {/* <img style={perks.image} src={koala1} alt=''></img> */}
                                <p><FontAwesomeIcon icon={faEnvelope} style={perks.image}/></p>
                                <p>Be a part of our business <br/>and help in
                                distributing Krew Brew all over the world
                                (in your country of residence). </p>
                            </div>
                            <div style={perks.individual}>
                                {/* <img style={perks.image} src={koala1} alt=''></img> */}
                                <p><FontAwesomeIcon icon={faHandshake} style={perks.image}/></p>
                                <p>Synergies between Krew Brew and Koala
                                Krew attracts more eyes to both businesses
                                - it's a win-win for all.</p>
                            </div>
                        </div>
                    </div>

                    {/* Kreators */}
                    <Team id='kreators' >
                        <h1 style={{color: '#95befc', marginBottom: '0.8rem'}}>Kreators</h1>
                        <div style={{marginBottom: '2rem'}}>
                            <h2 style={{marginBottom: '0.8rem'}}>Directors</h2>
                            <TeamContent>
                                <div style={team.individuals}>
                                    <FamPic src={Koala1} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>LimKopi</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Krew Chief</span>
                                </div>
                                <div style={team.individuals}>
                                    <FamPic src={Koala2} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>LimKopi</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Krew Creative</span>
                                </div>
                            </TeamContent>
                        </div>
                        <div style={{marginBottom: '2rem'}}>
                        <h2 style={{marginBottom: '0.8rem'}}>Koala Krew Team</h2>
                            <TeamContent>
                                <div style={team.individuals}>
                                    <FamPic src={Koala3} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>Tarzan</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Lead Dev</span>
                                </div>
                                <div style={team.individuals}>
                                    <FamPic src={Koala4} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>xx</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Marketing Lead</span>
                                </div>
                                <div style={team.individuals}>
                                    <FamPic src={Koala5} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>xx</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Dev</span>
                                </div>
                            </TeamContent>
                        </div>
                        <div>
                        <h2 style={{marginBottom: '0.8rem'}}>Krew Brew Team</h2>
                            <TeamContent>
                                <div style={team.individuals}>
                                    <FamPic src={Koala6} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>DunderThunder</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Project Lead</span>
                                </div>
                                <div style={team.individuals}>
                                    <FamPic src={Koala7} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>Koffee Intern</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Dev</span>
                                </div>
                            </TeamContent>
                        </div>
                    </Team>

                    {/* FAQ */}
                    <FAQ>
                        <Accordion style={accordion.container} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary style={accordion.title} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>How to Mint?</AccordionSummary>
                            <AccordionDetails style={accordion.content}>Check out our "How to mint" guide on our Discord Server</AccordionDetails>
                        </Accordion>
                        <Accordion style={{...accordion.container, margin: '0.3rem 0rem 0.3rem'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary style={accordion.title} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>When is mint and how much per mint?</AccordionSummary>
                            <AccordionDetails style={accordion.content}>Mint Date: TBA <br/><br/>Mint Price: 1.5 SOL regardless of public/pre sale</AccordionDetails>
                        </Accordion>
                        <Accordion style={accordion.container} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary style={accordion.title} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>Which secondary market will we be listing on?</AccordionSummary>
                            <AccordionDetails style={accordion.content}>We will be listing on Magic Eden</AccordionDetails>
                        </Accordion>

                        <hr style={{margin: '4rem 0rem 0rem', height: '2px', backgroundColor: 'white', border: 'none'}} />
                    </FAQ>


                    {/* Links */}
                    <Links>
                        <h1 style={{marginBottom: '0.8rem', color: '#95befc'}}>Still have questions?</h1>
                        <p>Join our discord now follow our socials to look for the answers!</p>
                        <div style={{marginTop: '1.5rem', width: '30%', display: 'flex', justifyContent: 'space-between'}}>
                            <Button style={{backgroundColor: 'white'}} href='#'><FontAwesomeIcon icon={faDiscord}/> Discord</Button>
                            <Button style={{backgroundColor: 'white'}} href='#'><FontAwesomeIcon icon={faTwitter}/> Twitter</Button>
                            <Button style={{backgroundColor: 'white'}} href='#'><FontAwesomeIcon icon={faInstagram}/> Instagram</Button>
                        </div>
                    </Links>

                </Container>
                <Footer/>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <Fragment>
                <MobileNavContainer>
                    <img src={WhiteKKLogo} style={{height: '25px', width: '130px', marginRight: '2rem'}} alt='Logo'/>
                    {!open && <FontAwesomeIcon icon={faBars} onClick={openNavbar}/>}
                    {open && <FontAwesomeIcon icon={faTimes} onClick={closeNavbar}/>}
                </MobileNavContainer>
                <MobileContainer>
                    <MainImage src={KKFamPic} />
                    {/* Introduction of Koala Krew */}
                    <div style={introduction.mobileContainer}>
                        <div style={introduction.mobileContent}>
                            <h1 style={{lineHeight: '2.5rem', marginBottom: '0.8rem', color: '#95befc'}}>Welcome To Koala Krew</h1>
                            <p style={{fontSize: '18px'}}>We are a collection of 6,688 Koalas living within the Solana blockchain.
                            Every NFT represents a stake in Krew Brew, a revolutionary coffee brand where holders gain rights
                            to dividends paid out to shareholders.
                            Krew Members holding our Koalas will also gain exclusive access to our Krew Brew DAO.
                            </p>
                            <div style={{marginTop: '2rem'}}>
                                <p style={{marginBottom: '0.8rem', fontSize: '18px'}}>Join discord for our latest updates!</p>
                                <Button><FontAwesomeIcon icon={faDiscord}/>Discord</Button>
                            </div>
                            <div style={{marginTop: '2.5rem'}}>
                                <ReactPlayer 
                                url={Video1}
                                loop = 'true'
                                playing = 'true'
                                width = '100%'
                                muted = 'true'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Countdown timer */}
                    <div style={countdown.mobileContainer}>
                        {/* Actual Countdown */}
                        <div style={countdown.mobileTop}>
                            <Countdown date={'2022-02-05T19:00:00.00+00:00'} renderer={renderer}/>
                            <div style={countdown.mobileInformation}>
                                <span>Supply: 6,688</span>
                                <span>Price: 1.5 SOL</span>
                                <span>Date: TBA</span>
                            </div>
                        </div>
                        <a href='#' alt='Mint' style={countdown.mobileMint}>Mint Now</a>
                    </div>

                    {/* Content for "Learn More" */}
                    <div style={styling.mobileContent}>
                        <h1 style={{textAlign: 'center', marginBottom: '2rem', color: '#95befc'}}>About Us</h1>
                        <div style={{width: '100%'}}>
                            <h1 style={{fontSize: '22px', marginBottom: '0.8rem'}} id='learn-more'>Owning a Koala!</h1>
                            <p>Each Koala will be available for mint at 1.5 SOL, regardless of pre-sale
                                or public sale. 15 Koalas will not be mintable - these Koalas will be
                                safeguarded by the Kreators and will be used for Krew Brew marketing
                                campaigns post-mint. 
                                <br/>Interested in knowing what's ahead for this project? Visit our roadmap
                                <a style={{textDecoration: 'none', color: '#E349AA'}} href='/roadmap'> here</a>!
                            </p>
                        </div>
                        <div style={{marginTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{width: '100%', marginBottom: '2rem'}}>
                                <h1 style={{fontSize: '22px', marginBottom: '0.8rem'}}>What is Krew Brew?</h1>
                                <p>Krew Brew is Singapore's first revolutionary drinkable NFT! 
                                    Bringing across affordable coffee, we aim to disrupt the current 
                                    Read-To-Drink Coffee industry with our own custom recipes.
                                    Partnering with Koala Krew, Krew Brew offers more than just a drink. 
                                    Own Krew Brew and play a part in Singapore's 1st drinkable NFT!
                                    <br/>Head on to <a style={{textDecoration: 'none', color: '#E349AA'}} href='/krewbrew' alt='Krew Brew Website'>Krew Brew</a> to find out how you can be part of Krew Brew. 
                                </p>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <ReactPlayer
                                url={KKVid}
                                loop = 'true'
                                playing = 'true'
                                width = '100%'
                                muted = 'true'
                                />
                            </div>
                        </div>
                    </div>

                    {/* Perks */}
                    <div style={perks.mobileContainer}>
                        <h1 id='perks' style={{color: '#95befc', marginBottom: '0.8rem'}}>Koala Perks</h1>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={perks.mobileContent}>
                                <div style={perks.mobileIndividual}>
                                    <img style={perks.image} src={koala1} alt=''></img>
                                    <p>Nice Koala PFP to <br/>flex on your friends!</p>
                                </div>
                                <div style={perks.mobileIndividual}>
                                    {/* <img style={perks.image} src={koala1} alt=''></img> */}
                                    <p><FontAwesomeIcon icon={faDollarSign} style={perks.image}/></p>
                                    <p>Gain a share in the <br/>Krew Brew business</p>
                                </div>
                                <div style={perks.mobileIndividual}>
                                    {/* <img style={perks.image} src={koala1} alt=''></img> */}
                                    <p><FontAwesomeIcon icon={faBrain} style={perks.image}/></p>
                                    <p>Be part of making <br/>crucial business decisions</p>
                                </div>
                            </div>
                            <div style={{...perks.mobileContent, justifyContent: 'space-around', width: '90%'}}>
                                <div style={{...perks.mobileIndividual, width: '45%'}}>
                                    {/* <img style={perks.image} src={koala1} alt=''></img> */}
                                    <p><FontAwesomeIcon icon={faEnvelope} style={perks.image}/></p>
                                    <p>Be a part of our business <br/>and help in
                                    distributing Krew Brew all over the world
                                    (in your country of residence). </p>
                                </div>
                                <div style={{...perks.mobileIndividual, width: '45%'}}>
                                    {/* <img style={perks.image} src={koala1} alt=''></img> */}
                                    <p><FontAwesomeIcon icon={faHandshake} style={perks.image}/></p>
                                    <p>Synergies between Krew Brew and Koala
                                    Krew attracts more eyes to both businesses
                                    - it's a win-win for all.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kreators */}
                    <Team id='kreators' >
                        <h1 style={{color: '#95befc', marginBottom: '0.8rem'}}>Kreators</h1>
                        <div style={{marginBottom: '2rem'}}>
                            <h2 style={{marginBottom: '0.8rem'}}>Directors</h2>
                            <TeamContent>
                                <div style={team.mobileIndividuals}>
                                    <FamPic src={Koala1} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>LimKopi</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Krew Chief</span>
                                </div>
                                <div style={team.mobileIndividuals}>
                                    <FamPic src={Koala2} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>LimKopi</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Krew Creative</span>
                                </div>
                            </TeamContent>
                        </div>
                        <div style={{marginBottom: '2rem'}}>
                        <h2 style={{marginBottom: '0.8rem'}}>Koala Krew Team</h2>
                            <TeamContent style={{flexDirection: 'column'}}>
                                <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
                                    <div style={team.mobileIndividuals}>
                                        <FamPic src={Koala3} alt=''></FamPic>
                                        <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>Tarzan</h2>
                                        <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Lead Dev</span>
                                    </div>
                                    <div style={team.mobileIndividuals}>
                                        <FamPic src={Koala4} alt=''></FamPic>
                                        <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>xx</h2>
                                        <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Marketing Lead</span>
                                    </div>
                                </div>
                                <div style={{...team.mobileIndividuals, marginTop: '0.4rem'}}>
                                    <FamPic src={Koala5} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>xx</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Dev</span>
                                </div>
                            </TeamContent>
                        </div>
                        <div>
                        <h2 style={{marginBottom: '0.8rem'}}>Krew Brew Team</h2>
                            <TeamContent>
                                <div style={team.individuals}>
                                    <FamPic src={Koala6} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>DunderThunder</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Project Lead</span>
                                </div>
                                <div style={team.individuals}>
                                    <FamPic src={Koala7} alt=''></FamPic>
                                    <h2 style={{margin: '0.8rem 0rem 0.2rem'}}>Koffee Intern</h2>
                                    <span style={{padding: '4px 8px', color: 'white', backgroundColor: '#b81f7f', fontSize: '12px', borderRadius: '5px'}}>Dev</span>
                                </div>
                            </TeamContent>
                        </div>
                    </Team>

                    {/* FAQ */}
                    <FAQ>
                        <Accordion style={accordion.container} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary style={accordion.title} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>How to Mint?</AccordionSummary>
                            <AccordionDetails style={accordion.content}>Check out our "How to mint" guide on our Discord Server</AccordionDetails>
                        </Accordion>
                        <Accordion style={{...accordion.container, margin: '0.3rem 0rem 0.3rem'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary style={accordion.title} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>When is mint and how much per mint?</AccordionSummary>
                            <AccordionDetails style={accordion.content}>Mint Date: TBA <br/><br/>Mint Price: 1.5 SOL regardless of public/pre sale</AccordionDetails>
                        </Accordion>
                        <Accordion style={accordion.container} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary style={accordion.title} expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>Which secondary market will we be listing on?</AccordionSummary>
                            <AccordionDetails style={accordion.content}>We will be listing on Magic Eden</AccordionDetails>
                        </Accordion>

                        <hr style={{margin: '4rem 0rem 0rem', height: '2px', backgroundColor: 'white', border: 'none'}} />
                    </FAQ>


                    {/* Links */}
                    <MobileLinks>
                        <h1 style={{marginBottom: '0.8rem', color: '#95befc'}}>Still have questions?</h1>
                        <p>Join our discord now follow our socials to look for the answers!</p>
                        <div style={{marginTop: '1.5rem', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                            <Button style={{backgroundColor: 'white'}} href='#'><FontAwesomeIcon icon={faDiscord}/> Discord</Button>
                            <Button style={{backgroundColor: 'white'}} href='#'><FontAwesomeIcon icon={faTwitter}/> Twitter</Button>
                            <Button style={{backgroundColor: 'white'}} href='#'><FontAwesomeIcon icon={faInstagram}/> Instagram</Button>
                        </div>
                    </MobileLinks>

                </MobileContainer>
                <Footer/>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {ConditionalRendering()}
        </Fragment>
    )
}

export default LandingPage