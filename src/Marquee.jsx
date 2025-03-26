import Ender from "./footer/Ender";
import NavBar from "./header/NavBar";

function Marquee({msg}){
    return(
    <>
    <NavBar/>
        <marquee style={{fontSize: '50px'}}>{msg}</marquee>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />        <br />
        <br />
        <br />        <br />
        <br />
        <br />        <br />
        <br />
        <br />
    <Ender/>
    </>
    )
}

export default Marquee;