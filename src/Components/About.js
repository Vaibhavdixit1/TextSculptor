import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }

    return (
        <div className="container">
            <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>What We Do ?? </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Discover the efficiency of TextUtils, a versatile text analysis tool that goes beyond character and word count statistics. With TextUtils, you can swiftly convert your text to uppercase or lowercase, clear formatting, copy with ease, and effortlessly remove extra spaces. What sets us apart is the unique feature allowing you to listen to the words you've written. Whether you're navigating character limits or enhancing the clarity of your content, TextUtils provides a comprehensive solution for quick and effective text management.
                        </div>
                    </div>
                </div>
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                    </div>
                    </div>
                </div> */}
            </div>

            <h2 className='my-4  text-center ' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>   <strong>Meet Our Team </strong> </h2>
           <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
   {/* 1st member */}
            <div className="card my-4" style={{ ...myStyle, width: '20rem' }}>
                <img src="/images/Vaibhav.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Vaibhav Dixit</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </p>
                    <a href="#" className="btn btn-dark" style={{ transition: 'background-color 0.3s ease' }}>
                        Know More About Me
                    </a>
                </div>
            </div>
            {/* 2nd member */}
            <div className="card my-4" style={{ ...myStyle, width: '20rem' }}>
                <img src="/images/man2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Vaibhav Dixit</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </p>
                    <a href="#" className="btn btn-dark" style={{ transition: 'background-color 0.3s ease' }}>
                        Know More About Me
                    </a>
                </div>
            </div>
            {/* 3rd member  */}
            <div className="card my-4" style={{ ...myStyle, width: '20rem' }}>
                <img src="/images/man3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Vaibhav Dixit</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </p>
                    <a href="#" className="btn btn-dark" style={{ transition: 'background-color 0.3s ease' }}>
                        Know More About Me
                    </a>
                </div>
            </div>
            {/* 4th */}
            <div className="card my-4" style={{ ...myStyle, width: '20rem' }}>
                <img src="/images/man1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Vaibhav Dixit</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </p>
                    <a href="#" className="btn btn-dark" style={{ transition: 'background-color 0.3s ease' }}>
                        Know More About Me
                    </a>
                </div>
            </div>
            
           </div>




        </div>
    )
}