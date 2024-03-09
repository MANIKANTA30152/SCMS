import { Typography, Button } from '@mui/material';
import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h3" gutterBottom><u>
        Welcome to the Counselling Visitor Management System (CVMS)</u>
      </Typography>
      <Typography variant="body1" paragraph>
        A Counselling Visitor Management System (CVMS) is a comprehensive software application designed to streamline the management of courses, students, and academic resources. It provides teachers with powerful tools to effectively organize, track, and enhance the learning experience.
      </Typography>
      <Typography variant="body1" paragraph>
        With CVMS, teachers can easily:
      </Typography>
      <ul style={{ textAlign: 'left' }}>
        <li>
          <Typography variant="body1">
            Manage course materials, assignments, and grading efficiently.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Track student progress and performance in real-time.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Communicate with students and parents through integrated messaging systems.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Generate reports and analytics to identify trends and improve teaching methodologies.
          </Typography>
        </li>
      </ul>
      <Typography variant="body1" paragraph>
        Whether you're a seasoned educator or just starting your teaching journey, CVMS empowers you to deliver engaging and impactful lessons while simplifying administrative tasks.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </div>
  );
};

export default Home;
