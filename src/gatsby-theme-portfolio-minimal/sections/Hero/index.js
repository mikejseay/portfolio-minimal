import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { SocialProfiles } from '../../components/SocialProfiles';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';
import './index.css';

import Graph from "react-graph-vis";
import genreNodes from "../../../../content/data/genreNodesNoLabel.json"
import genreEdges from "../../../../content/data/genreEdges.json"

export function HeroSection(props) {
    const response = useLocalDataSource();
    const data = response.allHeroJson.sections[0];
    const genreGraph = {
        nodes: genreNodes,
        edges: genreEdges,
    }
    const options = {
        autoResize: true,
        width: '400px',
        height: '400px',
        clickToUse: true,
        edges: {
            arrows: {
                to: false,
            },
            color: {
                color: '#ADD8E6',
                highlight: '#848484',
                hover: '#848484',
            },
            scaling: {
                min: 4,
                max: 24,
            },
            value: 1,
        },
        nodes: {
            borderWidth: 2,
            shape: 'dot',
        },
        interaction: {
            hover: true,
            dragView: false,
            zoomView: false,
        },
    };
    const events = {
        // selectEdge: function (event) {
        //     console.log('you selected an edge');
        // },
        // hoverEdge: function (event) {
        //     console.log('you hovered an edge');
        // }
    };
    return (
        <Animation type="fadeUp" delay={400}>
            <Section anchor={props.sectionId} additionalClasses={[classes.Hero]}>
                <div className={'my-horizontal-container'}>
                    <div className={'my-horizontal-element'}>
                        <div className={classes.Intro}>
                            {data.intro && <span className={classes.ImagePrefix}>{data.intro}</span>}
                            {data.image.src && (
                                <Animation className={classes.Image} type="waving-hand" duration={2500} iterationCount={3}>
                                    <GatsbyImage
                                        image={data.image.src.childImageSharp.gatsbyImageData}
                                        alt={data.image.alt || `Intro Image`}
                                        loading="eager"
                                    />
                                </Animation>
                            )}
                        </div>
                        <h1 className={classes.Title}>{data.title}</h1>
                        <h2 className={classes.Subtitle}>
                            {data.subtitle.prefix}
                            <u>{data.subtitle.highlight}</u>
                            {data.subtitle.suffix}
                        </h2>
                        <p>{data.description}</p>
                        <Animation type="fadeLeft" delay={600}>
                            {data.socialProfiles && (
                                <SocialProfiles from={data.socialProfiles.from} showIcon={data.socialProfiles.showIcons} />
                            )}
                        </Animation>
                    </div>
                    <div className={'my-horizontal-element'}>
                        <div className={'my-vis-container-hero'}>
                            <Graph
                                graph={genreGraph}
                                options={options}
                                events={events}
                                getNetwork={network => {
                                    //  if you want access to vis.js network api you can set the state in a parent component using this property
                                }}
                            />
                        </div>
                        <div className={'my-vis-caption'}>
                            <i>Interactive network of music genres for <a href={'/db-detective-discogs'}>this article.</a></i>
                        </div>
                    </div>
                </div>
            </Section>
        </Animation>
    );
}
