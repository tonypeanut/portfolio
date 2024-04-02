function Alerta({alerta}) {
    return (
      <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-cyan-400 to-cyan-600'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm`}>{alerta.msg}</div>
    )
  }
  
  export default Alerta