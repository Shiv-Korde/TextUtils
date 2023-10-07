import React,{useState} from 'react';

export default function About(props) {

    // const [myStyle,setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    const myStyle={
        color: props.mode==='dark'?'white':'#0e1836',
        backgroundColor: props.mode==='dark'?'#1d3d60':'white'
    }

    // const [btnStyle,setBtnStyle] = useState("Enable Dark Mode");

    // const toggleTheme=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid white'
    //         })
    //         setBtnStyle("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnStyle("Enable Dark Mode")
    //     }
    // }

    return (
        <>
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}} >
                <h2>About Us</h2>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your Text</strong>
                            </button>
                        </h2>
                        <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This is the first item's accordion body.It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div style={myStyle} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This is the second item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browse Compatible</strong>
                            </button>
                        </h2>
                        <div style={myStyle} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button onClick={toggleTheme} type="button" className="btn btn-primary">{btnStyle}</button>
            </div> */}
        </>

    )
}
