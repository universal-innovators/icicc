import React from "react";
import style from "./header.module.css";

const Date=()=>{
  return(

  <div className={style.marContainer} >
<h3>Important Dates</h3>
  <marquee  direction="up" className={style.marquee} style={{width:"30vw"}} >

  <p>Manuscript Submission Deadline<br />
September 15th, 2022</p>
  <hr />
<p>
Notification of first review<br />
October 30th, 2022
<hr />
</p>
<p>
Submission of revised manuscript<br />
November 30th, 2022
<hr />
</p>
<p>
Notification of Acceptance / Rejection<br />
December 15th, 2022
<hr />
</p>
<p>
Final manuscript due<br />
December 31st, 2022
<hr />
</p>
<p>
Registration Deadline<br />
January 15th, 2023
<hr />
</p>
<p>
Final Paper Due<br />
January 30th, 2023
<hr />
</p>

  </marquee>
  
  </div>

 
);
};

export default Date;
