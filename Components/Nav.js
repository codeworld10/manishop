import Link from "next/link";
import Image from "next/image";

function Nav() {

  const insta = () => {
    window.open("https://www.instagram.com/maniwebdev/");
  }
  const twit = () => {
    window.open("https://twitter.com/maniwebdev");
  }
  const linke = () => {
    window.open("https://www.linkedin.com/in/muhammad-usman-8444bb21a/");
  }
  const what = () => {
    window.open("https://wa.me/+923413160032");
  }
  const face = () => {
    window.open("https://web.facebook.com/maniwebdev");
  }

  return (
    //created menu for pc

    <>
      <div className="navbar">
        <div className="pcmenu">
          <div className="logomain">
            <Image className="logos" src="/images/Maniweb.png" width="100" height="100"></Image>
          </div>
          <ul>
            <li className="list">
              <Link href="/">
                <a className="active">Home</a>
              </Link>
            </li>
            <li className="list">
              <Link href="/aboutme">
                <a className="active">About</a>
              </Link>
            </li>
          
          </ul>
          <div className="social">
            <div className="media">
            <Image onClick={face} src="/images/fpic.png" width="20" height="25"></Image>
            </div>
            <div className="media">
              <Image onClick={insta} src="/images/insta.png" width="20" height="25"></Image>
            </div>
            <div className="media">
              <Image onClick={linke} src="/images/link.png" width="20" height="25"></Image>
            </div>
            <div className="media">
              <Image onClick={twit} src="/images/twit.png" width="20" height="25"></Image>
            </div>
            <div className="media">
              <Image onClick={what} src="/images/what.png" width="20" height="25"></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav