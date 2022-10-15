import React from "react";
import Alert from 'react-bootstrap/Alert';
import style from "../header.module.css";
import Date from '../Date'

const HomeCont=()=>{
  return(
  <div>
  <Alert key='primary' variant='primary' className={style.alert}>
       <a className={style.alertContent}>A FLAGSHIP CONFERENCE : ICICC - 2023</a>
  </Alert>

  <h3 className={style.abtHeader}>About Conference</h3>
  <hr />
  <div className={style.flex}>
  <div className={style.abtContent}>
  <p>International Conference on Innovative Computing and Communication (ICICC 2023) is organised with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of Computing and Communication to a common forum. The primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners. Another goal is to promote the transformation of fundamental research into institutional and industrialized research and to convert applied exploration into real time application. Overall, the conference will provide the researchers and attendees with prospects for national and international collaboration and networking among universities and institutions from India and abroad for promoting research. ICICC- 2023 will be held at Shaheed Sukhdev College of Business Studies, University of Delhi, New Delhi. All the accepted papers (after double blinded peer review) will be published as proceedings of ICICC-2023 indexed by Scopus and other reputed databases.
  </p>
  <p>Paper Submission Link :<a> Easychair Submission</a></p>
  </div>
  <div style={{width:'20vw'}}>
<h3>Downloads</h3>
  <marquee  direction="up" className={style.marquee} style={{width:'20vw'}}>
  <a>Manuscript Guidelines </a>
  <hr style={{width:'15vw'}}/>
  <a>Checklist </a>
  <hr style={{width:'15vw'}}/>
  <a>Special Session Proposal Template </a>
  <hr style={{width:'15vw'}}/>
  <a>Icicc Brochure </a>
  <hr style={{width:'15vw'}}/>
  <a>Sponsorship Proposal </a>
  <hr style={{width:'15vw'}}/>

</marquee>
</div>
</div>

  <div className={style.flex}>

  <Date />
 
  <div className={style.marContainer} >
<h3>Notices</h3>
  <marquee  direction="up" className={style.marquee}>
  <p>ICICC - 2023 will be organised by Shaheed Sukhdev College of Business Studies, Delhi university, India on 17-18 February 2023.</p>
</marquee>
</div>
</div>

  </div>
);
};

export default HomeCont;
