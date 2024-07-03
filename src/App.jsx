import { useEffect } from 'react';
import CountUp from 'react-countup';

import { YeahsPerDecadeBarChart, YeahsPerLabelCompanyBarChart, YeahsPerYearBarChart } from './components/Charts';
import { ProgressWithLabel } from './components/Progress';
import ThePillowsSongsTable from './components/Table';

import './App.css';

function App() {
  let isDisqusShow = false;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const disqusElementPosition = scrollPosition + windowHeight;
  
      let disqusElement = document.querySelector("#disqus_thread");
      const disqusElementOffsetTop = disqusElement.getBoundingClientRect().top + scrollPosition - 100;

      if (disqusElementPosition >= disqusElementOffsetTop && !isDisqusShow) {
        loadDisqusComments();
        isDisqusShow = true;
      }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const loadDisqusComments = () => {
    window.disqus_config=function(){this.page.url="https://thepillows-ohyeah.github.io/",this.page.identifier="thepillows-ohyeah"};
    !function(){let e=document,t=e.createElement("script");t.async=true,t.src="https://thepillows-ohyeah.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}();
  }

  return (
    <>
      <header className='the-pillows-background'>
        <section id='presentation' className='the-pillows-background-text'>
          <p>OH YEAH?</p>
          <p>Do you know me!?</p>
          <p>Our name is <strong> <a href='https://en.wikipedia.org/wiki/The_Pillows' target='_blank'>the pillows</a></strong>, OK?</p>
        </section>
      </header>

      <main className='container-full'>
        <section className='container'>
          <h1 className='title'>'Oh Yeah' examples compilation</h1>

          <article id='compilation'>
            <p>This band is known, among other things, for the countless times that vocalist Sawao Yamanaka says <strong><em>'oh yeah'</em></strong> in many of their songs.</p>
            
            <p>Therefore, I'll show you a small compilation about that, and next, I'll breakdown several charts that counts the number of every 'oh yeah' of all his songs. To simplify this measurement, <strong>I'll only count the times he says 'yeah', and not 'oh yeah' as a whole word</strong>.</p>

            <p>The following videos belongs to the author <a href='https://www.youtube.com/user/sononamida/' target='_blank'>sononamida</a>, so watch it directly from YouTube as appreciation.</p>

            <div id='compilation-video'>
              <iframe width='640' height='480' src='https://www.youtube.com/embed/Y08_zl7Qhdg' allowFullScreen style={{ border: 'none' }}></iframe>

              <iframe width='640' height='480' src='https://www.youtube.com/embed/z3mqVlymwVA' allowFullScreen style={{ border: 'none' }}></iframe>
            </div>
          </article>
        </section>

        <div className='container'>
          <section id='ranking'>
            <h1 className='title'>Yeah Ranking Songs</h1>

            <section className='ranking-yeahs'>
              <article className='yeah-total'>
                <h2>Total current 'yeahs'</h2>
                <div className='yeah-podium-numbers'>
                  <CountUp start={0} end={647} duration={4} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                </div>
              </article>
              
              <article className='ranking-top-3'>
                <div className='ranking-card'>
                  <header>
                    <h3>1<sup>st</sup> song</h3>
                  </header>
                  <CountUp start={0} end={76} duration={5} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
                    {({ countUpRef }) => <span className='yeah-podium-numbers yeah-first-position' ref={countUpRef} />}
                  </CountUp>
                  <p className='song-winner-size'>Like a Lovesong (Back to Back)</p>
                  <p>Album: Little Busters (1998)</p>
                </div>

                <div className='ranking-card'>
                  <header>
                    <h3>2<sup>nd</sup> song</h3>
                  </header>
                  <CountUp start={0} end={42} duration={5} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
                    {({ countUpRef }) => <span className='yeah-podium-numbers yeah-second-position' ref={countUpRef} />}
                  </CountUp>
                  <p className='song-winner-size'>Rookie Jet</p>
                  <p>Album: Thank you, My Twilight (2002)</p>
                </div>

                <div className='ranking-card'>
                  <header>
                    <h3>3<sup>rd</sup> song</h3>
                  </header>
                  <CountUp start={0} end={35} duration={5} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
                    {({ countUpRef }) => <span className='yeah-podium-numbers yeah-third-position' ref={countUpRef} />}
                  </CountUp>
                  <p className='song-winner-size'>Back Seat Dog</p>
                  <p>Album: Happy Bivouac (1999)</p>
                </div>
              </article>

              <section className='ranking-first-last-yeah-song'>
                <article className='ranking-card'>
                  <header>
                    <h3>1<sup>st</sup> 'yeah' song</h3>
                  </header>
                  <p className='song-first-yeah song-winner-size'>Never Find</p>
                  <p>Album: 90's My Life (1990)</p>
                </article>

                <article className='ranking-card'>
                  <header>
                    <h3>Last 'yeah' song</h3>
                  </header>
                  <p className='song-last-yeah song-winner-size'>Before going bed</p>
                  <p>Album: Rebroadcast (2018)</p>
                </article>
              </section>
            </section>
          </section>

          <section id='yeah-overall'>
            <h2 className='title'>Yeah Overall</h2>

            <article className='yeah-overall-container'>
              <div className='yeah-overall-row'>
                <p>Total years with some 'yeahs'! <span className='yeah-overall-emoji-size'>😀</span>
                </p>
                <ProgressWithLabel value={24} size={35} color={`#28a745`} />
              </div>

              <div className='yeah-overall-row'>
                <p>Total years with 'yeahs' in a row! <span className='yeah-overall-emoji-size'>😄</span>
                </p>
                <ProgressWithLabel value={16} size={35} color={`#28a745`} />
              </div>
              
              <div className='yeah-overall-row'>
                <p>Total years with no 'yeahs' <span className='yeah-overall-emoji-size'>☹️</span>
                </p>
                <ProgressWithLabel value={10} size={35} color={`#dc3545`} />
              </div>
            </article>
          </section>
        </div>
        
        <section id='yeahs-per-year-container'>
          <article className='yeahs-per-year container'>
            <h2 className='title'>Number of 'yeahs' per year</h2>
            <YeahsPerYearBarChart width={1000} height={700} colorBar={'rgba(255, 188, 9, .6)'} />
          </article>
        </section>

        <section id='yeahs-per-decade-container'>
          <article className='yeahs-per-decade container'>
            <h2 className='title'>Number of 'yeahs' per decade</h2>
            <YeahsPerDecadeBarChart width={1000} height={600} colorBar={'rgba(255, 188, 9, .6)'} />
          </article>
        </section>

        <section id='yeahs-per-label-company-container'>
          <article className='yeahs-per-label-company container'>
            <h2 className='title'>Number of 'yeahs' per label company</h2>
            <YeahsPerLabelCompanyBarChart width={1000} height={600} />
          </article>
        </section>

        <section id='all-yeah-songs-container'>
          <article className='all-yeah-songs'>
            <h2 className='title'>the pillows all 'yeah' songs</h2>
            <ThePillowsSongsTable />
          </article>
        </section>

        <aside className='container'>
          <div id='disqus_thread'></div>
        </aside>
      </main>

      <footer>
        <div>
          <p>Source: My boredom due to COVID-19 crisis.</p>
        </div>
        <div>
          <p>With 💛 from Spain</p>
        </div>
      </footer>
    </>
  )
}

export default App
