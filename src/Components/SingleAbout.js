// SingleAbout.js
import React from 'react';

const SingleAbout = () => {
  // Replace with the actual details of the team member
  const teamMember = {
    name: 'Vaibhav Dixit',
    position: 'Web Developer',
    bio: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    imageUrl: '/images/Banner.png', // Replace with the actual image URL
  };

  return (
    <>
      <img
        src={teamMember.imageUrl}
        className="img-fluid mb-4"
        alt={teamMember.name}
        // style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
    <div className="container my-2">
      {/* Banner Image */}

      {/* Team Member Details */}
      <div className="card" style={{ width: '50rem' }}>
        <div className="card-body">
          <h2 className="card-title">{teamMember.name}</h2>
          <h4 className="card-subtitle mb-2 text-muted">{teamMember.position}</h4>
          <p className="card-text">{teamMember.bio}</p>
        </div>
      </div>

      {/* About Section */}
      <div className="my-4">
        <h3>About {teamMember.name}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Skills Section */}
      <div className="my-4">
        <h3>Skills</h3>
        <ul>
          <li>Web Development</li>
          <li>JavaScript</li>
          <li>React</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="my-4">
        <h3>Contact {teamMember.name}</h3>
        <p>
          Feel free to reach out to {teamMember.name} through the following channels:
        </p>
        <ul>
          <li>Email: example@example.com</li>
          <li>Phone: +1 123 456 7890</li>
        </ul>
      </div>

      {/* Social Links */}
     
    </div>
    </>
  );
}

export default SingleAbout;
