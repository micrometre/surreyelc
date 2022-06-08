import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import LogoCard from '../Logo/Logo'
export default function Hero() {
    return (
        <>
            <div>
                <div className="px-3 py-1 my-1 text-center text-white">
                    <div className="col-lg-6 mx-auto">
                        <h1 className=" mb-4">
                            Surrey electrical and car charging offer a full 
                            electrical service for all domestic and commercial properties. 
                            Our fully qualified engineers work to regulation standards in design, 
                            installation and niceic certification.
                            </h1>
                    </div>
                </div>
            </div>
        </>
    )
}