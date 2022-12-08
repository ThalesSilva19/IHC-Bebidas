import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: white;
    transition-duration: 800ms;
  }

  a:hover {
    color: gray;
  }
  .nav__menu-bar{
    display: flex;
    flex-direction: column;
    right: 2em;
    row-gap: 6px;
    cursor: pointer;
  }
  .nav__menu-bar div{
    width: 40px;
    height: 4px;
    background-color: black;
    border-radius: 2px;
  }
  .nav__menu-list{
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 166px;
    width: 200px;
    right: -216px;
    padding-left: 16px;
    transition: all 0.2s;
    height: calc(24em);
    background-color: #FFB600;
    z-index: 100;
  }
  .nav__close {
    position: relative;
    bottom: 16px;
    right: 0;
    color: black;
    font-size: 4em;
    font-weight: bold;
  }
  .nav__menu-list.active{
    right: 0;
  }
  .nav__link{
    font-size: 1.2em;
    padding-bottom: 24px;
    transition: all 0.2s;
  }
  
  .center{
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    .nav__menu-bar{
      display: none;
    }
    .nav__close{
      display: none;
    }
    .nav__menu-list{
      position: unset;
      flex-direction: row;
      height: auto;
      width: fit-content;
    }
    .nav__link {
      padding: 4px 16px 4px 16px;
    }
    .nav__link:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
 
export default GlobalStyle;