import React, { useEffect } from 'react';
import './style.css';
import bigbang from './images/img_bigbang.jpg';
import blackpink from './images/img_blackpink(3).jpg';
import winner from './images/img_winner(7).jpg';
import akmu from './images/img_profile(18).jpg';
import treasure from './images/img_TREASURE(4).jpg';
import sech from './images/img_SECHSKIES(2).jpg';
import title from './images/title.png';
import ds from './images/ds.jpg';
import track from './images/track.png';
import main from './images/main-img.jpg';

const BlackpinkPage = () => {
  useEffect(() => {
    //.lan 선택
    const languageSpans = document.querySelectorAll('.lan');

    //.lan 클릭 시 호출
    function changeLanguageColor() {
      //.lan 색상 설정
      languageSpans.forEach(span => {
        span.classList.remove('selected');
        span.style.color = '#C8C8C8';
      });

      //.lan 색상 black 설정하고 선택 클래스를 추가
      this.classList.add('selected');
      this.style.color = 'black';
    }

    //초기에 "KOREAN"이 선택
    changeLanguageColor.call(languageSpans[0]);

    //.lan 이벤트 리스너를 추가
    languageSpans.forEach(span => {
      span.addEventListener('click', changeLanguageColor);
      span.addEventListener('mouseenter', function () {
        this.style.color = 'black';
      });
      span.addEventListener('mouseleave', function () {
        if (!this.classList.contains('selected')) {
          this.style.color = '#C8C8C8';
        }
      });
    });

    // DOMContentLoaded 이벤트를 사용하여 문서가 로드된 후 실행될 함수를 등록합니다.
    const koreanElement = document.querySelector('.Korean2');
    const englishElement = document.querySelector('.English2');
    const chineseElement = document.querySelector('.Chinese2');
    const japaneseElement = document.querySelector('.Japanese2');

    // 각 요소를 클릭했을 때 실행될 함수를 등록합니다.
    koreanElement.addEventListener('click', () => {
      // 모든 요소들의 스타일을 초기화합니다.
      resetStyles();
      // 선택한 요소의 스타일을 변경합니다.
      koreanElement.classList.add('selected');
    });

    englishElement.addEventListener('click', () => {
      resetStyles();
      englishElement.classList.add('selected');
    });

    chineseElement.addEventListener('click', () => {
      resetStyles();
      chineseElement.classList.add('selected');
    });

    japaneseElement.addEventListener('click', () => {
      resetStyles();
      japaneseElement.classList.add('selected');
    });

    // 모든 요소들의 스타일을 초기화하는 함수입니다.
    function resetStyles() {
      koreanElement.classList.remove('selected');
      englishElement.classList.remove('selected');
      chineseElement.classList.remove('selected');
      japaneseElement.classList.remove('selected');
    }

    window.showEnglishDescription = function () {
      var information = document.querySelector(".information");
      information.innerHTML = "<p>World renowned girl-group BLACKPINK released their 2nd album [BORN PINK]. BLACKPINK made listeners addicted to their pre-release single ‘Pink Venom’ back in August, and now plans to take over the world with their 2nd album [BORN PINK]. </p> <p>Their album title [BORN PINK] portrays the confidence BLACKPINK has in being born different, and eight tracks with unrivaled sounds have been pitched throughout their title song ‘Shut Down’ and the pre-release song ‘Pink Venom’.</p> <p>From a pre-release single to a full album, and a world tour…<br>Attention is being drawn to what kind of history they will write through their mega-scale project.</p>"
    }

    window.showKoreanDescription = function () {
      var information = document.querySelector(".information");
      information.innerHTML = "<p>세계 최정상 걸그룹 BLACKPINK가 두 번째 정규 앨범 [BORN PINK]를 발표했다. 지난 8월 선공개곡 ‘Pink Venom’으로 전세계 리스너들을 중독시킨 BLACKPINK가 두 번째 정규앨범 [BORN PINK]로 또 한 번 전세계를 매혹시킬 전망이다.</p><p>[BORN PINK]는 태생부터 남다른 존재감을 지닌 BLACKPINK의 자신감을 드러내는 앨범명으로, 타이틀곡 ‘Shut Down’을 비롯한 BLACKPINK만의 강렬한 사운드를 담은 독보적인 트랙 8곡이 수록됐다.</p><p>선공개곡부터 정규앨범과 월드투어까지. 대규모 프로젝트를 통해 블랙핑크가 어떠한 신기록을 써내려갈지 주목된다.</p>"
    }

    window.showChineseDescription = function () {
      var information = document.querySelector(".information");
      information.innerHTML = "<p>世界顶级女团BLACKPINK发行了第2张正规专辑[BORN PINK]。BLACKPINK已于8 月发售先行曲《Pink Venom》，令全球听众着迷。预计本次第2张正规专辑 [BORN PINK]将再次俘获全球听众。</p><p>本张专辑名[BORN PINK]充分展现出BLACKPINK与生俱来的独特存在感和自信。专辑收录了包括主打曲《Shut Down》在内的8首歌曲，将尽显BLACKPINK强烈的音乐风格。</p>"
    }

    window.showJapaneseDescription = function () {
      var information = document.querySelector(".information");
      information.innerHTML = "<p>グローバルトップガールズグループＢＬＡＣＫＰＩＮＫが２ｎｄアルバム『ＢＯＲＮ　ＰＩＮＫ』をリリース。今年８月の先行公開シングル『Ｐｉｎｋ　Ｖｅｎｏｍ』でグローバルリスナーの心を鷲掴みにしたＢＬＡＣＫＰＩＮＫが２ｎｄアルバム『ＢＯＲＮ　ＰＩＮＫ』でもう一度世界を魅了する。</p><p>アルバム名の『ＢＯＲＮ　ＰＩＮＫ』は、生まれ持った圧倒的な存在感を放つＢＬＡＣＫＰＩＮＫの自信を表す。</p><p>タイトル曲『Ｓｈｕｔ　Ｄｏｗｎ』を始めとし、ＢＬＡＣＫＰＩＮＫならではの強烈なサウンドが魅力の８曲が収録されている。</p><p>先行公開曲からアルバム、そしてワールドツアーまで。大規模プロジェクトによりＢＬＡＣＫＰＩＮＫが塗り替えていく記録に世界が注目している。</p>"
    }
  }, []);

  return (
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
          <a href="#"><div className="logo"><img src="./images/logo.PNG" alt="" /></div></a>
          <span className="menu"><a href="https://www.ygfamily.com/ko/news/notice">NOTICE</a></span>
          <span className="menu"><a href="https://www.ygfamily.com/ko/news/report">NEWS</a></span>
          <span className="menu"><a href="https://www.ygfamily.com/artist/Artists.asp?LANGDIV=E&ATYPE=2">ARTISTS</a></span>
          <span className="menu"><a href="https://www.ygfamily.com/ko/actors/list">ACTORS</a></span>
          <span className="menu"><a href="https://www.ygfamily.com/media/MList.asp?LANGDIV=E">MULTIMEDIA</a></span>
          <span className="menu"><a href="https://www.ygselect.com/">SELECT</a></span>
          <span className="menu"><a href="https://www.ygfamily.com/ko/sustainability/with">WITH</a></span>
          <span className="menu"><a href="https://www.yg-audition.com/">AUDITION</a></span>
        </div>
      </nav>

      <section>
        <div id="container">
          <div id="content">
            <div className="headerArea">
              <h1 className="title">ARTISTS</h1>
              <div className="locations">
                <ol>
                  <li className="home"><a href="#">home</a></li>
                  <li className="artist"> &lt; Artists</li>
                </ol>
              </div>
            </div>

            <div className="artistBanner">
              <button className="left"><i className="fas fa-chevron-left"></i><img src="images/btn_photonav_prev.gif" alt="" /></button>
              <div className="artistImg">
                <div className="photoList">
                  <div className="artist"><img className="groupImg" src={bigbang} alt="bigbang" /><div className="groupName">BIGBANG</div></div>
                  <div className="artist"><div className="on"><img src="images/bu_photonav_on.gif" alt="" /></div><img className="groupImg" src={blackpink} alt="blackpink" /><div className="groupName">BLACKPINK</div></div>
                  <div className="artist"><img className="groupImg" src={winner} alt="winner" /><div className="groupName">WINNER</div></div>
                  <div className="artist"><img className="groupImg" src={akmu} alt="akmu" /><div className="groupName">AKMU</div></div>
                  <div className="artist"><img className="groupImg" src={treasure} alt="treasure" /><div className="groupName">TREASURE</div></div>
                  <div className="artist"><img className="groupImg" src={sech} alt="sechskies" /><div className="groupName">SECHSKIES</div></div>
                </div>
              </div>
              <button className="right"><i className="fas fa-chevron-right"></i><img src="images/btn_photonav_next.gif" alt="" /></button>
            </div>

            <div className="pageArtist">
              <h2 className="artistName">BLACKPINK</h2>
              <div className="artistNav">
                <ul>
                  <li><a href="#"><span>MAIN</span></a></li>
                  <li><a href="#"><span>ABOUT</span></a></li>
                  <li><a href="#"><span>NEWS</span></a></li>
                  <li><a href="#"><span>NOTICE</span></a></li>
                  <li><a href="#"><span>ALBUM</span></a></li>
                  <li><a href="#"><span>MV</span></a></li>
                  <li><a href="#"><span>SCHEDULE</span></a></li>
                  <li><a href="#"><span>CONCERT</span></a></li>
                  <li><a href="#"><span>PRIVATE STAGE</span></a></li>
                </ul>
              </div>
            </div>

            <hr style={{ color: 'black', borderColor: 'black', borderWidth: '1.5px' }} />

            <div className="titleSong">
              <img className="title" src={title} alt="" width="659px" height="465px" />
            </div>
            <iframe width="910" height="545" src="https://www.youtube.com/embed/POe9SOEKotk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <div className="albumInfo">
              <div className="langBtn">
                <div className="Korean2" onClick={() => showKoreanDescription()}>K</div>
                <div className="English2" onClick={() => showEnglishDescription()}>E</div>
                <div className="Chinese2" onClick={() => showChineseDescription()}>C</div>
                <div className="Japanese2" onClick={() => showJapaneseDescription()}>J</div>
              </div>
              <div className="information">
                <p>세계 최정상 걸그룹 BLACKPINK가 두 번째 정규 앨범 [BORN PINK]를 발표했다. 지난 8월 선공개곡 ‘Pink Venom’으로 전세계 리스너들을 중독시킨 BLACKPINK가 두 번째 정규앨범 [BORN PINK]로 또 한 번 전세계를 매혹시킬 전망이다.</p>
                <p>[BORN PINK]는 태생부터 남다른 존재감을 지닌 BLACKPINK의 자신감을 드러내는 앨범명으로, 타이틀곡 ‘Shut Down’을 비롯한 BLACKPINK만의 강렬한 사운드를 담은 독보적인 트랙 8곡이 수록됐다.</p>
                <p>선공개곡부터 정규앨범과 월드투어까지. 대규모 프로젝트를 통해 블랙핑크가 어떠한 신기록을 써내려갈지 주목된다.</p>
              </div>
              <div className="cover">
              <img className="ds" src={ds} alt="" />
              </div>
              <div className="options">
                <div className="dropdown">
                  <button className="dropbtn">
                    <span className="dropbtn_icon">LISTEN ON</span>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">SPOTIFY</a>
                    <a href="#">APPLE MUSIC</a>
                    <a href="#">MELON</a>
                    <a href="#">GENIE</a>
                    <a href="#">VIBE</a>
                    <a href="#">FLO</a>
                    <a href="#">BUGS</a>
                    <a href="#">YOUTUBE MUSIC</a>
                  </div>
                </div>

                <div className="dropdown">
                  <button className="dropbtn">
                    <span className="dropbtn_icon">BUY NOW</span>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">YG SELECT(KR)</a>
                    <a href="#">YG SELECT(EN)</a>
                    <a href="#">YG SELECT(CH)</a>
                    <a href="#">YG SELECT(JP)</a>
                    <a href="#">YG SELECT(TH)</a>
                    <a href="#">YG SELECT(G market)</a>
                  </div>
                </div>
              </div>
              <div className="tracklist">
                <img className="track" src={track} alt="track" />
              </div>
              <div className="mainimg">
                <img className="main" src={main} alt="main" />
              </div>
            </div>
            <div className="more">
              <span>More about BLACKPINK@</span>
            </div>
            <div className="blackpinkLogo"><a href="https://www.instagram.com/BLACKPINKOFFICIAL"><img src="images/blackpinkLogo.png" alt="" /></a></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlackpinkPage;
