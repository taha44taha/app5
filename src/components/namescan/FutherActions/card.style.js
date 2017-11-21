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
    h3 {
      i {
        zoom: 2;
        vertical-align: middle;
        padding-right: 4px;
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

  .ant-radio-group{
    padding: 20px 30px 40px;
    display: flex;
    h3 {
      padding-right: 20px;
    }
  }

  .isoBoxWrapper{
    margin-left: 0;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    background-color: #f3f3f3;
  }

  .moniteringOption{
    .ant-select{
      width: 33%;
    }
  }

  .riskOption{
    .ant-select{
      width: 33%;
    }
  }

  .commentArea{
    .ant-input{
      width: 60%;
    }
  }
  
  .FutherSavebtn{
    text-align: center;
  }
  @media only screen and (max-width:768px){
    .moniteringOption, .riskOption, .commentArea{
      margin-top: 15px;
      .ant-select, .ant-input{
        width: 100%;
      }      
    }    
  }
}
`;

export default Card;
