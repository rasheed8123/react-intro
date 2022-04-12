import "../App.css"

export const Navbar=()=>{
    const arr2 = ["Services","Projects","About"]
    return (<div id="navbar">
    <div className="logo"><div>LOGOBAKERY</div></div>
    <div id="middle">{arr2.map((e)=>{
      return <div>{e}</div>
})}</div>
<div id="last"><button>Contact</button></div>

  </div>)
}
