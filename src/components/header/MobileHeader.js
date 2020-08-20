import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <Head>
      <MenuIcon className='icon'/>
      <form>
        <input type="search" />
        <i class="fa fa-search"></i>
      </form>
    </Head>
  );
}


const Head = styled.div`
display: flex;
padding: 10px;
color: var(--colorWhite);
.icon{
    margin: 0px 6px;
}
input {
    width: 20rem;
    margin: auto;
    height: 30px;
    background: var(--colorLightTransparent);
    line-height: 30px;
    outline: 0;
    color: var(--colorLight);
    border: 0;
    font-size: 1em;
    border-radius: 5px;
    padding: 0 20px;
   
  }
`
export default Header;
