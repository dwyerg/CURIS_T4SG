import styled from 'styled-components';

export const PurposeImg = styled.div`
  text-align: center;
  height: 420px;
  overflow: hidden;

  img {
    width: 25vw;
    background-color: white;
    padding: 0 75px;

    @media screen and (max-width: 480px) {
      padding: 5px;
    }
  }

  button {
    background-color: white;
    border: none;
    font-size: 18pt;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

`;

export const AllPurposeImgs = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;`

export const SubPurposeCont = styled.div`
  display: flex;
`
export const PurposeText = styled.div`
  font-size: 14pt;
  width: 20vw;
  height: 500px;
  margin-top: 25px;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`
export const GreyLine = styled.div`
  background-color: #DFDFDF;
  width: 3px;
  height: 250px;
  margin: 0 30px;

  @media screen and (max-width: 480px) {
    height: 100px;
    margin: 10px;
    width: 1px;
  }
`
