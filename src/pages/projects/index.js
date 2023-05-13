import React from 'react';
import Layout from '../../components/Layout';
import { portfolio, projects2 } from '../../styles/projects.module.css';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Product({ data }) {
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects2}>
          {projects.map(project => {
            const image = getImage(project.frontmatter.thumb);
            return (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                  {image && (
                    <GatsbyImage image={image} alt="project image" />
                  )}
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <p>Like what you see? Email me at {contact} for a quote</p>
      </div>
    </Layout>
  );
}

export const query = graphql`query ProjectsPage {
  projects: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}`;