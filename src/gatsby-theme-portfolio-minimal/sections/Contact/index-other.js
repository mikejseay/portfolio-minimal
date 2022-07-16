import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from 'gatsby-theme-portfolio-minimal/src/components/Animation/index';
import { Section } from 'gatsby-theme-portfolio-minimal/src/components/Section';
import { SocialProfiles } from 'gatsby-theme-portfolio-minimal/src/components/SocialProfiles';
import { useLocalDataSource } from 'gatsby-theme-portfolio-minimal/src/sections/Contact/data';
import * as classes from './style.module.css';

export function ContactSection(props) {
    const response = useLocalDataSource();
    const data = response.allContactJson.sections[0];

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading} additionalClasses={[classes.Contact]}>
                {data.description && <p className={classes.Description}>{data.description}</p>}
                <div className={classes.Profile}>
                    {data.image.src && (
                        <GatsbyImage
                            className={classes.Avatar}
                            image={data.image.src.childImageSharp.gatsbyImageData}
                            alt={data.image.alt || `Profile ${data.name}`}
                        />
                    )}
                    <div className={classes.ContactDetails}>
                        <div className={classes.Name}>{data.name}</div>
                        <u>
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                        </u>
                    </div>
                </div>
                {data.socialProfiles && (
                    <SocialProfiles from={data.socialProfiles.from} showIcon={data.socialProfiles.showIcons} />
                )}
                <div className={'smoking-gun'}> </div>
            </Section>
        </Animation>
    );
}
