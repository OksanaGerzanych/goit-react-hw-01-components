import styled from 'styled-components';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
  background-color: rgba(255, 255, 255, 0.954);
  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  background-color: rgba(255, 255, 255, 0.904);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 2px solid #7e6f7498;
`;

export const AvatarImg = styled.img`
  background-color: rgba(192, 185, 185, 0.425);
  border-radius: 50%;
  padding: 20px 10px 0px;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
`;
export const Tag = styled.p`
  font-size: 16px;
  color: rgba(66, 62, 62, 0.801);
`;
export const Location = styled.p`
  font-size: 16px;
  color: rgba(66, 62, 62, 0.801);
  margin-bottom: 30px;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  background-color: rgba(196, 187, 187, 0.945);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const Label = styled.span`
  margin-top: 15px;
  font-size: 16px;
  color: rgba(66, 62, 62, 0.801);
`;
export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const StatsItem = styled.li`
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
