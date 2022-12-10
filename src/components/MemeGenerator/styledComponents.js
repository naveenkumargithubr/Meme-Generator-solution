// Style your components he
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: skyblue;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding: 30px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1120px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 32px;
  color: #1e293b;
  @media screen and (min-width: 768px) {
    font-size: 34px;
    text-align: left;
  }
`

export const MemeFormGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-size: cover;
  height: 300px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 50px;
  background-image: url(${props => props.backgroundImage});
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const TextContent = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 32px;
  color: #ffffff;
`

export const MemeFormGenerator = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and(min-width: 768px) {
    width: 40%;
  }
`

export const CustomLabel = styled.label`
  font-size: 16px;
  font-weight:500;
  font-family:"Open Sans"
  color :#7e858e;
  line-height: 1.5;
`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`
export const CustomInputSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 16px;
  padding: 12px 14px 12px 14px;
`

export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-size: 14px;
  padding: 10px 12px 10px 12px;
  border: none;
  outline: none;
  border-radius: 6px;
  height: 40px;
  cursor: pointer;
`
