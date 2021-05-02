import Image from 'next/image'
import Link from 'next/link'

export default function Logo(props) {
    return (
        <Link href="/">
            <a>
                <Image
                  className={props.className}
                  src="/images/logo.svg"
                  alt="Logo"
                  height={70}
                  width={300}
                />
            </a>
        </Link>
    )
}
