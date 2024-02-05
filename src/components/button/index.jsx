import { ButtonContainer } from "./styled";

export const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
