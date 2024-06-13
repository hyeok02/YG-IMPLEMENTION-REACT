import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './style.css';
import logo from './images/main/logo.png';
import footImage from './images/main/foot.jpg';
import banner1 from './images/main/akmu.jpg';
import banner2 from './images/main/TS.jpg';
import banner3 from './images/main/jisoo.png';
import banner4 from './images/main/BLACKPINK.png';
import banner5 from './images/main/LCH.png';
import iconYT from './images/main/ico_yt.png';
import iconFB from './images/main/ico_fb.png';
import iconWB from './images/main/ico_wb.png';
import iconTR from './images/main/ico_tr.png';
import iconIG from './images/main/ico_ig.png';
import logoFooter from './images/main/logo_footer.gif';
import bona from './images/main/bonabona.jpg';
import reboot from './images/main/reboot.png';

import ArtistsPage from './components/ArtistsPage/ArtistsPage';
import BigbangPage from './components/BigbangPage/BigbangPage';  // 새로운 BigbangPage 컴포넌트
import BlackpinkPage from './components/BlackpinkPage/BlackpinkPage';

const App = () => {
  useEffect(() => {
    const languageSpans = document.querySelectorAll('.lan');

    function changeLanguageColor() {
      languageSpans.forEach(span => {
        span.classList.remove('selected');
        span.style.color = '#C8C8C8';
      });
      this.classList.add('selected');
      this.style.color = 'black';
    }

    changeLanguageColor.call(languageSpans[0]);

    languageSpans.forEach(span => {
      span.addEventListener('click', changeLanguageColor);
      span.addEventListener('mouseenter', function() {
        this.style.color = 'black';
      });
      span.addEventListener('mouseleave', function() {
        if (!this.classList.contains('selected')) {
          this.style.color = '#C8C8C8';
        }
      });
    });

    const banners = document.querySelectorAll('.banner');
    let currentBannerIndex = 0;

    function showCurrentBanner() {
      banners.forEach((banner, index) => {
        if (index === currentBannerIndex) {
          banner.classList.add('active');
        } else {
          banner.classList.remove('active');
        }
      });
    }

    function slideNext() {
      currentBannerIndex++;
      if (currentBannerIndex >= banners.length) {
        currentBannerIndex = 0;
      }
      showCurrentBanner();
    }

    setInterval(slideNext, 4000);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/bigbang" element={<BigbangPage />} /> {/* BigbangPage 경로 추가 */}
        <Route path="/blackpink" element={<BlackpinkPage />} /> {/* BlackpinkPage 경로 추가 */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

const Home = () => (
  <div>
    <nav>
      <div className="line"></div>
      <div className="nav1">
        <span className="lan">KOREAN</span>
        <span className="lan">ENGLISH</span>
        <span className="lan">JAPANESE</span>
        <span className="lan">CHINESE</span>
      </div>
      <div className="nav2">
        <Link to="/"><div className="logo"><img src={logo} alt="Logo" /></div></Link>
        <span className="menu"><a href="https://www.ygfamily.com/ko/news/notice">NOTICE</a></span>
        <span className="menu"><a href="https://www.ygfamily.com/ko/news/report">NEWS</a></span>
        <span className="menu"><Link to="/artists">ARTISTS</Link></span>
        <span className="menu"><a href="https://www.ygfamily.com/ko/actors/list">ACTORS</a></span>
        <span className="menu"><a href="https://www.ygfamily.com/media/MList.asp?LANGDIV=E">MULTIMEDIA</a></span>
        <span className="menu"><a href="https://www.ygselect.com/">SELECT</a></span>
        <span className="menu"><a href="https://www.ygfamily.com/ko/sustainability/with">WITH</a></span>
        <span className="menu"><a href="https://www.yg-audition.com/">AUDITION</a></span>
      </div>
    </nav>

    <main>
      <div className="container">
        <img className="banner" src={banner1} alt="AKMU" />
        <img className="banner" src={banner2} alt="TS" />
        <img className="banner" src={banner3} alt="Jisoo" />
        <img className="banner" src={banner4} alt="BLACKPINK" />
        <img className="banner" src={banner5} alt="LCH" />
      </div>

      <div className="subject">
        <span className="NOTICE"><span className="sub">NOTICE<p className="more1">more</p></span></span>
        <span className="MUSICVIDEO"><span className="sub">MUSIC VIDEO<p className="more2">more</p></span></span>
        <span className="NEWS"><span className="sub">NEWS<p className="more3">more</p></span></span>
        <span className="YGLIFE"><span className="sub">YG LIFE<p className="more4">more</p></span></span>
      </div>

      <div className="content-section">
        <div className="NOTICE1">
          <div className="notice-menu">
            <span className="YGMENU">YG</span>
            <span className="ARTISTSMENU">ARTISTS</span>
          </div>
          <span className="n1"><a href="https://www.ygfamily.com/notice/NList.asp?LANGDIV=K&IDX=13244&STYPE=A">TRESURE 2ND FULL ALBUM [REBOOT]...</a><p className="daten">2023.07.10</p></span>
          <hr className="notice-hr" />
          <span className="n2"><a href="https://www.ygfamily.com/notice/NList.asp?LANGDIV=K&IDX=13236&STYPE=A">TREASURE 2ND FULL ALBUM [REBOOT]...</a><p className="daten">2023.07.04</p></span>
        </div>
        <div className="MUSICVIDEO1">
          <a href="https://www.ygfamily.com/media/MList.asp?LANGDIV=K&Page=1&IDX=1295&SchKey1=&SchKey2="><img className="BONA" src={bona} alt="BONA" /></a>
          <span className="bona1">BONA BONA <span className="treasure">TREASURE<br />2023.07.28</span></span>
        </div>
        <div className="NEWS1">
          <a href="https://www.ygfamily.com/network/Network_List.asp?LANGDIV=K"><img className="Reboot" src={reboot} alt="Reboot" /></a>
          <span className="reboot1">트레저, 정규2집 171만장 ... <span className="reboot2">2023.07.28</span></span>
        </div>
        <div className="YGLIFE1">
          <span className="ak"><a href="https://yg-life.com/archives/185155?lang=ko">AKMU - 4th SINGLE Love ...</a><p className="date">Sun, 13 Aug 2023</p></span>
          <hr className="yglife-hr" />
          <span className="bp"><a href="https://yg-life.com/archives/185138?lang=ko">BLACKPINK - 'Shut Down' ... </a><p className="date">Sun, 13 Aug 2023</p></span>
        </div>
      </div>
      
      <div className="footimage-container">
        <img className="footimage" src={footImage} alt="Foot" />
      </div>
    </main>

    <footer>
      <div className="icon-cont">
        <span className="icon-text">OFFICIAL YG ENTERTAINMENT SOCIAL NETWORKS</span>
        <img className="icon" src={iconYT} alt="YouTube" />
        <img className="icon" src={iconFB} alt="Facebook" />
        <img className="icon" src={iconWB} alt="Weibo" />
        <img className="icon" src={iconTR} alt="Twitter" />
        <img className="icon" src={iconIG} alt="Instagram" />
      </div>
      <hr className="foot-hr" color="lightgray" />
      <div>
        <span><img className="logo-foot" src={logoFooter} alt="Footer Logo" /></span>
        <span className="copyright">
          YG Entertainment의 모든 컨텐츠는 저작권의 보호를 받고 있습니다.<br />
          Copyright YG Entertainment All Rights Reserved.
        </span>
      </div>
      <div className="nav-foot">
        <span className="add"><a href="https://www.ygfamily.com/ko/about/introduction"> • ABOUT YG</a></span>
        <span className="add"><a href="https://yg-entertainment.recruiter.co.kr/appsite/company/index"> • YG RECRUIT</a></span>
        <span className="add"><a href="https://www.ygfamily.com/ko/contact"> • CUSTOMER CENTER</a><span className="highlight">채용중</span></span>
        <span className="add" style={{color: '#be0028'}}><a href="https://www.ygfamily.com/ko/privacy">• 개인정보처리방침</a></span>
      </div>
      <div className="list-cont">
        <select className="list" name="YG FAMILY SITE" defaultValue="site">
          <option value="life">YG LIFE</option>
          <option value="stage">YG STAGE</option>
          <option value="select">YG SELECT</option>
          <option value="audition">YG AUDITION</option>
          <option value="producer">YG PRODUCER</option>
          <option value="with">YG WITH</option>
          <option value="site" selected>YG FAMILY SITE</option>
        </select>
      </div>
    </footer>
  </div>
);

export default App;
