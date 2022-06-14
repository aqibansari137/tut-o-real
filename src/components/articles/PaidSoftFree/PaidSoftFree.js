import React, { useEffect } from 'react'
import dpsf1 from '../../../assets/article_images/dpsf/dpsf1.png'

export default function PaidSoftFree() {
    useEffect(() => {
        if (window.outerWidth < 600)
            document.getElementById('sideDiv').classList.replace('side1', 'side');
    }, [])
    return (
        <div className='main-container'>
            <h1>Downlaod Paid Software for free</h1>
            <p>Here are the steps to download any software for free.</p>
            <div className="nav-section">
                <h2>Navigation :</h2>
                <ul>
                    <li><a href="#head1">Adding and using vpn extension on chrome browser</a></li>
                    <li><a href="#head2">Downloading and Installing Qbit Torrent</a></li>
                    <li><a href="#head3">Searching and Downloading software</a></li>
                </ul>
            </div>
            <h2 id="head1">Adding and using vpn extension on chrome browser</h2>
            <ul>
                <li>First we will have to download a VPN extension on chrome browser.</li>
                <li>If you already have a vpn then you don't need to install the above VPN.</li>
                <li>Click on this link to download the extension <a href="https://chrome.google.com/webstore/detail/touch-vpn-secure-and-unli/bihmplhobchoageeokmgbdihknkjbknd?hl=en" target='_blank' rel="noreferrer">Touch VPN extension</a>.</li>
            </ul>
            <img src={dpsf1} alt="extension" />
            <h2 id="head2">Downloading and Installing Qbit Torrent</h2>
            <ul>
                <li>Now we will need a torrent downloader software.</li>
                <li>Click in the link to download the <a href='https://www.qbittorrent.org/download.php' target='_blank' rel="noreferrer">Qbit Torrent</a></li>
            </ul>
            <h2 id="head3">Searching and Downloading software</h2>
        </div>
    )
}
