import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
const Tag = ({ data, pageContext }): ReactElement => {
	console.log(data, pageContext);
	return <Layout></Layout>;
};

export default Tag;
