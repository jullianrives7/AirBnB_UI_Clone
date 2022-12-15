import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import {TbGridDots} from 'react-icons/all'

export default function Photo(props) {

  return (
    <div id='mainPhoto'>
        <div id='photos'>
            <div id='bphoto'>
                
                    <Image  style={{ width: '560px',height:'569px' }}
                    src='https://a0.muscache.com/im/pictures/prohost-api/Hosting-704260259133454902/original/e3866f6e-5013-4ac0-89e8-9ab635c8fc98.jpeg?im_w=1200'
                    rounded
                    />
                
            </div>
        <div id='photocl'>
                <div >
                        <Image  style={{ width: '272px',height:'280px' }}
                        src='https://a0.muscache.com/im/pictures/miso/Hosting-27451296/original/193cc9b1-06b9-4ccc-a673-a45f31eb5957.jpeg?im_w=720'
                        rounded
                        />
                    
                </div>
                <div id='photo'>
                
                    
                        <Image  style={{ width: '272px',height:'280px' }}
                        src='https://a0.muscache.com/im/pictures/miso/Hosting-27451296/original/55633874-0610-4215-82f0-4e4590e2d02a.jpeg?im_w=720'
                        rounded
                        />
                </div>
            
        </div>
        <div id='photocl'>
                <div >
                        <Image  style={{ width: '272px',height:'280px' }}
                        src='https://a0.muscache.com/im/pictures/miso/Hosting-27451296/original/a720f8e1-0b76-44b8-ad7a-b8f7067bf1a2.jpeg?im_w=720'
                        rounded
                        />
                </div>
                <div id='photo'>
                        <Image style={{ width: '272px',height:'280px' }}
                        src='https://a0.muscache.com/im/pictures/miso/Hosting-27451296/original/a720f8e1-0b76-44b8-ad7a-b8f7067bf1a2.jpeg?im_w=720'
                        rounded
                        />
                        <Button variant="light" id='show-all-photo' onClick={() => props.setShowPhotoModal(true)}><TbGridDots/> Show All Photos</Button>
                </div>
        </div>
            </div>
        </div>
     
    
  )
}
