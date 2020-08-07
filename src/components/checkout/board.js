import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import Logo from "../Image/atataPay.jpg";
import styled from "styled-components";

export default function PaymentInputs() {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  return (
    <Container>
      <div className="DummyCard">
        <div className="Top">
        <div className="CardNumber">
          <p> Card Number</p>
          <span>XXXX-XXXX-XXXX-4567</span>
        </div>
        <div className="mainLogo">
          <img src={Logo} />
        </div>
        </div>
        <div className="ExpLogo">
          <div className="expDate">
            <p>Exp. Date</p>
            <span>00/00</span>
          </div>
          <div className="CardLogo">
            <svg {...getCardImageProps({ images })} />
          </div>
        </div>
      </div>
      <div className="EnterCardDetails">
        <PaymentInputsWrapper {...wrapperProps}>
          <svg {...getCardImageProps({ images })} />
          <input {...getCardNumberProps()} />
          <input {...getExpiryDateProps()} />
          <input {...getCVCProps()} />
        </PaymentInputsWrapper>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  padding: 20px;
  margin: 5px auto;
  box-shadow: 2px 2px 10px var(--colorAsh);
  border-radius: 18px;
  font-family: "Muli", sans-serif !important;

  .DummyCard {
    width: 40%;
    height: 180px;
    margin: 5px auto;
    border-radius: 10px;
    padding: 2% 5%;
    box-shadow: 2px 2px 10px var(--colorAsh);
    background: #0e8502; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      160deg,
      #025402,
      #084e07,
      #0c470b,
      #0f410f,
      #183d16,
      #243a20,
      #2d372a,
      #343433
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      160deg,
      #025402,
      #084e07,
      #0c470b,
      #0f410f,
      #183d16,
      #243a20,
      #2d372a,
      #343433
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: var(--colorLight);
    
  .Top{
    display: flex;
    span{
      font-size: 13px;
    }
    .CardNumber{
      width: 100%;
    }
  .mainLogo {
    width: 70%;
    overflow: hidden;
    img {
      width: 45%;
      margin-left: 60px;
    }
  }
  }

    p {
      font-weight: 700;
      margin: 5% 0;
      color: #28a745;
    }
    .ExpLogo {
      display: flex;
      margin: 7% 0;
      .expDate {
        font-size: 12px;
      }
      .CardLogo {
        margin-left: 60%;
        margin-top: 20px;
      }
    }
  }
  .EnterCardDetails {
    width: 40%;
    margin: 2rem auto;
  }
`;
