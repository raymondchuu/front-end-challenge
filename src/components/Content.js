import React from 'react';
import '../css/Content.css';
import { ReactComponent as Logo1 } from '../Media/image1.svg';
import { ReactComponent as Logo2 } from '../Media/image2.svg';
import { ReactComponent as Logo3 } from '../Media/Icon.svg';
import { ReactComponent as Logo4 } from '../Media/Icon2.svg';
import { ReactComponent as Logo5 } from '../Media/Icon3.svg';
import { ReactComponent as Logo6 } from '../Media/Icon4.svg';

import { ReactComponent as Logo7 } from '../Media/C1.svg';
import { ReactComponent as Logo8 } from '../Media/c2.svg';
import { ReactComponent as Logo9 } from '../Media/c3.svg';
import { ReactComponent as Logo10 } from '../Media/c4.svg';
import { ReactComponent as Logo11 } from '../Media/c5.svg';
import { ReactComponent as Logo12 } from '../Media/c6.svg';
import { ReactComponent as Logo13 } from '../Media/quote.svg';


const Content = () => {
    return (
        <div>
            <div className="container">
                <div className="left-column-text">
                    <p style={{fontSize: '48px', marginBottom: '0px'}}>Unilimited is Over Crowded</p>
                    <p style={{ fontSize: '18px', color: '#8B90A1',}}>The word is real content during design can distract designers and design review teams alike away from the design, and insisting on always.</p>
                    <a className="hire-button">Hire Us Now</a>
                </div>
                <div className="right-column-image">
                    <Logo1 width="90%" height="90%"/>
                </div>
            </div>
            <div className="introduction">
                <div style={{display: 'block', margin: 'auto', width: '80%', paddingTop: '1%'}}>
                    <div className="left-image">
                        <Logo2 />
                    </div>
                    <div className="right-text">
                        <p style={{fontSize: '32px', fontWeight: '600'}}>Hello! My name is <span style={{color: '#2D25C8'}}>Andrew Theodore</span></p>
                        <p className="description">The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you end up reviewing and negotiating the content. Design first, with real content in mind (of course!), but don’t drop in the real content until the design is well on its way. Using filler text avoids the inevitable argumentation that accompanies.</p>
                        <p style={{fontSize: '18px'}}>“ Real content during design can distract designers and design review teams alike away from design insisting on always use publication-ready content a real drag on the design process.”</p>
                        <p className="description">Only use filler text that has been edited for length and format to match the characteristics of real content as closely as possible, and use real content where possible. Design is an evolutionary process, and filler text is just one tool in your progress-pushing arsenal. Use it where it makes sense to use it, and pull it once the natural process indicates.</p>
                        <p style={{fontSize: '22px'}}>I Learned finally quality, time, price, are inverve proposal.!</p>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="text">
                    <p>Like Andrew, We don't your step-back from your success</p>
                    <p style={{color: '#2D25C8'}}>Need Quality? have Time? Hire Us</p>
                    <p style={{fontSize: '28px', color: '#4B566E'}}>For</p>
                </div>
                <div className="section-container" >
                    <div className="s1">
                        <Logo3 />
                        <p className="subtitle">Product Design</p>
                        <p className="sub-text">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth por scientie..,</p>
                    </div>
                    <div className="s2">
                        <Logo4 />
                        <p className="subtitle">Development</p>
                        <p className="sub-text">At solmen va esser necessi far uniform grammatica, pronunciation elu sommun paroles..,</p>
                    </div>
                    <div className="s3">
                        <Logo5/>
                        <p className="subtitle">Testings</p>
                        <p className="sub-text">Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores..,</p>
                    </div>
                    <div className="s4">
                        <Logo6 />
                        <p className="subtitle">Deployment</p>
                        <p className="sub-text">Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules..,</p>

                    </div>
                </div>
            </div>
            <div className="quote-container">
                <div className="sub-quote-container">
                    <p className="quote-title">See, What Jenny, Giga, Davis telling about us</p>
                    <div className="left-quote">
                        <p>“The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you’ll end up reviewing the co.”</p>
                        <p style={{fontSize: '20px', color: 'black'}}>Lurch Schpellchek</p>
                        <p style={{lineHeight: '0'}}>Graphic Design</p>
                    </div>
                    <div className="right-quote">
                        <div style={{paddingLeft: '40px'}}>
                        <p>“Using real content during design can distract designers and design review teams alike away from the design, and insisting on always using publication-ready content can be a real.”</p>
                        <p style={{fontSize: '20px', color: 'black'}}>Fleece Marigold</p>
                        <p style={{lineHeight: '0'}}>Web Designer</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="section4">
                <div className="projects">
                    <p className="title">Some of our Projects</p>
                    <div  style={{display: 'inline-block', marginBottom: '5%'}}>
                        <Logo7 className="project" style={{marginRight: '200px'}}/>
                        <Logo8 className="project" style={{marginRight: '200px'}}/>
                        <Logo9 className="project" style={{marginRight: '200px'}}/>
                        <Logo10 className="project" style={{marginRight: '30px'}}/>


                    </div>
                    <div>
                        <Logo11 className="project" style={{marginRight: '150px'}}/>
                        <Logo12 className="project" style={{marginLeft: 'px'}} />
                    </div>
                    <p style={{marginTop: '100px', marginBottom: '0'}}>Don't forget to check us on Dribbble Behance</p>
                </div>
            </div>
            <div className="section5">
                <div className="left-column">
                    <p className="footer-text">Forget Andrew Experience, Wanna Jenny's experience?</p>
                </div>
                <div className="right-column">
                    <a className="hit-button">Hit Us Now</a>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    );
}

export default Content;