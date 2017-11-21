import React from 'react';
import Cards from '../../../components/uielements/card';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const CardComp = props => <Cards {...props} />;

const Card = styled(CardComp) `
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

  .ant-calendar-picker{
    input {
      height: 42px;
    }
  }

  @media only screen and (max-width: 867px) {
    .ant-radio-group{
      padding: 20px 30px;
    }
  }

  @media only screen and (max-width: 767px) {
    .ant-radio-group{
      padding: 10px 0px 20px;
    }
  }

  @media only screen and (max-width: 461px) {
    .ant-radio-group{
      display: block;
      h3{
        margin-bottom: 17px;
      }
    }
  }
`;

export default Card;
