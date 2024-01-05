import React from 'react';
import '../App.css';

const SingleAbout = (props) => {
  // Replace with the actual details of the team member
  const teamMember = {
    name: 'Vaibhav Dixit',
    position: 'Web Developer',
    bio: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    imageUrl: '/images/Banner.png', // Replace with the actual image URL
    additionalImageUrl: '/images/Vaibhav.png', // Replace with the additional image URL
  };

  // Apply styles based on the mode (light/dark)
  const myStyle = {
    color: props.mode === 'dark' ? '#042743' : 'black',
    borderRadius: '10px', // Add border-radius for a cleaner look
    boxShadow: props.mode === 'dark' ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.5)', 
    padding: '20px',
    };

  // Adjust styles specifically for the content section in dark mode
  if (props.mode === 'dark') {
    myStyle.color = 'white';
    myStyle.backgroundColor = '#042743';
  }

  return (
    <>
      {/* Banner Image */}
      <img
        src={teamMember.imageUrl}
        className="img-fluid mb-4"
        alt={teamMember.name}
      />
      x
      <div className="container my-2">

        {/* Two-column layout */}
        <div className="row">
        
          {/* Column for Content */}
          <div className="col-md-8">
            {/* Team Member Details */}
            <div style={{ width: '100%', ...myStyle }}>
              <div>
                <h2>{teamMember.name}</h2>
                <h4 className="mb-2 text-danger" >{teamMember.position}</h4>
                <p>{teamMember.bio}</p>
              </div>
            </div>

            {/* About Section */}
            <div className="my-4" style={myStyle}>
              <h3>About {teamMember.name}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Skills Section */}
            <div className="my-4" style={myStyle}>
              <h3>Skills</h3>
              <ul>
                <li>Web Development</li>
                <li>JavaScript</li>
                <li>React</li>
                {/* Add more skills as needed */}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="my-4" style={myStyle}>
              <h3>Contact {teamMember.name}</h3>
              <p>
                Feel free to reach out to {teamMember.name} through the following channels:
              </p>
              <ul>
                <li>Email: example@example.com</li>
                <li>Phone: +1 123 456 7890</li>
              </ul>
            </div>
          </div>

          {/* Column for Additional Image */}
          <div className="col-md-4" style={{ paddingTop: '80px' }}>
            <img
              src={teamMember.additionalImageUrl}
              className="img-fluid"
              alt={`${teamMember.name} Additional`}
              style={{
                transform: 'rotateX(10deg)', // Adjust the rotation for a 3D effect
                boxShadow: props.mode === 'dark' ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.5)',
                 // Add box shadow for a 3D effect
              }}
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default SingleAbout;
