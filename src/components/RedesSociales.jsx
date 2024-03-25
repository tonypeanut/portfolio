import { Link } from 'react-router-dom';
import fileDownload from 'js-file-download';

import linkedinSVG from '../assets/linkedin.svg'
import githubSVG from '../assets/github.svg'
import curriculumVitaeSVG from '../assets/curriculum-vitae.svg'

const RedesSociales = () => {
  const size = 20;

  const handleDownload = () =>{
    const pdfUrl = '../assets/CV Antonio Valdez Aguayo- spanish.pdf'
    fileDownload(pdfUrl, '../assets/CV Antonio Valdez Aguayo- spanish.pdf')

  }

  return (
    <>
      <div className=' w-full flex justify-center p-1' >
          <Link to="https://linkedin.com/in/antonio-valdez-84b4549b/" target="_blank" rel="noopener noreferrer"><img className=" ml-3 mr3" src={linkedinSVG} alt="linkedin" width={`${size}px`}/> </Link>
          <Link to="https://github.com/tonypeanut/" target="_blank" rel="noopener noreferrer"><img className=" ml-3 mr3" src={githubSVG} alt="github" width={`${size}px`}/></Link>
          <button onClick={handleDownload}><img className=" ml-3 mr3" src={curriculumVitaeSVG} alt="curriculum vitae" width={`${size}px`}/></button>
      </div>
    </>
  )
}

export default RedesSociales