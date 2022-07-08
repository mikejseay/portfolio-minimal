import React from "react";
import {Page, Seo} from 'gatsby-theme-portfolio-minimal';
import Graph from "react-graph-vis";
import './styleNetwork.css';

// import genreNodes from "../../content/data/genreNodes.json"
// import genreEdges from "../../content/data/genreEdges.json"
import styleNodes from "../../content/data/styleNodes.json"
import styleEdges from "../../content/data/styleEdges.json"

export default function StyleNetwork() {
    // const genreGraph = {
    //     nodes: genreNodes,
    //     edges: genreEdges,
    // }
    const styleGraph = {
        nodes: styleNodes,
        edges: styleEdges,
    }
    const options = {
        autoResize: true,
        width: '1100px',
        height: '800px',
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
            shape: 'circularImage',
            image: 'oops',
        },
        layout: {
            hierarchical: true
        },
        interaction: {
            hover: true,
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
        <>
            <Seo title="StyleNetwork Page"/>
            <Page>
                <div className={'my-vis-container'}>
                    <Graph
                        graph={styleGraph}
                        options={options}
                        events={events}
                        getNetwork={network => {
                            //  if you want access to vis.js network api you can set the state in a parent component using this property
                        }}
                    />
                </div>
            </Page>
        </>
    );
}
