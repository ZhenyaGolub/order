import { useState, useEffect } from 'react';
import { AudioStateType } from './form.types';
import {
  Button,
  FormComponent,
  FormWrapper,
  Input,
  Label,
  ModeWrapper,
  Point,
  Wrapper,
} from './form.styled';

import { RANGES_POINTS } from '../../utils/constants';

export const Form = () => {
  const [audio, setAudio] = useState<AudioStateType>({
    range: null,
    button: null,
  });

  useEffect(() => {
    setAudio({
      range: new Audio('/sounds/range.mp3'),
      button: new Audio('/sounds/button.mp3'),
    });
  }, []);

  const handleChangeInput = () => {
    audio.range?.play();
  };

  const handleChangeMode = () => {
    audio.button?.play();
  };

  return (
    <FormWrapper>
      <FormComponent>
        <Label>Кол-во предметов</Label>
        <Wrapper width="52%">
          {RANGES_POINTS.amount.map((item, index) => (
            <Point key={index} left={`calc(${index}*33%)`}>
              {item}
            </Point>
          ))}
          <Input
            type="range"
            min="2"
            max="5"
            step="1"
            onChange={handleChangeInput}
          />
        </Wrapper>
        <Label>Значения</Label>
        <Wrapper width="76%">
          {RANGES_POINTS.values.map((item, index) => (
            <Point key={index} left={`calc(${index}*20%)`}>
              {item}
            </Point>
          ))}
          <Input
            type="range"
            min="1"
            max="6"
            step="1"
            onChange={handleChangeInput}
          />
        </Wrapper>
        <ModeWrapper>
          <Button type="button" onClick={handleChangeMode}>
            По возрастанию
          </Button>
          <Button type="button" onClick={handleChangeMode}>
            По убыванию
          </Button>
        </ModeWrapper>
        <Button
          type="submit"
          padding="10px 30px"
          backgroundColor="#38DF7A"
          color="#FFFFFF"
          fontFamily="Helvetica"
        >
          Играть
        </Button>
      </FormComponent>
    </FormWrapper>
  );
};
