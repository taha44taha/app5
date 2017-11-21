import styled from 'styled-components';
import { palette } from 'styled-theme';
import { borderRadius } from '../../../config/style-util';
import WithDirection from '../../../config/withDirection';

const WDContactCardWrapper = styled.div`
  /* width: 100%;
  height: calc(100% - 145px);
  padding: 0 35px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex; */

  /* @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 767px) {
    padding: 0 20px;
  }

  @media only screen and (min-width: 767px) and (max-width: 990px) {
    flex-direction: column;
  } */

  /* .isoContactCardHead {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    flex-shrink: 0;
    margin-right: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '50px')};
    margin-left: ${props => (props['data-rtl'] === 'rtl' ? '50px' : 'inherit')};
    flex-shrink: 0;

    @media only screen and (max-width: 600px) {
      margin-bottom: 20px;
    }

    @media only screen and (min-width: 767px) and (max-width: 990px) {
      margin-bottom: 20px;
    }

    .isoPersonImage {
      width: 120px;
      height: 120px;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      overflow: hidden;
      ${borderRadius('5px')};

      .avatar-uploader {
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .isoPersonName {
      font-size: 15px;
      font-weight: 500;
      color: ${palette('text', 0)};
      line-height: 1.5;
      margin: 0;
    }
  } */
  background-color: #f3f3f3;
  .isoCommentHeader{
    display: flex;
  }
  .isoPersonImage{
    img{
      width: 88px
    }
  }
  .isoPersonName{
    padding-left: 20px;
    h1{
      color: #6161ff;
    }
    p{
      font-size: 18px;
    }
  }
  .isoContactInfoWrapper{
    margin-top: 30px;
    p{
      font-size: 18px;
    }
  }
  .isoBoxWrapper{
    float: left;
    margin-right: 0;
    padding: 40px 20px;
  }
  @media only screen and (max-width:602px){
    .isoPersonName{
      h1{
        font-size: 20px;
      }
      p{
        font-size: 16px;
      }
    }
    .isoContactInfoWrapper{
      p{
        font-size: 16px;
      }
    }
    .isoPersonImage{
      img{
        width: 74px
      }
    }
  }
  @media only screen and (max-width:542px){
    .isoPersonName{
      h1{
        font-size: 16px;
      }
      p{
        font-size: 12px;
      }
    }
    .isoContactInfoWrapper{
      p{
        font-size: 12px;
      }
    }
  }
  @media only screen and (max-width:406px){
    .isoCommentHeader{
      display: block;

      .isoPersonImage{
        text-align: center;
      }

      .isoPersonName{
        padding-left: 0;
        text-align: center;
      }
    }    
  }
`;

const ContactCardWrapper = WithDirection(WDContactCardWrapper);

export { ContactCardWrapper };
