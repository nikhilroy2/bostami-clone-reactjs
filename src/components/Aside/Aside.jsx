import React from 'react';
import { FaFacebookF, FaEnvelopeOpenText,FaDownload } from 'react-icons/fa';
import { BsTwitter, BsDribbble, BsPhoneFill } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md'
function Aside(props) {
    const social_object = [
        {
            id: 1,
            name: 'facebook',
            link: '#',
            icon: <FaFacebookF></FaFacebookF>,
            color: '#1877F2'
        },
        {
            id: 2,
            name: 'Twitter',
            link: '#',
            icon: <BsTwitter></BsTwitter>,
            color: '#1DA1F2'

        },
        {
            id: 3,
            name: 'Dribbble',
            link: '#',
            icon: <BsDribbble></BsDribbble>,
            color: '#EA4C89'
        },
        {
            id: 4,
            name: 'Linkedin',
            link: '#',
            icon: <BiLogoLinkedin></BiLogoLinkedin>,
            color: '#0A66C2'
        }


    ]

    const aside_body_object = [
        {
            id: 1,
            name: 'Phone',
            value: '+123 456 7890',
            icon: <BsPhoneFill />,
            color: '#e93b81'
        },
        {
            id: 2,
            name: 'Location',
            value: 'Hong kong china',
            icon: <IoLocationSharp />,
            color: '#6ab5b9'

        },
        {
            id: 1,
            name: 'Email',
            value: 'example@mail.com',
            icon: <FaEnvelopeOpenText />,
            color: '#fd7590'
        },
        {
            id: 1,
            name: 'Birthday',
            value: 'May 27, 1990',
            icon: <MdDateRange />,
            color: '#c17ceb'

        },
    ]
    return (
        <aside id="Aside">
            <div className="aside_header">
                <div className="img_box">
                    <img src={require('../../images/_images_about_avatar.jpg')} alt="" />
                </div>
                <h2 className="user_name">
                    Monalisa Ashley
                </h2>
                <h4 className="user_role">
                    Ui/Ux Designer
                </h4>
                <ul className="social_list">
                    {social_object.map(v => {
                        return (
                            <li key={v.id}>
                                <a href={v.link} style={{ '--c': v.color }}>{v.icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="aside_body">
                <ul className="body_list">
                    {
                        aside_body_object.map(v => {
                            return (
                                <li key={v.id}>
                                    <div className="icon_box" style={{'--c': v.color}}>
                                        {v.icon}
                                    </div>
                                    <div className="content_box">
                                        <div className="content_name"> {v.name} </div>
                                        <div className="content_value">{v.value}</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="aside_footer">
                    <a href="#" className="btn_download">
                       <FaDownload/> <span className='pl-3'>Download CV</span>
                    </a>
            </div>
        </aside>
    );
}

export default Aside;