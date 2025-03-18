import "./HelloWorld.css"

export default function HelloWorld (){
  const props = {
    text: "Halo bang Alfin"
  }
  
  return (
    <>
      <Header {...props}/>
      <Footer text = "Selamat anda telah menjadi suami Khodijah Izza!"/>
    </>
  )
}

function Header({text ="greeting"}){
  return(
    <h1 className="title">{text.toUpperCase()}</h1>
  )
}

function Footer({text="your dream?"}){
  return(
    <p className="content">{text}</p>
  )
}