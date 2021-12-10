import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../assets/svg/logo.svg'
import { ReactComponent as LogoMobileSvg } from '../../assets/svg/logo-mobile.svg'
import { HeaderFrame, NavLink, Menu } from './Header.styled';
import { Button } from 'antd';


const menuItem = [
    {
        name: 'About us',
        path: '/about-us',
    },
    {
        name: 'NFT Collections',
        path: '/nft',
    },
    {
        name: 'Marketplace',
        path: '/market',
    },
    {
        name: 'Earn',
        path: '/earn',
    },
    {
        name: 'Pools',
        path: '/pools',
    }
];
export default function Header() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    let classMenu = visible ? 'site-header' : 'site-header';
    return (
        <>
            <HeaderFrame className={classMenu}>
                <div className="logo"><LogoSvg /></div>
                <div className="logo-mobile"><LogoMobileSvg /></div>
                <div className="menu-desktop">
                    <div>
                        {menuItem.map((item) => {
                            return (

                                <NavLink to={item.path}> {item.name} </NavLink>
                            );
                        })}
                    </div>
                    <div className="network">
                        <Button className="btn-login">Login</Button>
                        <Button className="btn-lang">EN</Button>
                    </div>
                </div>

                <div className="menu-mobile">
                    <Button className="btn-lang">EN</Button>

                    <div onClick={showDrawer} className="icon-nav"><MenuOutlined /></div>
                </div>

            </HeaderFrame>
            <Menu className={visible ? "active" : ""}>
                <div className="nav-mobile">
                    <div><LogoMobileSvg /></div>
                    <div onClick={onClose}><CloseOutlined className="icon-nav" /></div>

                </div>
                    <ul>
                        {menuItem.map((item) => {
                            return (

                                <li > <a href={item.path}>{item.name} </a></li>
                            );
                        })}
                    </ul>
                <Button className="btn-login">Login</Button>

            </Menu>
        </>
    )
}
