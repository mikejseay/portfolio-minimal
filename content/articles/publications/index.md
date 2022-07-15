---
title: "Mike Seay's Scientific Publications"
description: 'The scientific publications of Michael James Seay'
date: '2022-07-15'
banner:
    src: '../../images/mikeseay_deepcrop.jpg'
    alt: 'A DeepStyled version of me'
    caption: 'A list of my scientific publications and my contributions'
categories:
    - 'Science'
keywords:
    - 'Scientific'
    - 'Publications'
---

## Table of Contents
1. [Seay et al. (2020)](#1)
2. [Pandey, Seay, et al. (2020)](#2)
3. [Motanis*, Seay*, and Buonomano (2018)](#3)
4. [Mock, Seay, et al. (2015)](#4)

### Differential short-term plasticity of PV and SST neurons accounts for adaptation and facilitation of cortical neurons to auditory tones <a name='1'></a>

#### [Journal of Neuroscience](https://www.jneurosci.org/content/40/48/9224.abstract) · Nov 25, 2020

In this project, I analyzed a complex experimental dataset, designed and implemented a computational model, and wrote most of the paper. This project investigates the neural mechanisms underlying the fact that the significance of a stimulus depends on the preceding stimuli. For example, our perception of speech and music depends strongly on temporal context. Complementary neural mechanisms are needed to sometimes ignore repetitive stimuli (e.g., the tic of a clock) or detect meaningful repetition (e.g., consecutive tones in Morse code). We modeled a neural circuit that accounts for diverse experimentally-observed response profiles in auditory cortex (A1) neurons, based on known forms of short-term synaptic plasticity (STP). Whether the simulated circuit reduced, maintained, or enhanced its response to repeated tones depended on the relative dominance of two different types of inhibitory cells. The model made novel predictions that were experimentally validated. The results define an important role for STP in temporal context-dependent perception.

[Link to PDF](/seay2020.pdf)

### Density and dichotomous family history measures of alcohol use disorder as predictors of behavioral and neural phenotypes: a comparative study across gender and race/ethnicity <a name='2'></a>

#### [Alcoholism: clinical and experimental research](https://onlinelibrary.wiley.com/doi/epdf/10.1111/acer.14280) · Jan 19, 2020

In this project, I built on prior work to create a continuous measure of family history of alcoholism. While prior measures focused on the presence of alcoholism among an individual's parents, the new measure uses information about the presence of alcoholism using all available information throughout an individual's known family tree, weighted by genetic relatedness. This measure was more effective at predicting whether an individual would have alcoholism than prior measures, and it also predicted several other phenotypes. In my role on this project, I designed the algorithm and implemented the computer program that calculated the new quantitative measure using Python, which relied upon interfacing with a complex database, phrasing family tree information as a mathematical graph, and deriving several informative quantifiers. I also wrote most of the statistical tests for this manuscript in R and wrote a large portion of the manuscript.

[Link to PDF](/pandey2020.pdf)

### Short-term synaptic plasticity as a mechanism for sensory timing

#### [Trends in neurosciences](https://www.cell.com/trends/neurosciences/fulltext/S0166-2236(18)30208-X) · Oct 1, 2018 <a name='3'></a>

In this review article, on which I was shared first author, we discuss the neural mechanisms underlying organisms' ability to sense timing features on short timescales (tens to hundreds of milliseconds). In humans, sensing time intervals and durations on this scale supports our ability to perceive speech, music, or Morse code. We propose that a key mechanism underlying our ability to sense timing on this scale is short-term synaptic plasticity (STP), which describes how the strength of synaptic connections becomes transiently stronger or weaker after being activated. I wrote a substantial portion of the paper, created figures 2 and 3, and performed the computational modeling for figure 3.

[Link to PDF](/motanis2018.pdf)

### Rapid cortical dynamics associated with auditory spatial attention gradients <a name='4'></a>

#### [Frontiers in Neuroscience](http://journal.frontiersin.org/article/10.3389/fnins.2015.00179/abstract) · Jun 2, 2015

In this project, I spearheaded my lab's usage of a new MATLAB-based toolbox for analyzing EEG data called EEGLAB. By applying its signature tool, Independent Component Analysis (ICA), we were able to decompose the evoked brain activity into the contributions of several brain regions and evaluate their dynamics while a participant listened to and paid attention to sounds at various locations. I wrote the data analysis routines, visualized the results to create figures for the paper, and wrote a large part of the manuscript. I also presented the results at the SFN conference in Washington DC in 2014.

[Link to PDF](/mock2015.pdf)
