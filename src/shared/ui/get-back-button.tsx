import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:disabled {
    background-color: #d6d6d6;
    cursor: not-allowed;
  }
`;
const GetBackButton = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(-1)}>Get Back</Button>;
};

export default GetBackButton;
