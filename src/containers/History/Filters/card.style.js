import React from 'react';
import Cards from '../../../components/uielements/card';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const CardComp = props => <Cards {...props} />;

const Card = styled(CardComp)`
  .ant-card-head {
    background-color: ${palette('grayscale', 5)};
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

  .FilterbtnWrapper{
    text-align: center;
  }

  .dataSacnModal{
    display: grid;
    span{
      font-size: 14px;
      font-weight: 500;
      color: #323332;
      line-height: 1.2;
    }
    .ant-btn{
      margin-top: 21px;
      width: 90%;
      span{
        color: #fff;
      }
    }
  }  

  @media only screen and (max-width: 1030px){
    .ant-btn-primary{
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 867px){
    .dataSacnModal{
      span{
        margin-top: 17px;   
      }
    }
  }
  @media only screen and (max-width: 768px){
    .dataSacnModal{
      .ant-btn{
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 991px){
    .ant-btn-primary{
      margin-right: 30px;
    }
  }
  @media only screen and (max-width: 327px){
    .ant-btn-primary{
      margin-right: 10px;
    }
  }
`;

export default Card;
