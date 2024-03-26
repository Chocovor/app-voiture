function Wrapper({children}){
    return(
        <div className="wrapper" style={{backgroundColor: 'grey', width:'400px', padding:'10px', margin: 'auto'}}>
                {children}
        </div>
    )
}
export default Wrapper