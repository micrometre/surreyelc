import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import LogoCard from '../Logo/Logo'
export default function Hero() {
    return (
        <>
            <div>
                <div className="px-1 py-1 my-1  text-white">
                    <p className=" mb-4">
                        We are fully invested in the future of our planet and younger generations.<br/>
                        We are exploring greener every friendly solutions. We have started with electric car chargers
                        and are hoping to offer all forms of green energy in the future.
                    </p>
                </div>
            </div>
        </>
    )
}