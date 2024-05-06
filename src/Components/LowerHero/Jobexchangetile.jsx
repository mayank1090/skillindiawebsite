import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons/faIndianRupeeSign'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Jobexchange.css"

export default function Jobexchangetile({text,lowertext,location,opening,amount}) {
  return (
    <div className='jobexchangejobtilemainprnt'>
        <div className='forthebackgroundoftheshare mb-5'>
        <p className='theaboveshareicon'>
            <FontAwesomeIcon icon={faShareNodes}/>
        </p>
        </div>
        
        <p className='thelowerupperpboldtext mb-3'>{text}</p>
        <p className='thelowertolowerpbboldth mb-5'>{lowertext}</p>
        <div className='theloestebocxothflex flex gap-2 mb-2 items-center'>
            <p className='theleftoftheboctothe'>
                <FontAwesomeIcon icon={faLocationDot} className='fa-fw'/>
            </p>
            <p className='theleftrightboctolate'>{location}</p>
        </div>
        <div className='theloestebocxothflex flex gap-2 mb-2 items-center'>
            <p className='theleftoftheboctothe'>
                <FontAwesomeIcon icon={faBriefcase} className='fa-fw'/>
            </p>
            <p className='theleftrightboctolate'>{opening}</p>
        </div>

        <div className='theloestebocxothflex flex gap-2 mb-2 items-center'>
            <p className='theleftoftheboctothe'>
                <FontAwesomeIcon icon={faIndianRupeeSign} className='fa-fw'/>
            </p>
            <p className='theleftrightboctolate theleftrightboctolateamount'>{amount}</p>
        </div>

        <div className='telastfortheviewdetail flex gap-2 items-center'>
            <p className='theviwdetailtextofthelastdiv theleftrightboctolateamount'>View Details</p>
            <FontAwesomeIcon icon={faArrowRight} color='#df6e12' />
        </div>

        <div className='thetoprightblueonline'>
            <p className='onlinetoprightbue'>Online</p>
        </div>

    </div>
   
  )
}
