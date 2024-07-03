import ThePillowsSongsTable from '../Table';
import './AllYeahSongs.css';

const AllYeahSongs = () => {
    return (
        <section id='tp-all-yeah-songs-container'>
          <article className='tp-all-yeah-songs'>
            <h2 className='title'>the pillows all 'yeah' songs</h2>
            <ThePillowsSongsTable />
          </article>
        </section>
    );
}

export default AllYeahSongs;
