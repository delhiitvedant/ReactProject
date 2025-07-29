
const General=(props)=>{
    // console.log(props)
    // props.name="Ekta"
    // console.log(props.name);
    let{name,course}=props
 
    console.log(name)

    return (
        <>

        <div>I am a Child Component{name}{course}</div>
       
        </>
    )
}

export default General
