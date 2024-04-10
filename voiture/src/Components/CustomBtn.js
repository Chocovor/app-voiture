const Btn = ({btnStyle, children, handleClick}) => {


    const customBtn = {
        backgroundColor: "grey",
        border:'none', 
        color:"white", 
        fontSize: '19px',
        padding:'15px 30px',
        textAlign:'center',
        textDecoration:'none',
        borderRadius: '7px',
        display: 'block',
        margin: '5px auto'
    }
    
    return(
        <button 
            style={{...customBtn, ...btnStyle}}
            onClick={handleClick}
        >{children}</button>
    )
}
export default Btn;