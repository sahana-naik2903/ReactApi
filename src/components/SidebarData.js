import React from 'react';
import * as FaIcons from 'react-icons/fa'; 
import * as AiIcons from 'react-icons/ai'; 
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cname:'nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<IoIcons.IoIosPaper/>,
        cname:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus/>,
        cname:'nav-text'
    },
    {
        title:'Team',
        path:'/team',
        icon:<IoIcons.IoMdPeople/>,
        cname:'nav-text'
    },
    {
        title:'Messages',
        path:'/messages',
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cname:'nav-text'
    },
    {
        title:'Support',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle/>,
        cname:'nav-text'
    }
]
