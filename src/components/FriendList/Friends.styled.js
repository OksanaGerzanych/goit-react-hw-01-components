import styled from "styled-components";

export const FriendsList = styled.ul`
display: flex;
gap: 15px;
flex-direction: column;
margin: 30px auto;
width: 320px;
align-content: center;
`;

export const Item = styled.li`
display: flex;
gap: 15px;
background-color: rgba(255, 255, 255, 0.954);
box-shadow: 0 0 10px #c6cccced; 
justify-content: flex-start;
align-items: center;
padding: 15px;
`;
export const Status = styled.span`
border: 10px solid transparent;
border-radius: 50%;
background-color: ${props => {
return props.Online ? 'green' : 'red'
}};


`;
export const AvatarImg = styled.img`
width: 70px;
height: inherit;`;
export const Name = styled.p`
font-size: 20px;
font-weight: bold;
`;