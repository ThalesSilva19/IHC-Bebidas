import React, { useState } from 'react'
import { Toolbar, Box } from '@mui/material'
import NavItem from './nav_item';

const NAVBAR_LIST = [
    { text: "Cervejas", href: "/product_list" },
    { text: "Kits", href: "/product_list" },
    { text: "Marcas", href: "/product_list" },
    { text: "Outras Bebidas", href: "/product_list" },
    { text: "Promoções", href: "/product_list" },
    { text: "Presentes", href: "/product_list" },
];

export default function Navbar() {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
    return (
        <Toolbar
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: {xs: 'right', sm: 'center'},
                width: 'auto',
                minHeight: '0px !important',
                padding: '8px',
                backgroundColor: '#FFB600',
            }}
        >   
            <Box
                onClick={() => setNavActive(!navActive)}
                className={`nav__menu-bar`}
                >
                <div></div>
                <div></div>
                <div></div>
            </Box>

            <Box className={`${navActive ? "active" : ""} nav__menu-list`}>
                <Box className={'nav__close'} onClick={() => {
                        setNavActive(false);
                    }}>
                        ×
                </Box>
                {NAVBAR_LIST.map((menu, idx) => (
                    <Box
                        onClick={() => {
                            setActiveIdx(idx);
                            setNavActive(false);
                        }}
                        key={menu.text}>
                        <NavItem active={activeIdx === idx} {...menu} />
                    </Box>
                ))}
            </Box>
        </Toolbar>
    )
}
