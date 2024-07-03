import CountUp from 'react-countup';
import './Ranking.css';

const Ranking = () => {
    return (
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
    );
}

export default Ranking;
