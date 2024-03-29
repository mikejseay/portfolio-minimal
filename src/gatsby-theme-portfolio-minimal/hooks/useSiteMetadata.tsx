import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { SocialProfile } from '../components/SocialProfiles';
import { AllSettingsQueryResult } from '../types';

export interface SiteMetadata {
    language: string;
    siteUrl: string;
    thumbnail: { childImageSharp: { original: { src: string } } };
    title: string;
    titleTemplate: string;
    description: string;
    author: string;
    avatar: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
    bio: string;
    social: {
        [profile in SocialProfile]: string;
    };
}

export function useSiteMetadata(): SiteMetadata {
    const data: AllSettingsQueryResult<{ siteMetadata: SiteMetadata }> = useStaticQuery(query);
    return data.allSettingsJson.settings[0].siteMetadata;
}

export const query = graphql`
    query SiteMetadata2 {
        allSettingsJson: allContentJson {
            settings: nodes {
                siteMetadata {
                    author
                    avatar {
                        childImageSharp {
                            gatsbyImageData(height: 100, width: 100)
                        }
                    }
                    bio
                    description
                    language
                    siteUrl
                    thumbnail {
                        childImageSharp {
                            original {
                                src
                            }
                        }
                    }
                    title
                    social {
                        behance
                        github
                        linkedin
                        mail
                        medium
                        twitter
                    }
                    titleTemplate
                }
            }
        }
    }
`;
