import React, { useEffect } from 'react';
import './style.css';
import bigbang from './images/img_bigbang.jpg';
import blackpink from './images/img_blackpink(3).jpg';
import winner from './images/img_winner(7).jpg';
import akmu from './images/img_profile(18).jpg';
import treasure from './images/img_TREASURE(4).jpg';
import sech from './images/img_SECHSKIES(2).jpg';



const BigbangPage = () => {
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
      span.addEventListener('mouseenter', function () {
        this.style.color = 'black';
      });
      span.addEventListener('mouseleave', function () {
        if (!this.classList.contains('selected')) {
          this.style.color = '#C8C8C8';
        }
      });
    });

    const KoreanInfo = document.getElementById("KoreanInfoId");
    const EnglishInfo = document.getElementById("EnglishInfoId");
    const ChinseInfo = document.getElementById("ChineseInfoId");
    const JapaneseInfo = document.getElementById("JapaneseInfoId");

    EnglishInfo.style.display = "none";
    ChinseInfo.style.display = "none";
    JapaneseInfo.style.display = "none";

    window.showKorean = function () {
      if (KoreanInfo.style.display === "none") {
        EnglishInfo.style.display = "none";
        ChinseInfo.style.display = "none";
        JapaneseInfo.style.display = "none";
        KoreanInfo.style.display = "block";
      } else {
        EnglishInfo.style.display = "none";
        ChinseInfo.style.display = "none";
        JapaneseInfo.style.display = "none";
        KoreanInfo.style.display = "block";
      }
    };

    window.showEnglish = function () {
      if (EnglishInfo.style.display === "none") {
        EnglishInfo.style.display = "block";
        ChinseInfo.style.display = "none";
        JapaneseInfo.style.display = "none";
        KoreanInfo.style.display = "none";
      }
    };

    window.showChinese = function () {
      if (ChinseInfo.style.display === "none") {
        ChinseInfo.style.display = "block";
        JapaneseInfo.style.display = "none";
        KoreanInfo.style.display = "none";
        EnglishInfo.style.display = "none";
      }
    };

    window.showJapanese = function () {
      if (JapaneseInfo.style.display === "none") {
        JapaneseInfo.style.display = "block";
        KoreanInfo.style.display = "none";
        EnglishInfo.style.display = "none";
        ChinseInfo.style.display = "none";
      }
    };

    document.querySelector('.listenImg').addEventListener('mouseover', function () {
      document.querySelector('.Box1').style.display = 'block';
    });

    document.querySelector('.option').addEventListener('mouseleave', function () {
      document.querySelector('.Box1').style.display = 'none';
    });

    document.querySelector('.buyImg').addEventListener('mouseover', function () {
      document.querySelector('.Box2').style.display = 'block';
    });

    document.querySelector('.buy').addEventListener('mouseleave', function () {
      document.querySelector('.Box2').style.display = 'none';
    });
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
          <a href="#"><div className="logo"><img src="images/logo.PNG" alt="" /></div></a>
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
              <button className="left"><i className="fas fa-chevron-left"></i></button>
              <div className="artistImg">
                <div className="photoList">
                  <div className="artist">
                    <div className="on"><img src="images/bu_photonav_on.gif" alt="" /></div>
                    <img className="groupImg" src={bigbang} alt="bigbang" />
                    <div className="groupName">BIGBANG</div>
                  </div>
                  <div className="artist">
                    <img className="groupImg" src={blackpink} alt="blackpink" />
                    <div className="groupName">BLACKPINK</div>
                  </div>
                  <div className="artist">
                  <img className="groupImg" src={winner} alt="winner" />
                    <div className="groupName">WINNER</div>
                  </div>
                  <div className="artist">
                    <img className="groupImg" src={akmu} alt="akmu" />
                    <div className="groupName">AKMU</div>
                  </div>
                  <div className="artist">
                    <img className="groupImg" src={treasure} alt="treasure" />
                    <div className="groupName">TREASURE</div>
                  </div>
                  <div className="artist">
                    <img className="groupImg" src={sech} alt="sechskies" />
                    <div className="groupName">SECHSKIES</div>
                  </div>
                </div>
              </div>
              <button className="right"><i className="fas fa-chevron-right"></i></button>
            </div>

            <div className="pageArtist">
              <h2 className="artistName">BIGBANG</h2>
              <div className="artistNav">
                <ul>
                  <li><a href="#"><span>MAIN</span></a></li>
                  <li><a href="#"><span>ABOUT</span></a></li>
                  <li><a href="#"><span>NEWS</span></a></li>
                  <li><a href="#"><span>NOTICE</span></a></li>
                  <li><a href="#"><span>ALBUM</span></a></li>
                  <li><a href="#"><span>DVD</span></a></li>
                  <li><a href="#"><span>MV</span></a></li>
                  <li><a href="#"><span>GALLERY</span></a></li>
                  <li><a href="#"><span>DOWNLOAD</span></a></li>
                  <li><a href="#"><span>EVENT</span></a></li>
                  <li><a href="#"><span>SCHEDULE</span></a></li>
                </ul>
              </div>
            </div>

            <hr style={{ color: 'black', borderColor: 'black', borderWidth: '1.5px' }} />

            <div className="titleSong">
              <h3 className="artistName">B I G B A N G</h3>
              <p className="songName">봄여름가을겨울<br />(Still Life)</p>
            </div>
            <div className="artistPhoto">
              <img src="https://artist.ygfamily.com/ARTISTS/BIGBANG/music/still-life/img/main.png" alt="아티스트 사진" />
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eN5mG_yMDiM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="MV"></iframe>
            <div className="language">
              <button className="korean" onClick={() => showKorean()}>K</button>
              <button className="english" onClick={() => showEnglish()}>E</button>
              <button className="chinese" onClick={() => showChinese()}>C</button>
              <button className="japanese" onClick={() => showJapanese()}>J</button>
            </div>
            <article className="songInfo">
              <div className="KoreanInfo" id="KoreanInfoId">
                <p className="titleInfo" style={{ fontWeight: 700 }}>[빅뱅, 그 찬란한 이름과 그들의 사계절]</p>
                <p>빅뱅의 싱글 '꽃 길' 발표 이후 약 4년 만에 신곡 '봄여름가을겨울 (still life)'로 돌아왔다. </p>
                <p>빅뱅의 '봄여름가을겨울'은 오가닉하고 따뜻한 밴드 사운드를 기반으로 한 곡으로, 타임리스한 멜로디에 덧붙여진 아름다운 가사가 인상적인 곡이다.</p>
                <p>봄에서 겨울까지 이어지는 시간의 흐름과 계절의 순환을 담은 '봄여름가을겨울'의 도입 가사는 듣는 이들로 하여금 개개인의 지나온 인생에 대해 생각해 보게 하는 매력이 있다. <br />
                  빅뱅 멤버들이 가창을 통해 자아내는 청춘에 대한 회상은, 마치 우리 모두가 경험한 청춘에 대하여 말하는 듯 평화롭고 아름답게 흐르며 듣는 이들을 위안한다. <br />
                  후반부로 전개되며 드러나는 감성적인 코드 진행과 도입부를 여는 담백한 기타 리프, 그리고 이를 따뜻하게 받쳐주는 편곡 요소들로 이뤄진 빅뱅의 '봄여름가을겨울'은 한 시대의 '클래식'으로 남기에 부족함이 없을 것 으로 보인다.</p>
                <p>많은 이들이 너무도 기다려온 "빅뱅". <br />
                  그들이 세상에 선보이는 '봄여름가을겨울'은 많은 사람들로 하여금 마음에 감동과 위안을 주는 곡으로 오랜 시간 기억될 것이다.</p>
              </div>
              <div className="EnglishInfo" id="EnglishInfoId">
                <p style={{ fontWeight: 700 }}>[BIGBANG, the everlasting title and their seasons]</p>
                <p>BIGBANG has comeback with ‘Still Life’ in about 4 years since they released their last single ‘FLOWER ROAD’. </p>
                <p>BIGBANG’s ‘Still Life’ is based on an organic yet warm band sound, with beautiful lyrics on top of timeless melodies. </p>
                <p>The introduction lyrics of ‘Still Life’ which portray the nature and cycle of time and seasons, allow listeners to think about their past. The peaceful recollection of BIGBANG members’ youth narrated by their voices touches the hearts of people as if they’re talking about the beautiful memories of youth experienced by everyone. </p>
                <p>The sentimental codes and simple guitar riffs that open up the second part of the song, along with the warm arrangements that support the sound, make it more than enough for BIGBANG’s ‘Still Life’ to be left as a ‘classic’ song of a generation. </p>
                <p>So many people have been waiting for “BIGBANG”.<br />
                  ‘Still Life’, which they’ll unveil to the world, will be forever remembered as a song that comforts and touches the hearts of many people for a long time. </p>
              </div>
              <div className="ChineseInfo" id="ChineseInfoId">
                <p style={{ fontWeight: 700 }}>[BIGBANG,那个灿烂的名字和他们的四季]</p>
                <p>BIGBANG发行单曲《Flower Road》后时隔约四年携新曲《Still Life》回归。</p>
                <p>BIGBANG的新曲《Still Life》是一首以有机而温暖的乐队演奏声为基础的歌曲,在永恒的旋律中添加了唯美的歌词给人以深刻的印象。</p>
                <p>《Still Life》歌词的导入部分讲述了从春天到冬天时间的流逝和季节的循环,歌曲的魅力就在于让人听过之后会想到自己走过的人生路。<br />
                  BIGBANG成员们通过歌唱唤起了人们对青春的回忆,像是在诉说我们所有人经历过的青春一样，平静而优美的旋律流淌在心间，给人们带来了安慰。<br />
                  歌曲后半部分突出的抒情色彩,打开导入部分的淡淡的吉他演奏,还有与之相衬托的温暖编曲要素,由这些特色构成的BIGBANG歌曲《Still Life》想必会成为一个时代的“经典”。</p>
                <p>让众人期待已久的“BIGBANG”。<br />
                  他们向世人展现的《Still Life》是一首能带给很多人感动和安慰的歌曲,将会长久地留在人们的记忆中。</p>
              </div>
              <div className="JapaneseInfo" id="JapaneseInfoId">
                <p style={{ fontWeight: 700 }}>[BIGBANG，那个灿烂的名字和他们的四季]</p>
                <p>BIGBANG发行单曲《Flower Road》后时隔约四年携新曲《Still Life》回归。</p>
                <p>BIGBANG的新曲《Still Life》是一首以有机而温暖的乐队演奏声为基础的歌曲，在永恒的旋律中添加了唯美的歌词给人以深刻的印象。</p>
                <p>《Still Life》歌词的导入部分讲述了从春天到冬天时间的流逝和季节的循环，歌曲的魅力就在于让人听过之后会想到自己走过的人生路。<br />
                  BIGBANG成员们通过歌唱唤起了人们对青春的回忆，像是在诉说我们所有人经历过的青春一样，平静而优美的旋律流淌在心间，给人们带来了安慰。<br />
                  歌曲后半部分突出的抒情色彩，打开导入部分的淡淡的吉他演奏，还有与之相衬托的温暖编曲要素，由这些特色构成的BIGBANG歌曲《Still Life》想必会成为一个时代的“经典”。</p>
                <p>让众人期待已久的“BIGBANG”。<br />
                  他们向世人展现的《Still Life》是一首能带给很多人感动和安慰的歌曲，将会长久地留在人们的记忆中。</p>
              </div>
            </article>
            <div className="songImg">
              <img src="https://artist.ygfamily.com/ARTISTS/BIGBANG/music/still-life/img/ds.jpg" alt="타이틀 곡" />
            </div>
            <div className="service">
              <div className="option listen">
                <p>LISTEN ON</p>
                <img src="/blackpinkPage/images/btn_photonav_next.gif" alt="드랍다운 이미지" className="listenImg" />
                <div className="drop Box1">
                  <ul className="dropdownMenu">
                    <li>SPOTIFY</li>
                    <li>APPLE MUSIC</li>
                    <li>MELON</li>
                    <li>GENIE</li>
                    <li>VIBE</li>
                    <li>FLO</li>
                    <li>BUGS</li>
                    <li>YOUTUBE MUSIC</li>
                  </ul>
                </div>
              </div>
              <div className="option buy">
                <p>BUY NOW</p>
                <img src="/blackpinkPage/images/btn_photonav_next.gif" alt="드랍다운 이미지" className="buyImg" />
                <div className="drop Box2">
                  <ul className="dropdownMenu">
                    <li>YG SELECT (KR)</li>
                    <li>YG SELECT (EN)</li>
                    <li>YG SELECT (JP)</li>
                    <li>YG SELECT (CH)</li>
                    <li>YG SELECT (TH)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BigbangPage;
