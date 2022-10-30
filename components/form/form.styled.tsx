import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  width: 70%;
  max-width: 699px;
  padding: 10px;
  background: linear-gradient(#7f75f0, #101f32);
  border-radius: 40px;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: white;
  border-radius: 40px;
  @media (min-width: 768px) {
    padding: 37px;
  }
`;

export const Label = styled.label`
  margin: 0 0 30px 0;
  font-family: 'Helvetica', sans-serif;
  font-weight: 600 !important;
  font-size: 12px;
  font-weight: 400;
  color: #423f45;
  text-align: center;
  @media (min-width: 576px) {
    margin: 0 0 46px 0;
    font-size: 22px;
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width || 'auto'};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;
  @media (min-width: 576px) {
    margin: 0 0 54px 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  ::-webkit-slider-runnable-track {
    height: 21px;
    background-color: #ffd748;
    border-radius: 10px;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    height: 23px;
    width: 23px;
    border-radius: 50%;
    background-color: #104987;
    margin: -1px 0 0 0;
  }
`;

export const ModeWrapper = styled.div`
  margin: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
    margin: 0 0 100px 0;
  }
`;

export const Button = styled.button`
  padding: ${(props) => props.padding || '3px 21px'};
  font-family: ${(props) => props.fontFamily || 'Calibri, sans-serif'};
  font-weight: 600;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.backgroundColor || '#FFD748'};
  color: ${(props) => props.color || '#423F45'};
  cursor: pointer;
  &:nth-child(1) {
    margin: 0 0 15px 0;
  }
  @media (min-width: 576px) {
    font-size: 22px;
    &:nth-child(1) {
      margin: 0 36px 0 0;
    }
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    padding: ${(props) => (props.padding ? '18px 77px' : '3px 21px')};
  }
`;

export const Point = styled.div`
  position: absolute;
  top: -18px;
  color: #4f4b61;
  font-weight: 600;
  left: ${(props) => props.left};
  transform: translateX(-50%);
  @media (min-width: 576px) {
    font-size: 22px;
    top: -27px;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
