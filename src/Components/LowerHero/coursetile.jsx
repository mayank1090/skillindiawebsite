import { faClock } from '@fortawesome/free-regular-svg-icons/faClock'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./coursetile.css"

export default function Coursetile({text,hours,students,users}) {

  return (
    <div className='maincousretilesec'>
        <h2 className='themainuppertext mb-4 '>{text}</h2>
        <div className='thelowerfortimingandstudent flex flex-col gap-3 mb-5'>
            <div className='thesameoftimeandstudent items-center  flex gap-2'>
                <FontAwesomeIcon  icon={faClock}/>
                <p className='therightbesideoftheicon'>{hours} Hours</p>
            </div>

            <div className='thesameoftimeandstudent items-center flex gap-2'>
                <FontAwesomeIcon icon={faUsers}/>
                <p className='therightbesideoftheicon'>{students} Students</p>
            </div>

            <div className='theinnerratinglowerdiv mb-5 flex items-center'>
                <div className='theflexratingdivprnt flex gap-1'>
                    <FontAwesomeIcon icon={faStar} className='fastaricon'/>
                    <FontAwesomeIcon icon={faStar} className='fastaricon'/>
                    <FontAwesomeIcon icon={faStar} className='fastaricon'/>
                    <FontAwesomeIcon icon={faStar} className='fastaricon'/>
                    <FontAwesomeIcon icon={faStar} className='fastaricon'/>
                </div>
                <p className='thelowernumberofuser'>{users} Users</p>
            </div>

            <div className='thelowerdivforthebuttoninthetile flex gap-2 items-center'>
                <p className='gotocousee'>Go to Course</p>
                <FontAwesomeIcon icon={faArrowRight} className='fastaricon' />
            </div>
        </div>
        <div className='anyyehg'></div>
        <div className='thetoprightblueonline'>
            <p className='onlinetoprightbue'>Online</p>
        </div>
    </div>
  )
}
