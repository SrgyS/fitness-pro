import styled from 'styled-components'

export const StyledUserMenu = styled.div`
  position: absolute;
  top: 75px;
  right: 0;
  z-index: 2;
  max-width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;

  border: 2px solid #e2e8f0;
`
export const StyledUserMenuList = styled.ul`
  list-style: none;
  padding: 0;
`
export const StyledMenuItem = styled.li`
  margin-bottom: 10px;
  transition: all 0.4s;
  cursor: pointer;

  :hover {
    color: rgba(88, 14, 162, 0.7);
  }
`
export const StyledMenuButton = styled.button`
  all: unset;
`
