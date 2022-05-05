
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
              `}</style>

    </div>
  )
}