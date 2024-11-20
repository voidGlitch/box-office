import styled from 'styled-components';

export const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  transition: all 0.3s ease-in-out; /* Smooth transition effect */

  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }

  &:focus {
    border-color: ${({ theme }) => theme.mainColors.blue};
    box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.mainColors.blue};
  }

  /* Responsive design for smaller devices */
  @media only screen and (max-width: 600px) {
    width: 150px;
    padding: 10px 12px;
    font-size: 13px;
  }
`;

export const RadioInputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  flex-wrap: wrap; /* Allow the radio buttons to wrap on smaller screens */

  div {
    margin: 0 15px;
    transition: all 0.3s ease-in-out; /* Smooth transition effect */

    &:hover {
      transform: scale(1.05); /* Scale effect on hover */
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Slight shadow effect */
    }

    /* Responsive design for radio buttons */
    @media only screen and (max-width: 600px) {
      margin: 10px; /* Less margin for smaller screens */
    }
  }
`;

export const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;

  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    transition: all 0.3s ease-in-out; /* Smooth transition effect */

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) =>
        theme.mainColors.darkBlue}; /* Darker shade on hover */
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2); /* Slight shadow effect */
    }
  }

  /* Responsive design for smaller devices */
  @media only screen and (max-width: 600px) {
    button {
      padding: 10px 30px; /* Smaller padding on smaller screens */
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 400px) {
    button {
      padding: 8px 20px; /* Even smaller padding for very small screens */
      font-size: 13px;
    }
  }
`;
