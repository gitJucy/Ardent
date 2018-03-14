import React from 'react'
import { withSiteData } from 'react-static'
import bg from '../bg.png'
import fb from '../Facebook.svg'
import ig from '../Instagram.svg'
import twt from '../Twitter.svg'
export default withSiteData(() => (
  <div>
    <div>
      <img style={{
        backgroundSize:'cover',
        zIndex:'-2',
        width:'100vw',
        minHeight:'94vh'
      }}src={bg}/>
      <h1 style={{ 
        position:'absolute',
        bottom:'10rem',
        left:'75vw',
        color:'white',
        fontSize: '5em',
        textShadow:'1px 5px 3px rgba(0,0,0,.8)',
        paddingRight:'5rem'
        }}> We are Ardent. </h1>
    </div>
    <div className='about'>
      <h1>Our Mission</h1>
      <p>We sell forklifts and other material moving epuipment.  We have a passion for providing the highest level experience for our customers, no matter what it takes.  We are driven to bring you the right tool for the job, every job.  We sell forklifts and other material moving epuipment.  We have a passion for providing the highest level experience for our customers, no matter what it takes.  We are driven to bring you the right tool for the job, every job.  We sell forklifts and other material moving epuipment.  We have a passion for providing the highest level experience for our customers, no matter what it takes.  We are driven to bring you the right tool for the job, every job.  We sell forklifts and other material moving epuipment.  We have a passion for providing the highest level experience for our customers, no matter what it takes.  We are driven to bring you the right tool for the job, every job.</p>
    </div>
    <div className='social'>
        <a href='#'src={fb}/>
        <a href='#'src={ig}/>
        <a href='#'src={twt}/>
      </div>

  </div>
))
