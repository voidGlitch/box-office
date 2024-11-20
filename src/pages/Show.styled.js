import styled from 'styled-components';

// Wrapper for the entire page with padding and responsive behavior
export const ShowPageWrapper = styled.div`
  padding: 0 20px;
  transition: padding 0.3s ease; /* Smooth transition for padding */

  @media only screen and (min-width: 516px) {
    padding: 0 40px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 60px;
  }

  @media only screen and (min-width: 992px) {
    padding: 0 80px;
  }

  /* Adding background color and a slight shadow to improve visual interaction */
  background-color: #f8f9fa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  /* Make sure it's flexible for content inside */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ensure full page height */
`;

// Block to hold information with hover effects
export const InfoBlock = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; /* Smooth transition for all interactive effects */
  width: 100%;
  max-width: 800px; /* Limit width for readability */

  &:hover {
    background-color: #f0f0f0; /* Change background on hover */
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Enhance shadow effect */
    transform: translateY(-5px); /* Lift the block slightly */
  }

  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
    color: #333; /* Default text color */
    transition: color 0.3s ease; /* Transition for text color */
  }

  /* Make h2 responsive and adjust font size on smaller screens */
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 18px; /* Smaller font size on mobile */
    }
  }

  &:hover h2 {
    color: #007bff; /* Change text color on hover */
  }
`;
