import { InputContainer } from "./styled";

export const Input = ({value}) => {
    return (
        <InputContainer>
            <input disabled value={value} />
        </InputContainer>
    )
}