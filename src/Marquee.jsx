import NavBar from "./header/NavBar";

function Marquee({msg}){
    return(
    <>
    <NavBar/>
        <marquee style={{fontSize: '50px'}}>{msg}</marquee>
    </>
    )
}

export default Marquee;