import styled from "styled-components";


export const Transactions = styled.table`
text-align: center;
align-items: center;
margin-top: 15px;
box-shadow: 0 0 10px #c6cccced;
border: 2px solid #7e6f7498;
`;

export const Thead = styled.thead`
background-color: rgb(102,102,153);
border-bottom: 2px solid #7e6f7498;
& Tr {
   color: white; 
   & th{
   padding: 20px 30px;
   width: 200px;
   font-size: 18px;
   }
}
`;


export const Tr = styled.tr`
font-size: 16px;
color: rgb(136, 137, 138);
	& td {
        padding: 10px 0px;
        border-bottom: 2px solid #7e6f7498;

	}
	&:nth-of-type(even) {
		background-color: rgb(204, 204, 255);
	}
`;


