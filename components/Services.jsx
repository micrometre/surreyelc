
import Link from "next/link"
import Image from "next/image"
import Marquee from "react-fast-marquee"
export default function Home() {
  return (
    <div className="marquee">
      <main>
        <div className="grid">
          <Marquee
            gradient={false}
            style={{
              backgroundColor: "#fff",
            }}
          >
            <Link href="/" passHref>
              <a className="card"
              >
                <Image
                  src="/images/rolec.webp"
                  alt="logo"
                  width={256}
                  height={358}
                />
              </a>
            </Link>
            <Link href="/" passHref >
              <a className="card">
                <Image
                  src="/images/podpoint2.webp"
                  alt="logo"
                  width={256}
                  height={358}
                />
              </a>
            </Link>
            <Link href="/" passHref >
              <a className="card">
                <Image
                  src="/images/zappi1.webp"
                  alt="logo"
                  width={256}
                  height={358}
                />
              </a>
            </Link>
          </Marquee>
        </div>
      </main>
      <style jsx>{`
                .marquee {
                  min-height: 10vh;
                  padding: 0 0.5rem;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
        
                .grid {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin: 0.0rem;
                }
                .card{

                  align-items: center;
                  justify-content: center;
                  margin: 5.0rem;

                }
                @media (max-width: 600px) {
                  .grid {
                    width: 100%;
                    flex-direction: column;
                  }
                }
              `}</style>

    </div>
  )
}