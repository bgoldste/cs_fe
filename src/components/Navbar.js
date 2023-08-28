
import Link from "next/link";
import {FaBars} from "react-icons/fa6";

const Navbar = ({site}) => {


  // const { siteName, siteImgUrl }  = useContext(AppContext);
  const siteName = site.name

    console.log(site)
    console.log(site.pages)
    const pages = site.pages;
    console.log(pages)
    const determineFontSize = (text) => {
      const length = text.length;

      if (length < 10) return 'text-xl';
      if (length < 20) return 'text-lg';
      if (length < 30) return 'text-base';
      return 'text-sm';
  };
    const dynamicFontSize = determineFontSize(siteName);
  return (



      <div className="navbar bg-base-100 z-50 top-0 sticky">
  <div className="navbar-start">
    {/*<button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>*/}
  </div>
  <div className="navbar-center">
    <div className='break-all'>
    <p className={`btn btn-ghost normal-case ${dynamicFontSize} w-40  `}>
    {siteName}</p>
    </div>
  </div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-primary btn-outline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                      <li key={'home'}>
                          <Link href="/">Home</Link>
                      </li>
                      {pages.filter(p => p.show_in_navbar === true && !p.is_homepage).map( (p) => (
                          <li key={p.id}>
                              <Link href={p.slug}>{p.title}</Link>
                          </li>
                      ))}



       
      </ul>
    </div>
  </div>
  
</div>


  )


};

export default Navbar;


      // <div className="navbar sticky  p-2  top-0 z-50">


      //     <div className="navbar-start ">
      //     <div></div>
      //     </div>

      //       {/*  {
      //             site.logo_image_url ?
      //             <img src={site.logo_image_url} className="w-20 h-20 rounded-full mr-2 bg-neutral-content" />
      //                 :
      //                 <img src={'https://dexterlabs-public.s3.amazonaws.com/images/pagesake_logo.png'} className="w-20 h-20 rounded-full mr-2 bg-neutral-content" />
      //         }*/}

              
       
      //     <div className="navbar-center  ">
      //         {/*<img src={siteData.site_image} className="w-16 rounded-full mr-2" />*/}
      //     <Link href="/"className="btn-md  hidden sm:block btn-ghost self-center text-lg lg:text-2xl  break-words  drop-shadow px-0 mx-0 "> 
      //             {siteName}</Link>
      //         <Link href="/"className="btn-md   btn-ghost self-center text-2xl  break-words px-0 mx-0 ">

      //             {siteName}
      //         </Link>
      //     </div>
      //     <div className="navbar-end">

      //         <div className="dropdown dropdown-end">

      //             <label tabIndex={0} className="btn btn-ghost   ">
      //             <FaBars className='text-2xl '/>
      //                 {/*<svg width="64px" height="64px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>*/}
      //                 {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  fill-primary stroke-accent" stroke-width='1.3'  viewBox="0 0 20 20"  ><g id="SVGRepo_iconCarrier"> <path fill="" className= "" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>*/}
      //                 {/*className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 64 64"  stroke-width="2"*/}
      //             </label>
      //             {/*<label tabIndex={0} className="btn btn-ghost rounded-btn">Dropdown</label>*/}
      //             {/*<ul tabIndex={0} className="menu dropdown-content    bg-primary-content text-primary  shadow bg-base-100 rounded-box mx-auto w-72 mt-4 p-0">*/}

      //             <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      //                 <li key={'home'}>
      //                     <Link href="/">Home</Link>
      //                 </li>
      //                 {pages.filter(p => p.show_in_navbar === true && !p.is_homepage).map( (p) => (
      //                     <li key={p.id}>
      //                         <Link href={p.slug}>{p.title}</Link>
      //                     </li>
      //                 ))}



      //             </ul>
      //         </div>
      //     </div>
      // </div>
