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
      <header className='tp-hero-bg'>
        <section className='tp-hero-bg--text'>
          <p>OH YEAH?</p>
          <p>Do you know me!?</p>
          <p>Our name is <strong> <a href='https://en.wikipedia.org/wiki/The_Pillows' target='_blank'>the pillows</a></strong>, OK?</p>
        </section>
      </header>

      <main className='container-full'>
        <section className='container'>
          <h1 className='title'>'Oh Yeah' examples compilation</h1>

          <article id='tp-compilation'>
            <p>This band is known, among other things, for the countless times that vocalist Sawao Yamanaka says <strong><em>'oh yeah'</em></strong> in many of their songs.</p>
            
            <p>Therefore, I'll show you a small compilation about that, and next, I'll breakdown several charts that counts the number of every 'oh yeah' of all his songs. To simplify this measurement, <strong>I'll only count the times he says 'yeah', and not 'oh yeah' as a whole word</strong>.</p>

            <p>The following videos belongs to the author <a href='https://www.youtube.com/user/sononamida/' target='_blank'>sononamida</a>, so watch it directly from YouTube as appreciation.</p>

            <div id='tp-compilation-videos'>
              <iframe width='640' height='480' src='https://www.youtube.com/embed/Y08_zl7Qhdg' allowFullScreen style={{ border: 'none' }}></iframe>

              <iframe width='640' height='480' src='https://www.youtube.com/embed/z3mqVlymwVA' allowFullScreen style={{ border: 'none' }}></iframe>
            </div>
          </article>
        </section>

        <div className='container'>
          <section id='tp-ranking-songs'>
            <h1 className='title'>Yeah Ranking Songs</h1>

            <section className='tp-ranking-yeahs'>
              <article className='tp-ranking-total-yeahs'>
                <h2>Total current 'yeahs'</h2>
                <div className='tp-ranking-podium-numbers'>
                  <CountUp start={0} end={647} duration={4} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                </div>
              </article>
              
              <article className='tp-ranking-top3'>
                <div className='tp-ranking-card'>
                  <header>
                    <h3>1<sup>st</sup> song</h3>
                  </header>
                  <CountUp start={0} end={76} duration={5} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
                    {({ countUpRef }) => <span className='tp-ranking-podium-numbers tp-ranking-first-position' ref={countUpRef} />}
                  </CountUp>
                  <p className='tp-ranking-song-winner'>Like a Lovesong (Back to Back)</p>
                  <p>Album: Little Busters (1998)</p>
                </div>

                <div className='tp-ranking-card'>
                  <header>
                    <h3>2<sup>nd</sup> song</h3>
                  </header>
                  <CountUp start={0} end={42} duration={5} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
                    {({ countUpRef }) => <span className='tp-ranking-podium-numbers tp-ranking-second-position' ref={countUpRef} />}
                  </CountUp>
                  <p className='tp-ranking-song-winner'>Rookie Jet</p>
                  <p>Album: Thank you, My Twilight (2002)</p>
                </div>

                <div className='tp-ranking-card'>
                  <header>
                    <h3>3<sup>rd</sup> song</h3>
                  </header>
                  <CountUp start={0} end={35} duration={5} scrollSpyDelay={200} useEasing scrollSpyOnce enableScrollSpy>
                    {({ countUpRef }) => <span className='tp-ranking-podium-numbers tp-ranking-third-position' ref={countUpRef} />}
                  </CountUp>
                  <p className='tp-ranking-song-winner'>Back Seat Dog</p>
                  <p>Album: Happy Bivouac (1999)</p>
                </div>
              </article>

              <section className='tp-ranking-first-last-yeah-song'>
                <article className='tp-ranking-card'>
                  <header>
                    <h3>1<sup>st</sup> 'yeah' song</h3>
                  </header>
                  <p className='tp-ranking-first-yeah tp-ranking-song-winner'>Never Find</p>
                  <p>Album: 90's My Life (1990)</p>
                </article>

                <article className='tp-ranking-card'>
                  <header>
                    <h3>Last 'yeah' song</h3>
                  </header>
                  <p className='tp-ranking-last-yeah tp-ranking-song-winner'>Before going bed</p>
                  <p>Album: Rebroadcast (2018)</p>
                </article>
              </section>
            </section>
          </section>

          <section id='tp-yeah-overall'>
            <h2 className='title'>Yeah Overall</h2>

            <article className='tp-yeah-overall-container'>
              <div className='tp-yeah-overall-row'>
                <p>Total years with some 'yeahs'! 😀</p>
                <ProgressWithLabel value={24} size={35} color={`#28a745`} />
              </div>

              <div className='tp-yeah-overall-row'>
                <p>Total years with 'yeahs' in a row! 😄</p>
                <ProgressWithLabel value={16} size={35} color={`#28a745`} />
              </div>
              
              <div className='tp-yeah-overall-row'>
                <p>Total years with no 'yeahs' ☹️</p>
                <ProgressWithLabel value={10} size={35} color={`#dc3545`} />
              </div>
            </article>
          </section>
        </div>
        
        <section id='tp-yeahs-per-year-container'>
          <article className='tp-yeahs-per-year container'>
            <h2 className='title'>Number of 'yeahs' per year</h2>
            <YeahsPerYearBarChart width={1000} height={700} colorBar={'rgba(255, 188, 9, .6)'} />
          </article>
        </section>

        <section id='tp-yeahs-per-decade-container'>
          <article className='tp-yeahs-per-decade container'>
            <h2 className='title'>Number of 'yeahs' per decade</h2>
            <YeahsPerDecadeBarChart width={1000} height={600} colorBar={'rgba(255, 188, 9, .6)'} />
          </article>
        </section>

        <section id='tp-yeahs-per-label-company-container'>
          <article className='tp-yeahs-per-label-company container'>
            <h2 className='title'>Number of 'yeahs' per label company</h2>
            <YeahsPerLabelCompanyBarChart width={1000} height={600} />
          </article>
        </section>

        <section id='tp-all-yeah-songs-container'>
          <article className='tp-all-yeah-songs'>
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
