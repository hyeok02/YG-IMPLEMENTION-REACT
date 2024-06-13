import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import bigbangImg from './images/img_bigbang.jpg';
import blackpinkImg from './images/img_blackpink(3).jpg';
import winnerImg from './images/img_winner(7).jpg';
import akmuImg from './images/img_akmu.jpg';
import treasureImg from './images/img_TREASURE(4).jpg';
import sechskiesImg from './images/img_SECHSKIES(2).jpg';
import gdAndTaeImg from './images/img_gdandtae.jpg';
import gdImg from './images/img_gd.jpg';
import jisooImg from './images/img_jisoo.jpg';
import jennieImg from './images/img_jennie(2).jpg';
import roseImg from './images/img_rose.jpg';
import lisaImg from './images/img_LISA.jpg';
import jinuImg from './images/img_JINU2.jpg';
import minoImg from './images/img_mino.jpg';
import kangImg from './images/img_kang.jpg';
import eunjiwonImg from './images/img_eunjiwon2.jpg';
import leechanhyukImg from './images/img_leechanhyuk.jpg';
import leesuhyunImg from './images/img_leesuhyun(2).jpg';
import krunkImg from './images/img_krunk.jpg';
import ygfamilyImg from './images/img_ygfamily123.jpg';
import logoFooter from './images/logo_footer.gif';
import logo from './images/logo.png'; 

const ArtistsPage = () => {
  return (
    <div>
      <nav>
        <div className="line"></div>
        <div className="nav1">
          <span className="lan selected" style={{ color: 'black' }}>KOREAN</span>
          <span className="lan" style={{ color: 'rgb(200, 200, 200)' }}>ENGLISH</span>
          <span className="lan" style={{ color: 'rgb(200, 200, 200)' }}>JAPANESE</span>
          <span className="lan" style={{ color: 'rgb(200, 200, 200)' }}>CHINESE</span>
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
      <hr />
      <input type="hidden" name="SelArtIdx" id="SelArtIdx" value="15" />
      <input type="hidden" name="SelArtISort" id="SelArtISort" value="1" />
      <div id="container">
        <div id="content">
          <div className="header_area">
            <h2 className="title">ARTISTS</h2>
            <div className="location">
              <ol>
                <li className="home">
                  <a href="https://www.ygfamily.com/index.asp?LANGDIV=K">Home &lt</a>
                </li>
                <li>Artists</li>
              </ol>
            </div>
          </div>
          <div className="detail_area">
            <div className="content ygstage">
              <div className="profile_lists">
                <ul className="grid-container">
                  <li>
                    <Link to="/bigbang">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={bigbangImg} alt="BIGBANG" className="bigbangImg" />
                        <span className="profile_name">BIGBANG</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blackpink">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={blackpinkImg} alt="BLACKPINK" className="blackpinkImg" />
                        <span className="profile_name">BLACKPINK</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/winner/main" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={winnerImg} alt="WINNER" />
                        <span className="profile_name">WINNER</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/akmu/main" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={akmuImg} alt="AKMU" />
                        <span className="profile_name">AKMU</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/treasure/main" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={treasureImg} alt="TREASURE" />
                        <span className="profile_name">TREASURE</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/artist/Main.asp?LANGDIV=K&ATYPE=2&ARTIDX=71" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={sechskiesImg} alt="SECHSKIES" />
                        <span className="profile_name">SECHSKIES</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <Link to="/bigbang">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={gdAndTaeImg} alt="GD&TAEYANG" />
                        <span className="profile_name">GD&TAEYANG</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/bigbang">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={gdImg} alt="GD" />
                        <span className="profile_name">GD</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a href="https://blissoo.co.kr/" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={jisooImg} alt="JISOO" />
                        <span className="profile_name">JISOO</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://oddatelier.net/artist/" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={jennieImg} alt="JENNIE" />
                        <span className="profile_name">JENNIE</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/roses_are_rosie/" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={roseImg} alt="ROSÉ" />
                        <span className="profile_name">ROSÉ</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.lloud.co/" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={lisaImg} alt="LISA" />
                        <span className="profile_name">LISA</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/winner/main" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={jinuImg} alt="JINU" />
                        <span className="profile_name">JINU</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/winner/main" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={minoImg} alt="MINO" />
                        <span className="profile_name">MINO</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/winner/main" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={kangImg} alt="GANG SEUNG YOON" />
                        <span className="profile_name">GANG SEUNG YOON</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/eun-jiwon/profile" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={eunjiwonImg} alt="EUN JIWON" />
                        <span className="profile_name">EUN JIWON</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/akmu/main" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={leechanhyukImg} alt="LEE CHANHYUK" />
                        <span className="profile_name">LEE CHANHYUK</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/akmu/main" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={leesuhyunImg} alt="LEE SUHYUN" />
                        <span className="profile_name">LEE SUHYUN</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/krunk/profile" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={krunkImg} alt="KRUNK" />
                        <span className="profile_name">KRUNK</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ygfamily.com/ko/artists/yg-family/profile" target="_self">
                      <div className="profile_thumb grayscale grascale-fade">
                        <img src={ygfamilyImg} alt="YG FAMILY" />
                        <span className="profile_name">YG FAMILY</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="footer">
        <div className="nav_menu">
          <ul>
            <li>
              <a href="https://www.ygfamily.com/ko/about/introduction">ABOUT YG</a>
            </li>
            <li>
              <a href="https://yg-entertainment.recruiter.co.kr/appsite/company/index">YG RECRUIT</a>
              <span className="ico_recruit">채용중</span>
            </li>
            <li>
              <a href="https://www.ygfamily.com/ko/contact">CUSTOMER CENTER</a>
            </li>
            <li>
              <a href="https://www.ygfamily.com/ko/privacy">개인정보처리방침</a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <div className="logo">
            <img src={logoFooter} alt="YG" />
          </div>
          <div className="text">
            <p className="text">"YG Entertainment의 모든 컨텐츠는 저작권의 보호를 받고 있습니다."
              <br />
              "Copyright YG Entertainment All Rights Reserved."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;
