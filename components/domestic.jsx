import Image from "next/image";
export function Domestic() {
    return (
        <div className="promise-container">
            <main>
                <h2 className="title">
                FREE QUOTATIONS. 
                </h2>
                <p className="description">
                    Domestic services
                    Full domestic rewires
                    Consumer unit chargers
                    Periodic test + inspections.
                </p>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <Image
                                src="/images/1.webp"
                                alt="About picture"
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <Image
                                src="/images/3.webp"
                                alt="About picture"
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <Image
                                src="/images/7.webp"
                                alt="About picture"
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>
                <p className="description">
Lighting installations of all types. 
                </p>
                </div>
            </main>
            <style jsx>{`
        .promise-container {
          margin-top: 6rem;
          padding: 0.1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #fff;
        }
        main {
          padding: 0.1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        /* Float four columns side by side */
        .column {
          float: left;
          width: 33%;
          padding: 0 10px;
        }

        /* Remove extra left and right margins, due to padding */
        .row {
          margin: 0 -5px;
        }

        /* Clear floats after the columns */
        .row:after {
          content: "";
          display: table;
          clear: both;
        }

        /* Responsive columns */
        @media screen and (max-width: 600px) {
          .column {
            width: 100%;
            display: block;
            margin-bottom: 20px;
          }
        }

        /* Style the counter cards */
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          text-align: center;
        }
        .title {
          text-decoration: none;
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>
        </div>
    );
}
export default Domestic;