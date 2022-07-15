import React from "react";
import {Page, Seo} from 'gatsby-theme-portfolio-minimal';
import {graphql} from 'gatsby'
import Gallery from '@browniebroke/gatsby-image-gallery'
import './viz.css';

export default function Viz({data}) {
    console.log(data);
    const gallery = data.gallery.edges.map(({node}, index) => ({
        ...node.childImageSharp,
        // Generate name based on the index as caption.
        caption: `Image ${index}`,
    }));
    const lightboxOptions = {};
    return (
        <>
            <Seo title="Viz"/>
            <Page>
                <Gallery
                    images={gallery}
                    lightboxOptions={lightboxOptions}/>
            </Page>
        </>
    );
}

export const pageQuery = graphql`
  query ImagesForGallery {
    gallery: allFile(
      filter: {extension: {eq: "png"}, name: {glob: "viz*"} }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
