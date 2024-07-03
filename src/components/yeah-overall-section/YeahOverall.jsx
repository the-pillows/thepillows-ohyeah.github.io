import { ProgressWithLabel } from '../Progress';
import './YeahOverall.css';

const YeahOverall = () => {
	return (
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
	);
}

export default YeahOverall;
