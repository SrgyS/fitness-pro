import styled from 'styled-components'
import stickerSvg from '../../assets/img/sticker.svg'

export const StyledPromo = styled.section``

export const PromoSubtitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.05px;
  opacity: 0.5;
  color: #fff;
  margin-top: 0;
  margin-bottom: 17px;
`
export const ContentWrapper = styled.div`
  position: relative;
`
export const PromoTitle = styled.h1`
  display: inline-block;
  max-width: 830px;
  color: #f4f4ff;
  font-size: 60px;
  font-weight: 400;
  line-height: 55px;
  letter-spacing: -1.169px;
  margin: 0;
`

export const PromoSticker = styled.div`
  position: absolute;
  top: 0;
  right: -70px;
  width: 212px;
  height: 180px;
  text-align: center;

  flex-direction: column;

  background-image: url(${stickerSvg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    transform: rotate(15.957deg);
    color: #ff8071;
    font-size: 20px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.15px;
    width: 149px;
  }
`
