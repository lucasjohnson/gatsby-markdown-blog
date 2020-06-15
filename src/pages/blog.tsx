import React, { StatelessComponent } from 'react';
import Layout from '../components/Layout';
import GridBox from '../blocks/elements/GridBox';
import GridCard from '../blocks/elements/GridCard';
import SEO from '../components/Head/SEO';
import { useStaticQuery, graphql } from 'gatsby';

interface BlogQuery {
	allMarkdownRemark: {
		edges: {
			node: {
				fields: {
					slug: string;
				};
				frontmatter: {
					abstract: string;
					date: string;
					title: string;
					banner: {
						childImageSharp: {
							fluid: {
								aspectRatio: number;
								base64: string;
								sizes: string;
								srcSet: string;
							};
						};
					};
				};
			};
		};
	};
}

const BlogPage: StatelessComponent = () => {
	const { allMarkdownRemark } = useStaticQuery<BlogQuery>(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							abstract
							date
							title
							banner {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	const { edges } = allMarkdownRemark;

	const renderCard = (): StatelessComponent =>
		edges.map((edge: object, index: number) => {
			const { node } = edge;
			const { frontmatter } = node;
			frontmatter.slug = node.fields.slug;

			return <GridCard data={frontmatter} key={index} />;
		});

	return (
		<Layout>
			<SEO title="Blog" />
			<section className="Blog">
				<div className="block">
					<div className="grid-flex">
						<div className="column-12">
							<h1 className="heading-1">Blog</h1>
							<GridBox variant="grid-box" column={1} columnMd={2} columnLg={3}>
								{renderCard()}
							</GridBox>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default BlogPage;
