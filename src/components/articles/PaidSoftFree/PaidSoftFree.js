import dpsf1 from '../../../assets/article_images/dpsf/dpsf1.png'
import dpsf2 from '../../../assets/article_images/dpsf/dpsf2.png'
import dpsf3 from '../../../assets/article_images/dpsf/dpsf3.png'
import dpsf4 from '../../../assets/article_images/dpsf/dpsf4.png'
import dpsf5 from '../../../assets/article_images/dpsf/dpsf5.png'
import dpsf6 from '../../../assets/article_images/dpsf/dpsf6.png'

export default function PaidSoftFree() {
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
            <ul>
                <li>Open Chrome browser.</li>
                <li>Turn on TouchVPN from the extension menu.</li>
            </ul>
            <img src={dpsf2} alt="extension open" />
            <ul>
                <li>CLick on Connect to connect VPN.</li>
                <li>Now go to this website <a href="https://1337x.st/" target='_blank' rel="noreferrer">1337x.st</a>.</li>
            </ul>
            <img src={dpsf3} alt="1337x" />
            <ul>
                <li>Type in search box whatever you want to downlaod.</li>
                <li>Click on search.</li>
            </ul>
            <img src={dpsf4} alt="1337x search" />
            <ul>
                <li>Click on the result which has higher seed(se) to get good download speed.</li>
                <li>Then Click on 'Magnet Download'.</li>
                <li>A pop-up will appear, asking to open Qbit Torrent.</li>
                <li>Click on open.</li>
            </ul>
            <img src={dpsf6} alt="Magnet download" />
            <img src={dpsf5} alt="Qbit download" />
            <ul>
                <li>Click on Ok your download will start.</li>
                <li>Done.</li>
                <li>You can download anything from here Movies, Software, Games etc.</li>
            </ul>
            <footer>😊Happy to help!!😊</footer>
        </div>
    )
}
