import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const TypographyPage: FunctionComponent = () => (
	<Layout>
		<SEO title="Typography" />
		<section className="block">
			<div className="grid">
				<div className="column-12">
					<h1 className="heading-1">Header 1</h1>
					<h1 className="heading-2">Header 2</h1>
					<h1 className="heading-3">Header 3</h1>
					<h1 className="heading-4">Header 4</h1>
					<h1 className="heading-5">Header 5</h1>
					<h1 className="heading-6">Header 6</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam quam. Ornare massa eget egestas purus
						viverra accumsan. Lacus vel facilisis volutpat est velit egestas dui. Aliquet enim tortor at auctor urna
						nunc. Iaculis nunc sed augue lacus. Eleifend donec pretium vulputate sapien. Leo duis ut diam quam nulla
						porttitor massa id neque. Ullamcorper malesuada proin libero nunc consequat. Feugiat scelerisque varius
						morbi enim nunc. Malesuada proin libero nunc consequat. Bibendum neque egestas congue quisque egestas diam.
						Amet dictum sit amet justo donec enim diam. In pellentesque massa placerat duis ultricies lacus. Volutpat
						blandit aliquam etiam erat. Montes nascetur ridiculus mus mauris.
					</p>
					<p>
						In est ante in nibh mauris cursus mattis. Etiam non quam lacus suspendisse faucibus. Laoreet id donec
						ultrices tincidunt arcu non sodales neque. Sit amet commodo nulla facilisi nullam vehicula ipsum. Viverra
						nibh cras pulvinar mattis nunc sed blandit libero volutpat. Malesuada fames ac turpis egestas integer. At
						erat pellentesque adipiscing commodo. Tellus rutrum tellus pellentesque eu tincidunt tortor. Vitae suscipit
						tellus mauris a diam. Purus gravida quis blandit turpis cursus in hac habitasse. Sollicitudin tempor id eu
						nisl nunc mi ipsum. Enim ut sem viverra aliquet. Leo integer malesuada nunc vel risus commodo viverra
						maecenas. Id nibh tortor id aliquet lectus proin.
					</p>
				</div>
			</div>
		</section>
	</Layout>
);

export default TypographyPage;
