const ProgressBar = ({dominio}) => {
  return (
    <>
        <div className="w-full h-1 bg-gray-200 rounded-full flex overflow-hidden">
            { parseInt(dominio) >= 1 && <div className="h-full w-1/5 from-cyan-400 to-cyan-500 bg-gradient-to-r"></div> }
            { parseInt(dominio) >= 2 && <div className="h-full w-1/5 from-cyan-500 to-cyan-600 bg-gradient-to-r"></div> }
            { parseInt(dominio) >= 3 && <div className="h-full w-1/5 from-cyan-600 to-cyan-700 bg-gradient-to-r"></div> }
            { parseInt(dominio) >= 4 && <div className="h-full w-1/5 from-cyan-700 to-cyan-800 bg-gradient-to-r"></div> }
            { parseInt(dominio) >= 5 && <div className="h-full w-1/5 from-cyan-800 to-cyan-900 bg-gradient-to-r"></div> }
        </div>
    </>
  )
}

export default ProgressBar