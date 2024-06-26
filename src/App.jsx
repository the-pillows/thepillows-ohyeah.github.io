import './App.css'

function App() {
  return (
    <>
      <div className="the-pillows-background">
        <div id="presentation" className="the-pillows-background-text">
          <p>OH YEAH?</p>
          <p>Do you know me!?</p>
          <p>Our name is <strong>
            <a href="https://en.wikipedia.org/wiki/The_Pillows" target="_blank">the pillows</a></strong>, OK?
          </p>
        </div>
      </div>

      <div className='container'>
        <h1 className='title'>"Oh Yeah" examples compilation</h1>

        <div id="compilation">
          <p>In order to the context of these charts, some examples of <strong>"oh yeah"</strong> catch-phrase compilation that vocalist Sawao Yamanaka says in many songs, although present charts <strong><ins>actually only counting "yeah", and not "oh yeah"</ins></strong>.</p>

          <p>The video's original author below is <a href="https://www.youtube.com/user/sononamida/" target="_blank">sononamida</a>, so watch it directly from YouTube as appreciation.</p>

          <div id="compilation-video">
            <iframe width="640" height="480" src="https://www.youtube.com/embed/Y08_zl7Qhdg" allowFullScreen style={{ border: 'none' }}></iframe>

            <iframe width="640" height="480" src="https://www.youtube.com/embed/z3mqVlymwVA" allowFullScreen style={{ border: 'none' }}></iframe>
          </div>
        </div>

        <div id="ranking">
          <h1 className='title'>Yeah Ranking Songs</h1>

          <div className='ranking-yeahs'>
            <div>
              <div className="yeah-total">
                <h3>Total current "yeahs"</h3>
                <div>
                  <span className="yeah-podium-numbers">647</span>
                </div>
              </div>
            </div>
            
            <div className='ranking-top-3'>
              <div>
                <h3>1<sup>st</sup> song</h3>
                <p className="yeah-podium-numbers yeah-first-position">76</p>
                <p className="song-winner-size">Like a Lovesong (Back to Back)</p>
                <p className="text-center album">Album: Little Busters (1998)</p>
              </div>

              <div>
                <h3>2<sup>nd</sup> song</h3>
                <p className="yeah-podium-numbers yeah-second-position">42</p>
                <p className="song-winner-size">Rookie Jet</p>
                <p className="text-center album">Album: Thank you, My Twilight (2002)</p>
              </div>

              <div>
                <h3>3<sup>rd</sup> song</h3>
                <p className="yeah-podium-numbers yeah-third-position">35</p>
                <p className="song-winner-size">Back Seat Dog</p>
                <p className="text-center album">Album: Happy Bivouac (1999)</p>
              </div>
            </div>

            <div className='ranking-first-last-yeah-song'>
              <div>
                <h3 className="text-center mb-3 font-weight-bold">1<sup>st</sup> "yeah" song</h3>
                <div className="text-center mb-3">
                  <p className="song-first-yeah song-winner-size">Never Find</p>
                </div>
                <p className="text-center album">Album: 90's My Life (1990)</p>
              </div>

              <div>
                <h3 className="text-center mb-3 font-weight-bold">Last "yeah" song</h3>
                <div className="text-center mb-3">
                  <p className="song-last-yeah song-winner-size">Before going bed</p>
                </div>
                <p className="text-center album">Album: Rebroadcast (2018)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
