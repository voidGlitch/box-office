import styled from 'styled-components';

export const theme = {
  mainColors: {
    blue: '#007bff',
    lightBlue: '#4da6ff',
    darkBlue: '#004085',
    lightGreen: '#66cc80',
    green: '#28a745',
    orange: '#ff6600',
    gray: '#6c757d',
    lightGray: '#f1f1f1',
    red: '#d9534f',
  },
};

// Loader animation
export const LoadingSpinner = styled.div`
  margin: 50px auto;
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.mainColors.blue};
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Error wrapper with color and padding
export const ErrorWrapper = styled.div`
  color: #d9534f;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  background-color: #f8d7da;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

// Empty state wrapper for no shows
export const EmptyStateWrapper = styled.div`
  text-align: center;
  font-size: 18px;
  color: #6c757d;
  padding: 50px;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

// Make ShowGrid interactive with hover effects (example styling for ShowGrid items)
export const ShowGridItem = styled.div`
  position: relative;
  display: block;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.mainColors.lightBlue};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.mainColors.darkBlue};
  }

  p {
    color: ${({ theme }) => theme.mainColors.gray};
    font-size: 16px;
  }
`;
