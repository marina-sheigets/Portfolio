import React from 'react'
import './Experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience=()=>{
    return(
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Main Skills</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <AiFillCheckCircle className='experience_details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience_details">
                            <AiFillCheckCircle className='experience_details-icon'/>
                            <div>
                            <h4>CSS</h4>
                            <small className="text-light">Experienced</small>

                            </div>
                        </article>

                        <article className="experience_details">
                            <AiFillCheckCircle className='experience_details-icon'/>
                            <div>
                            <h4>JavaScript</h4>
                            <small className="text-light">Intermediate</small>

                            </div>
                        </article>
                      
                       
                        <article className="experience_details">
                            <AiFillCheckCircle className='experience_details-icon'/>
                            <div>
                            <h4>React</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/*End of FRONTEND */}


                <div className="experience_backend ">
                    <h3>Additional Skills</h3>
                    <div className="experience_content">
                    <article className="experience_details">

                                <AiFillCheckCircle className='experience_details-icon'/>
                                <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Intermediate</small>

                                </div>
                            </article>

                            <article className="experience_details">
                                <AiFillCheckCircle className='experience_details-icon'/>
                                <div>                                
                                    <h4>SQL</h4>
                                <small className="text-light">Intermideate</small>
                                </div>
                            </article>

                            <article className="experience_details">
                                <AiFillCheckCircle className='experience_details-icon'/>
                              <div>
                              <h4>Git</h4>
                                <small className="text-light">Intermediate</small>
                           
                              </div>
                               </article>
                            <article className="experience_details">
                                <AiFillCheckCircle className='experience_details-icon'/>
                                <div>
                                <h4>English</h4>
                                <small className="text-light">Intermediate</small>

                                </div>
                            </article>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;