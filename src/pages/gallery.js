import React from "react";
import { Page, Seo } from 'gatsby-theme-portfolio-minimal';
import './gallery.css';

export default function Gallery() {
    return (
        <>
            <Seo title="Gallery" />
            <Page>
                <iframe
                    title="Solution to Sol Levitt's Wall Drawing #11 (1969)"
                    src="https://openprocessing.org/sketch/1434528/embed/"
                    width="600"
                    height="640"
                    className='p5js_iframe'
                >
                    ...
                </iframe>
                <p>...</p>
                <iframe
                    title="A p5.js reproduction of Frank Stella's 'Hyena Stomp'"
                    src="https://openprocessing.org/sketch/1444481/embed/"
                    width="800"
                    height="840"
                    className='p5js_iframe'
                >
                    ...
                </iframe>
                <p>...</p>
                <iframe
                    title="A p5.js reproduction of the 'breathing GIF.'"
                    src="https://openprocessing.org/sketch/1543960/embed/"
                    width="560"
                    height="640"
                    className='p5js_iframe'
                >
                    ...
                </iframe>
            </Page>
        </>
    );
}
