import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
const Service = ({ data, pageContext }): ReactElement => {
	console.log(data, pageContext);
	return <Layout></Layout>;
};

export default Service;
