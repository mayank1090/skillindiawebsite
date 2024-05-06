import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import React from 'react'
import "./Skillcentre.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons/faShareNodes'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Skillcentre({text,location,phone,email,othertext}) {
  return (
    <div className='theskillcenterprntdiv'>
        <div className='theupperskillcentericonrounded flex gap-2'>
        <div className='forthebackgroundoftheshare mb-5'>
        <p className='theaboveshareicon'>
            <FontAwesomeIcon icon={faLocationDot}/>
        </p>
        </div>

        <div className='forthebackgroundoftheshare mb-5'>
        <p className='theaboveshareicon'>
            <FontAwesomeIcon icon={faShareNodes}/>
        </p>
        </div>
        </div>

        <p className='thelowerupperpboldtext mb-3'>{text}</p>

        <div className='theloestebocxothflex flex gap-2 mb-2 items-center'>
            <p className='theleftoftheboctothe'>
                <FontAwesomeIcon icon={faLocationDot} className='fa-fw'/>
            </p>
            <p className='theleftrightboctolate theotherwoneforthelimitedword'>{location}</p>
        </div>

        <div className='theloestebocxothflex flex gap-2 mb-2 items-center'>
            <p className='theleftoftheboctothe'>
                <FontAwesomeIcon icon={faMessage} className='fa-fw'/>
            </p>
            <p className='theleftrightboctolate theotherwoneforthelimitedword'>{email}</p>
        </div>

        <div className='theloestebocxothflex flex gap-2 mb-2 items-center'>
            <p className='theleftoftheboctothe'>
                <FontAwesomeIcon icon={faPhone} className='fa-fw'/>
            </p>
            <p className='theleftrightboctolate'>{phone}</p>
        </div>

        <p className='thelowercoursesofferered mt-4 mb-5'>Courses Offered</p>
        
        <div className="thebinsidetgreytext p-2">
            <p className='theinsidetextofthe theotherwoneforthelimitedword'>{othertext}</p>
        </div>

        <div className='telastfortheviewdetail flex gap-2 items-center mt-2'>
            <p className='theviwdetailtextofthelastdiv theleftrightboctolateamount'>View Details</p>
            <FontAwesomeIcon icon={faArrowRight} color='#df6e12' />
        </div>
    </div>
  )
}
