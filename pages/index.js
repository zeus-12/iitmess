import Head from 'next/head';
import Link from 'next/link';
import Menu from '../components/Menu';
import menu from '../data';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>IIT-M-ESS</title>
        <meta name="description" content="Created for the Community" />
      </Head>
      <p className="text-center text-2xl ">
        IIT<span className="text-sky-400">M</span>ESS
      </p>
      <p className="text-xl text-center text-orange-400 ">South Mess Menu</p>

      <Menu data={menu.southmess} />
      {/* <Link href="north">
          <div className="hover:cursor-pointer bg-slate-400 rounded-sm px-2">
            North Mess
          </div>
        </Link>
        <Link href="/south">
          <div className="hover:cursor-pointer bg-slate-400 px-2">
            South Mess
          </div>
        </Link> */}
      <div className="absolute bottom-2 left-0 right-0  ">
        {/* <p className="">
          Only South Mess because South &gt; North.Jk, I'm too tired to type out
          the whole North Mess
        </p> */}
        <p className="text-center block">
          Contribute/Report Menu changes on{' '}
          <a
            className="text-blue-200"
            href="https://github.com/zeus-12/iitmess">
            Github
          </a>
        </p>
      </div>
    </div>
  );
}
