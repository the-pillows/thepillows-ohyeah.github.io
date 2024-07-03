import './Compilation.css';

const Compilation = () => {
	return (
		<section id="tp-compilation" className='container'>
			<h1 className='title'>'Oh Yeah' examples compilation</h1>

			<article id='tp-compilation__description'>
				<p>This band is known, among other things, for the countless times that singer Sawao Yamanaka says <strong><em>'oh yeah'</em></strong> in many songs.</p>
				
				<p>Therefore, I'll breakdown several charts that counts the number of every 'oh yeah' of all his songs. To simplify this measurement, <strong>I'll only count the times he says 'yeah', and not 'oh yeah' as a whole word</strong>.</p>

				<p>The following videos belongs to the author <a href='https://www.youtube.com/user/sononamida/' target='_blank'>sononamida</a>, so watch it directly from YouTube as appreciation.</p>

				<div id='tp-compilation__videos'>
					<iframe width='640' height='480' src='https://www.youtube.com/embed/Y08_zl7Qhdg' allowFullScreen style={{ border: 'none' }}></iframe>

					<iframe width='640' height='480' src='https://www.youtube.com/embed/z3mqVlymwVA' allowFullScreen style={{ border: 'none' }}></iframe>
				</div>
			</article>
		</section>
	);
}

export default Compilation;
