import { Link } from 'react-router-dom';
import fileDownload from 'js-file-download';

import linkedinSVG from '../assets/icons/linkedin.svg'
import githubSVG from '../assets/icons/github.svg'
import curriculumVitaeSVG from '../assets/icons/curriculum-vitae.svg'

const RedesSociales = () => {
  const size = 23;

  return (
    <>
      <div className=' w-full flex justify-center p-1' >
          <Link to="https://linkedin.com/in/antonio-valdez-84b4549b/" target="_blank" rel="noopener noreferrer"><img className=" p-0.5 ml-3 mr3 hover:shadow hover:shadow-cyan-400 hover:bg-cyan-400" src={linkedinSVG} alt="linkedin" width={`${size}px`}/> </Link>
          <Link to="https://github.com/tonypeanut/" target="_blank" rel="noopener noreferrer"><img className=" p-0.5 ml-3 mr3 hover:shadow hover:shadow-cyan-400 hover:bg-cyan-400" src={githubSVG} alt="github" width={`${size}px`}/></Link>
          <a href='https://drive.google.com/file/d/1Cyh_AsLfJMZgsv9h904bBQmTcEop_55L/view?usp=drive_link' target='_blank'><img className=" p-0.5 ml-3 mr3 hover:shadow hover:shadow-cyan-400 hover:bg-cyan-400" src={curriculumVitaeSVG} alt="curriculum vitae" width={`${size}px`}/></a>
      </div>
    </>
  )
}

export default RedesSociales