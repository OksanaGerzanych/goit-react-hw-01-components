import styled from 'styled-components';

export const StatisticsBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  align-content: center;
  margin: 30px auto;
  background-color: rgba(255, 255, 255, 0.954);
  box-shadow: 0 0 10px #c6cccced;
`;

export const Title = styled.h2`
  margin: 20px 0px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  background-color: rgba(5, 59, 41, 0.669);
`;

export const Item = styled.li`
  width: 65px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  color: aliceblue;
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 20px;
`;

