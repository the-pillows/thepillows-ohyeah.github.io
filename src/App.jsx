import { styled } from '@mui/system';
import { LinearProgress, Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import './App.css'

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 24,
  backgroundColor: '#e9ecef'
}));

function ProgressWithLabel({ value, size, color }) {
  return (
    <Box position="relative" width="100%">
      <CustomLinearProgress variant="determinate" value={value} size={size} 
        sx={{ '& .MuiLinearProgress-bar': {
            backgroundColor: `${color}`
          }
        }} />
      <Box top={0} left={0} bottom={0} right={0} position="absolute"
        display="flex">
        <Typography sx={{ marginLeft: ".5rem", color: "#fff" }}>{`${value}`}</Typography>
      </Box>
    </Box>
  );
}

function App() {
  const data = [
    { year: 1990, yeahs: 2 },
    { year: 1991, yeahs: 0 },
    { year: 1992, yeahs: 14 },
    { year: 1993, yeahs: 0 },
    { year: 1994, yeahs: 25 },
    { year: 1995, yeahs: 39 },
    { year: 1996, yeahs: 6 },
    { year: 1997, yeahs: 29 },
    { year: 1998, yeahs: 114 },
    { year: 1999, yeahs: 101 },
    { year: 2000, yeahs: 20 },
    { year: 2001, yeahs: 36 },
    { year: 2002, yeahs: 67 },
    { year: 2003, yeahs: 25 },
    { year: 2004, yeahs: 25 },
    { year: 2005, yeahs: 8 },
    { year: 2006, yeahs: 10 },
    { year: 2007, yeahs: 41 },
    { year: 2008, yeahs: 26 },
    { year: 2009, yeahs: 5 },
    { year: 2010, yeahs: 0 },
    { year: 2011, yeahs: 17 },
    { year: 2012, yeahs: 1 },
    { year: 2013, yeahs: 0 },
    { year: 2014, yeahs: 12 },
    { year: 2015, yeahs: 0 },
    { year: 2016, yeahs: 1 },
    { year: 2017, yeahs: 9 },
    { year: 2018, yeahs: 14 },
    { year: 2019, yeahs: 0 },
    { year: 2020, yeahs: 0 },
    { year: 2021, yeahs: 0 },
    { year: 2022, yeahs: 0 },
    { year: 2023, yeahs: 0 },
    { year: 2024, yeahs: 0 },
  ];

  const yeahsPerDecade = [
    { decade: '1990 - 1999', yeahs: 330 },
    { decade: '2000 - 2009', yeahs: 263 },
    { decade: '2010 - 2019', yeahs: 54 },
    { decade: '2020 - Present', yeahs: 0 }
  ];

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

      <div className='container-full'>
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
        </div>

        <div className='container'>
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

            <div id="yeah-overall">
              <h1 className="title">Yeah Overall</h1>

              <div className='yeah-overall-container'>
                <div className='yeah-overall-row'>
                  <p>Total years with some "yeahs"! <span className="yeah-overall-emoji-size">😀</span>
                  </p>
                  <ProgressWithLabel value={24} size={35} color={`#28a745`} />
                </div>

                <div className='yeah-overall-row'>
                  <p>Total years with "yeahs" in a row! <span className="yeah-overall-emoji-size">😄</span>
                  </p>
                  <ProgressWithLabel value={16} size={35} color={`#28a745`} />
                </div>
                
                <div className='yeah-overall-row'>
                  <p>Total years with no "yeahs" <span className="yeah-overall-emoji-size">☹️</span>
                  </p>
                  <ProgressWithLabel value={10} size={35} color={`#dc3545`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="yeahs-per-year-container">
          <h3 className="title">Number of "yeahs" per year</h3>

          <div className='yeahs-per-year'>
            <BarChart
              series={[
                {
                  data: data.map(item => item.yeahs),
                  label: 'Number of yeahs'
                },
              ]}
              xAxis={[
                { scaleType: 'linear', label: 'Number of yeahs' },
              ]}
              yAxis={[
                {
                  scaleType: 'band',
                  label: 'Year',
                  data: data.map(item => item.year)
                },
              ]}
              colors={["rgba(255, 188, 9, .6)"]}
              margin={{left: 65}}
              layout="horizontal"
              grid={{ vertical: true }}
              width={1000}
              height={800}
            />
          </div>
        </div>

        <div id="yeahs-per-decade-container">
          <h3 className="title">Number of "yeahs" per decade</h3>

          <div className='yeahs-per-decade'>
            <BarChart
              xAxis={[
                {
                  scaleType: 'band',
                  data: yeahsPerDecade.map(item => item.decade)
                }
              ]}
              yAxis={[
                { scaleType: 'linear', label: 'Yeahs' },
              ]}
              series={[
                { 
                  label: 'Number of yeahs',
                  data: yeahsPerDecade.map(item => item.yeahs)
                }
              ]}
              colors={["rgba(255, 188, 9, .6)"]}
              grid={{ vertical: true }}
              width={1000}
              height={600}
            />
          </div>
        </div>

        <div id="yeahs-per-label-company-container">
          <h3 className="title">Number of "yeahs" per label company</h3>

          <div className='yeahs-per-label-company'>
            <BarChart
              xAxis={[
                { scaleType: 'band', data: ['Company Labels'] }
              ]}
              yAxis={[
                { scaleType: 'linear', label: 'Yeahs' },
              ]}
              series={[
                { 
                  label: 'Captain Records (1990)',
                  data: [2],
                  color: "rgba(255, 188, 9, .6)"
                },
                {
                  label: 'Pony Canyon (1991-1993)',
                  data: [14],
                  color: "#e70023"
                },
                {
                  label: 'King Records (1994-2006)',
                  data: [505],
                  color: "#009944"
                },
                {
                  label: 'Avex Trax (2006-2016)',
                  data: [90],
                  color: "#004ca3"
                },
                {
                  label: 'Delicious Label (2016-Present)',
                  data: [36],
                  color: "#080808"
                }
              ]}
              margin={{ top: 100 }}
              grid={{ horizontal: true }}
              width={1000}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
