import styled from "styled-components";
import { Field, Form } from "formik";
import { IMaskInput } from "react-imask";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";

export const Header = styled.header`
  width: 100%;
  position: relative;
  z-index: 55;
  padding: 20px 0;
  background: rgb(115, 83, 247);
  background: linear-gradient(
    90deg,
    rgba(115, 83, 247, 1) 0%,
    rgba(201, 109, 255, 1) 100%
  );
`;

export const Main = styled.main`
  background: #15151c;
  padding-bottom: 100px;
`;

export const ContainerInfo = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media (max-width: 768px) {
    display: grid;
    justify-items: center;
    gap: 20px;

    :nth-child(2n) {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 20px 0;
  position: relative;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  color: #fff;
  padding-bottom: 40px;
  line-height: 4.6rem;
  padding-top: 30px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 3.6rem;
  }

  @media (max-width: 425px) {
    font-size: 30px;
    line-height: 2.3rem;
  }

  @media (max-width: 375px) {
    font-size: 28px;
  }
`;

export const TitleSpan = styled.span`
  color: #7252f4;
  padding-left: 10px;
`;

export const ButtonInfo = styled.a`
  background: #57a638;
  padding: 10px 20px;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  position: relative;

  &:hover {
    opacity: 0.8;
    color: #fff;
  }
`;

export const TextInfo = styled.p`
  font-weight: 500;
  color: #fff;
  position: relative;
  line-height: 1.6rem;
  padding: 20px 0;
  font-size: 22px;

  @media (max-width: 425px) {
    text-align: unset;
    font-size: 20px;
  }

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

export const LightImg = styled.div`
  position: absolute;
  top: -20%;
  width: 100%;

  img {
    width: 100%;
  }
`;

export const DgImg = styled.div`
  width: 172px;
  padding-top: 40px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

export const DgBackground = styled.div`
  position: absolute;
  left: -13%;
  width: 35%;
  top: 165px;

  img {
    width: 100%;
  }
`;

export const TextMarketing = styled.div`
  font-weight: 700;
  color: #7252f4;
  font-size: 80px;
  padding: 40px 0;
  display: grid;
  line-height: 2.7rem;

  @media (max-width: 425px) {
    font-size: 60px;
    line-height: 1.8rem;
    span {
      font-size: 45px !important;
    }
  }

  @media (max-width: 320px) {
    font-size: 52px;
  }

  span {
    color: #dbdbdb;
    font-size: 60px;
    transform: rotate(-2deg);
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 425px) {
    display: grid;
  }

  @media only screen and (max-width: 610px) and (min-width: 426px) {
    display: grid;
  }
`;

export const TextForm = styled.p`
  font-weight: 500;
  color: #fff;
  position: relative;
  line-height: 1.6rem;
  text-align: initial;
  padding: 15px 0;
  font-size: 22px;

  span {
    color: #7252f4;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media (max-width: 425px) {
    font-size: 20px;
    text-align: unset;
  }

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

export const FormStyledField = styled(Form)`
  padding: 20px 20px;
  border: 2px solid #7453f8;
  border-radius: 30px;

  @media only screen and (max-width: 610px) and (min-width: 426px) {
    width: 75%;
    margin: 0 auto;
  }
`;

export const StyledField = styled(Field)`
  display: flex;
  font-size: 14px;
  padding: 5px 10px;
  margin: 20px 0px;
  border: none;
  background: #dadada;
  color: #857775;
  width: 220px;
  border-radius: 4px;

  @media (max-width: 425px) {
    margin: 20px auto;
  }

  @media only screen and (max-width: 610px) and (min-width: 426px) {
    margin: 20px auto;
  }
`;

export const IMask = styled(IMaskInput)``;

export const SelectEmployees = styled.select`
  display: flex;
  font-size: 14px;
  padding: 5px 10px;
  margin: 20px 0px;
  border: none;
  background: #dadada;
  color: #857775;
  width: 220px;
  border-radius: 4px;

  @media (max-width: 425px) {
    margin: 20px auto;
  }

  @media only screen and (max-width: 610px) and (min-width: 426px) {
    margin: 20px auto;
  }
`;

export const ButtonForm = styled.button`
  background: #57a638;
  padding: 15px 20px;
  font-size: 16px;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  border: none;

  :disabled {
    opacity: 0.8;
  }
`;

export const TitleDatesCurrent = styled.h2`
  font-weight: bold;
  font-size: 36px;
  color: #7252f4;
  padding-bottom: 60px;

  @media (max-width: 425px) {
    padding-bottom: 0px;
  }

  @media (max-width: 375px) {
    font-size: 32px;
  }
`;

export const TableDatesCurrent = styled.div`
  display: grid;
  grid-template-columns: 250px 250px;
  justify-items: center;
  row-gap: 50px;
  justify-content: center;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const CardDatesCurrent = styled.div`
  max-width: 190px;
  background: #181820;
  padding: 30px 15px;
  border-radius: 20px;
  height: 216px;
  -webkit-box-shadow: 0px 5px 15px 15px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 5px 15px 15px rgba(0, 0, 0, 0.05);
  transition: transform .2s;

  :hover {
    transform: scale(1.1); 
  }
`;

export const PercentageDatesCurrent = styled.p`
  font-size: 34px;
  font-weight: 600;
  color: #7252f4;
  padding-bottom: 10px;
`;

export const TextDatesCurrent = styled.span`
  font-size: 16px;
  color: #e4e4e4;
  font-weight: 400;
`;

export const TitleItemsPackage = styled.h2`
  font-weight: 600;
  font-size: 36px;
  color: #fff;
  line-height: 2.8rem;
  padding-top: 30px;

  span {
    color: #7252f4;
  }

  @media (max-width: 425px) {
    font-size: 30px;
    line-height: 2.3rem;
  }

  @media (max-width: 375px) {
    font-size: 28px;
  }
`;

export const ImgItemsPackage = styled.div`
  width: 550px;
  margin: 0 auto;
  padding-bottom: 50px;

  img {
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }

  @media only screen and (max-width: 610px) and (min-width: 426px) {
    width: 100%;
  }
`;

export const ButtonInfoPackage = styled.a`
  background: #57a638;
  padding: 15px 30px;
  font-size: 26px;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  position: relative;

  &:hover {
    opacity: 0.8;
    color: #fff;
  }

  @media (max-width: 425px) {
    font-size: 22px;
  }

  @media (min-width: 375px) {
    font-size: 20px;
  }
`;

export const ErrorMessage = styled.div`
  color: #e63838;
  font-size: 10px;
`;

export const SliderCarousel = styled(Slider)`
  @media (min-width: 451px) {
    display: none;
  }
`;

export const ButtonModal = styled(Button)`
  background-color: #7252f4;
  border: none;

  &:hover {
    opacity: 0.8;
    background-color: #7252f4;
  }

  &:focus {
    background-color: #7252f4;
  }

  &:focus-visible {
    background-color: #7252f4;
  }

  &:active {
    background-color: #7252f4 !important;
  }
`;

export const Navbar = styled.nav `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`

export const ListItems = styled.ul `
  display: flex;
  align-items: center;
  gap: 20px;
  justify-items: center;

  a {
    text-decoration: none;
    color: white;
  }
`