import React from "react";
import { Page, Seo } from 'gatsby-theme-portfolio-minimal';
import './database.css';

import img1 from '../../content/images/database_img1.png';
import img2 from '../../content/images/database_img2.png';
import img3 from '../../content/images/database_img3.png';
import img4 from '../../content/images/database_img4.png';

export default function Database() {
    return (
        <>
            <Seo title="Database Project" />
            <Page>
                <h1 className={'database'}>HBNL Database Project</h1>
                <div className={'panel'}>
                    <div className={'panelChild'}>
                        <p className={'database'}>The <a href={'https://www.downstate.edu/research/centers-departments/henri-begleiter-neurodynamics-laboratory/index.html'} className={'database'} target="_blank" rel="noopener noreferrer">Henri Begleiter Neurodynamics Laboratory</a> (HBNL) in Brooklyn studies alcoholism by attempting to link family structure and genetics to neural phenotypes. For example, while an individual performs a visual target detection task, an electrical potential can be measured on their scalp using electroencephalogram (EEG), and it turns out that this brain potential is <a href={"https://www.science.org/doi/abs/10.1126/science.6474187"} className={'database'} target="_blank" rel="noopener noreferrer">smaller in young people who are at risk for developing alcoholism due to having an alcoholic parent</a>.</p>
                    </div>
                    <div className={'panelChild'}>
                        <img className={'database'} src={img1} alt="Begleiter et al. 1984" />
                    </div>
                </div>
                <div className={'panel'}>
                    <div className={'panelChild'}>
                        <img className={'database'} src={img2} alt="COGA" />
                    </div>
                    <div className={'panelChild'}>
                        <p className={'database'}>As one of the leading laboratories in a multi-institution research initiative called the <a href={"https://en.wikipedia.org/wiki/Collaborative_Study_on_the_Genetics_of_Alcoholism"} className={'database'} target="_blank" rel="noopener noreferrer">Collaborative Study on the Genetics of Alcoholism</a> (COGA), the HBNL deals with lots of data. In total, COGA has tracked over 2000 extended families made up of over 20,000 participants. For each participant, COGA collects information about their family structure, alcoholism-related behaviors, neuropsychological evaluations, and questionnaire data. For many participants, COGA also collects genetic information and the results of a battery of EEG experiments. Having multiple disparate assessments poses a unique challenge for the management and organization of the data. Rather than being collected all at once, results from different assessments are gathered when possible and stored in different locations. And to make matters even more complicated, many participants are re-tested every 2 years to support longitudinal research goals.</p>
                    </div>
                </div>
                <div className={'panel'}>
                    <div className={'panelChild'}>
                        <p className={'database'}>When I joined the lab, there was no centralized database to store its diverse results. Yet it was clear that the inter-disciplinary team of scientists working around me would each benefit from such a tool. Many of them expressed the desire to perform certain analyses, but they knew that the logistics of hunting down, cleaning, and aligning the relevant data provided a significant obstacle. Although my primary job was to analyze EEG data, I expressed a desire to tackle the challenge of creating a lab database. With my colleague Mort Ehrenberg, I co-wrote a Python module designed to build, update, and access a database implemented in MongoDB. This was a huge but fulfilling effort in which I encountered and overcame many interesting challenges.</p>
                    </div>
                    <div className={'panelChild'}>
                        <img className={'database'} src={img3} alt="DB structure" />
                    </div>
                </div>
                <div className={'panel'}>
                    <div className={'panelChild'}>
                        <img className={'database'} src={img4} alt="Family Graph (Pedigree)" />
                    </div>
                    <div className={'panelChild'}>
                        <p className={'database'}>One of my proudest achievements that utilized the resulting database was the design and implementation of a novel algorithm for calculating a measure known as family history density (FHD) of alcoholism. Put simply, FHD is a sum of an individual’s relatives that have alcoholism, weighted by how closely related they are. Previous attempts to accurately and efficiently calculate FHD in the lab had struggled because dealing with family structure present in tabular data is challenging. To determine an individual’s FHD, an algorithm may have to check if the individual’s father had a father, and so on, through a series of nested if statements. It occurred to me that the best data structure for this problem was a mathematical graph. I wrote an algorithm that represented each family as a directed graph, and I calculated each individual’s FHD by weighting their relatives’ alcoholism status according to the path length in the graph. To my knowledge, calculating FHD using every member of a large extended family had never been done before. The resulting code was clearer, more concise, it ran more quickly, and the resulting measure was a better predictor of risk for alcoholism than any previously developed measures.</p>
                    </div>
                </div>
                <div className={'panel'}>
                    <p className={'databaseNon'}>Our results were <a href={"https://onlinelibrary.wiley.com/doi/abs/10.1111/acer.14280"} className={'database'} target="_blank" rel="noopener noreferrer">published in the journal Alcoholism: Clinical and Experimental Research in 2020</a>, and both the algorithm and measure I designed are still used today. The Github repository containing the Python module for building, updating, and accessing the database can be found <a href={"https://github.com/HBNLdev/DataStore/tree/master/db"} className={'database'} target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
            </Page>
        </>
    );
}
