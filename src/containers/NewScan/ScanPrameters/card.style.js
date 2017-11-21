import React from 'react';
import Cards from '../../../components/uielements/card';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const CardComp = props => <Cards {...props} />;

const Card = styled(CardComp)`
  .ant-card-head {
    background-color: #f3f3f3;
    border-bottom: 1px solid ${palette('border', 0)};

    .ant-card-head-title {
      color: ${palette('text', 0)};
    }
  }

  .ant-card-extra {
    a {
      color: ${palette('primary', 0)};
      text-decoration: none;

      &:focus {
        text-decoration: none;
      }
    }
  }

  .ant-card-body {
    p {
      font-size: 13px;
      color: ${palette('text', 3)};
      line-height: 1.5;
      margin-bottom: 14px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &.ant-card-bordered {
    border: 1px solid ${palette('border', 0)};

    .ant-card-head {
      border-bottom: 1px solid ${palette('border', 0)};
    }

    &:hover {
      border: 1px solid ${palette('border', 0)} !important;
    }
  }

  &.ant-card-loading {
    .ant-card-body {
      p {
        margin-bottom: 0;
      }
    }
  }

  .custom-card {
    padding: 10px 16px;
    h3 {
      color: ${palette('text', 1)};
      font-weight: 500;
    }
    p {
      color: ${palette('grayscale', 0)};
    }
  }

  .custom-image img {
    display: block;
  }

  .isoBoxWrapper{
    margin-left: 0;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    background-color: #f3f3f3;
    padding: 40px 50px 20px;
  }
  .scanParamWrapper{
    padding: 20px 30px 40px;

    .ant-checkbox-group-item{
      margin-right: 30px;
    }
  }
  .matchRateWrapper{
    padding: 0 30px;
    h3{
      padding-top: 6px;
    }
  }

  @media only screen and (max-width: 768px) {
    .scanParamWrapper {
      padding: 10px 0px 40px;
    }
    
    .matchRateWrapper {
      padding: 0;

      .ant-col-xs-24{
        margin-bottom:10px;
        .ant-slider{
          margin-right: 30px;
        }
      }
    }
  }
  @media only screen and (max-width: 576px) {
    .scanParamWrapper{
      .ant-checkbox-group-item{
        margin-right: 0px;
      }
    }
  }

  @media only screen and (max-width: 480px){
    .scanParamWrapper{
      padding: 10px 0px 20px;
      .ant-col-xs-8, .ant-col-xs-16{
        width: auto;
        margin-bottom: 17px;
      }      
  }

  @media only screen and (max-width: 331px){
    .scanParamWrapper{
      .ant-checkbox-wrapper{
        font-size: 10px;
      }
    }
  }
  /* @media only screen and (max-width: 992px) {
    .scanParamWrapper{
      display: grid;
      padding: 20px 30px 0;

      .ant-checkbox-group-item{
        margin-right: 0px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .matchRateWrapper{
      display: grid;
    }
  } */
`;

export default Card;
