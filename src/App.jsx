import { useEffect } from 'react';

import Header from './components/header-section/Header';
import Compilation from './components/compilation-section/Compilation';
import Ranking from './components/ranking-section/Ranking';
import YeahOverall from './components/yeah-overall-section/YeahOverall';
import YeahCharts from './components/yeah-charts-section/YeahCharts';
import AllYeahSongs from './components/all-yeah-songs-section/AllYeahSongs';
import Footer from './components/footer-section/Footer';

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
      <Header />

      <main className='container-full'>
        <Compilation />

        <div className='container'>
          <Ranking />
          <YeahOverall />
        </div>

        <YeahCharts />
        <AllYeahSongs />

        <aside className='container'>
          <div id='disqus_thread'></div>
        </aside>
      </main>
      
      <Footer />
    </>
  )
}

export default App
