function Wrapper({children}){
    return(
        <div className="wrapper" style={{backgroundColor: 'grey', padding:'10px', margin: 'auto'}}>
                {children}
        </div>
    )
}
export default Wrapper