import styled from 'styled-components';
import { Row } from 'antd';
import { NavLink as Link } from 'react-router-dom';

export const HeaderFrame = styled(Row)`
    height: 81px;
    display: flex;
    padding: 0.5rem calc((100vw-1000px) /2);
    background-color: black;
    align-items: center;
    justify-content: space-between;

    &.hidden {
        transform: translate3d(0, -100%, 0);
        transition: mdc-animation-enter(transform, 300ms);
        transition-duration: 200ms;
    }

    button {
        font-style: normal;
        font-weight: 700;
        border-radius: 90px;
        width:auto;
        padding: 12px 16px;
        color: #FCFCFD;
        transition: box-shadow .3s;

        &: hover{
            cursor: pointer;
            box-shadow: 0 0 11px #FCFCFD; 
        }
    }
    .menu-desktop{
        display: flex;
        flex: 1;
        width: 90%;
        justify-content: space-between;
        align-items: center;

        .network {
            font-size: 1.3ren;
            margin-right: 1.5rem;
            .btn-lang{
                border: 2px solid #777E91;

            }
            .btn-login{
                margin-right: 1.5rem;
            }
        }
    }
    .btn-login{
        background: linear-gradient(269.98deg, #FD7942 0.03%, #9546C2 48.61%, #15B2F4 99.97%);
        border: none;
    }
    .btn-lang{
        background: none;
        box-sizing: border-box;
    }
   
    .logo{
        display: flex;
        border-right: 1px solid #777E90;
        justify-content: center;
        width: 12%;
        padding: 10px;

        &: hover{
            cursor: pointer;
        }
    }

    .logo-mobile {
        display: none;
    }
    .menu-mobile {
        display: none;
    }
    @media screen and (max-width: 1024px){
        .logo {
            display: none;
        }
        .logo-mobile{
            display: flex;
            justify-content: center;
            width: 12%;

            &: hover{
                cursor: pointer;
            }
        }
        .menu-desktop {
            display: none;
        }
        .icon-nav {
            font-size: 1.5rem;
        }
        .icon-nav:hover {
            cursor: pointer;
            text-shadow: 0 0 8px #FCFCFD; 
        }

        .menu-mobile {
            size: 100px;
            color: white;
            display: flex;
            margin-right: 1rem;
            width: 90%;
            justify-content: flex-end;
            align-items: center;
            .btn-lang{
                margin-right: 0.5rem;
                border: none;
            }
        }

`;

export const NavLink = styled(Link)`
    color: #777E90;
    margin: 1rem;
    text-decoration: none;
    &:hover{
        color: white;
        cursor: pointer;
    }
`;

export const Menu = styled.div`
    background: black;
    position: fixed;
    top: 0;
    right: -200%;
    transition: 50ms;

    width: 100vw;
    height: 100vh;
    
    &.active {
        right: 0;
        transition: 100ms;
    }

    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;

    .nav-mobile{
        flex-basis: 80%;
        color: white;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
        margin: auto;
        
        .icon-nav:hover {
            cursor: pointer;
        }
    }

    ul {
        flex-basis: 80%;
        height: 60%;
        flex-shrink: 0;
        list-style-type: none;
        padding: 0;
        li {
            padding: 2rem 0;
            a {
                color: #777E90;
                text-decoration: none;
                font-style: normal;
                font-weight: 500;
                line-height: 24px;
                &:hover{
                    color: white;
                    
                }
            }
            
        }
    }

   
    button{
        flex-basis: 80%;
        background: linear-gradient(269.98deg, #FD7942 0.03%, #9546C2 48.61%, #15B2F4 99.97%);
        border: none;
        font-style: normal;
        font-weight: 700;
        border-radius: 90px;
        width:auto;
        min-height: 40px;
        padding: 12px 16px;
        color: #FCFCFD;
        transition: box-shadow .3s;

        &: hover{
            cursor: pointer;
            box-shadow: 0 0 11px #FCFCFD; 
        }
    }

    
`;