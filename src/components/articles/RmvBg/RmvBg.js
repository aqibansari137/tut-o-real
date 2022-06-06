import React from 'react'
import './RmvBg.css'
import rmvbg1 from '../../../assets/article_images/rmvbg/rmvbg1.png'
import rmvbg2 from '../../../assets/article_images/rmvbg/rmvbg2.png'
import rmvbg3 from '../../../assets/article_images/rmvbg/rmvbg3.png'
import rmvbg4 from '../../../assets/article_images/rmvbg/rmvbg4.png'
import rmvbg5 from '../../../assets/article_images/rmvbg/rmvbg5.png'
export default function RmvBg() {
    return (
        <div className='main-container'>
            <h1>Remove Image Background</h1>
            <p>Here are the simple steps to help you remove background</p>
            <div className='nav-section'>
                <h2>Navigation :</h2>
                <ul>
                    <li><a href="#head1">Remove Background</a></li>
                    <li><a href="#head2">Add static colour to image background</a></li>
                    <li><a href="#head3">Add image as background to your image</a></li>
                </ul>
            </div>
            <h2 id='head1'>Remove Background</h2>
            <ul>
                <li>Click on the link to visit the website <a href="https://www.remove.bg/" rel="noreferrer" target='_blank'>remove.bg</a>.</li>
            </ul>
            <img src={rmvbg1} alt="rmvbg1" />
            <ul>
                <li>Upload your image.</li>
            </ul>
            <img src={rmvbg2} alt="rmvbg2" />
            <ul>
                <li>Done Background removed.</li>
                <li>Click on Download.</li>
            </ul>
            <h2 id='head2'>Add static colour to image background</h2>
            <ul>
                <li>After uploading image click on the 'edit' button on top right of your image.</li>
            </ul>
            <img src={rmvbg2} alt="rmvbg2" />
            <ul>
                <li>Below window will appear.</li>
            </ul>
            <img src={rmvbg3} alt="rmvbg3" />
            <ul>
                <li>Click on the 'color' button and then on the colourful box.</li>
                <li>Select colour of your choice from colour picker.</li>
            </ul>
            <img src={rmvbg4} alt="rmvbg4" />
            <ul>
                <li>Click on Ok then click on Download.</li>
            </ul>
            <h2 id='head3'>Add image as background to your image</h2>
            <ul>
                <li>After uploading image click on the 'edit' button on top right of your image.</li>
            </ul>
            <img src={rmvbg2} alt="rmvbg2" />
            <ul>
                <li>Below window will appear.</li>
                <li>Click on the 'Photo' button then click on 'Upload Background'.</li>
            </ul>
            <img src={rmvbg5} alt="rmvbg5" />
            <ul>
                <li>After uploading the background Click on Download.</li>
            </ul>
            <footer>😊Thanks for Visiting!!😊</footer>
        </div>
    )
}