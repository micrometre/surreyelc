
import Link from "next/link"
import Image from "next/image"
import Marquee from "react-fast-marquee"

export default function ServicesEv() {
  return (
    <div className="marquee">
      <Marquee
        gradient={false}
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Link href="/" >
          <a className="image-card"
          >
            <Image
              src="/images/rolec.webp"
              alt="logo"
              width={256}
              height={358}
            />
          </a>
        </Link>
        <Link href="/" >
          <a className="image-card">
            <Image
              src="/images/podpoint2.webp"
              alt="logo"
              width={256}
              height={358}
            />
          </a>
        </Link>
        <Link href="/" >
          <a className="image-card">
            <Image
              src="/images/zappi1.webp"
              alt="logo"
              width={256}
              height={358}
            />
          </a>
        </Link>
      </Marquee>
      <style jsx>{`
              `}</style>

    </div>
  )
}