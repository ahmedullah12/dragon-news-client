import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';


import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup className='mb-5' vertical>
                <Button className='mb-3' variant='outline-primary'><FaGoogle></FaGoogle>Login with Google</Button>
                <Button variant='outline-dark'><FaGithub></FaGithub>Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch>Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>
                    
                </ListGroup>
            </div>

            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;