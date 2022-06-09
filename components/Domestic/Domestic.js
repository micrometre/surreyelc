import Image from 'next/image'
import { Container, Row, Card, Button } from 'react-bootstrap'
import LogoCard from '../Logo/Logo'
export default function Domestic() {
    return (
        <>
            <div>

                <div className="container col-xxl-8 px-4 py-2">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <Image
                                src="/images/5.webp"
                                alt="About picture"
                                width={500}
                                height={375}
                            />
                        </div>
                        <div className="col-lg-6 text-white">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Domestic services</h1>
                            <p className=" mb-4">
                                Full domestic rewires<br/>
                                Emergency call out<br/>
                                Consumer unit chargers<br/>
                                Periodic test and inspections<br/>
                                Full remedials<br/>
                                Lighting installations of all types<br/>
                                Access to river properties<br/>
                                External Domestic services.<br/>
                                External electrical installations to<br/>
                                Garden sheds,
                                Out houses,
                                Garden lighting,
                                Driveway lighting,
                                Decking areas and
                                External living Areas<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}