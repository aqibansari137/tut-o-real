import { useEffect } from 'react'
import awt1 from '../../../assets/article_images/awt/awt1.png'
import awt2 from '../../../assets/article_images/awt/awt2.webp'
import awt3 from '../../../assets/article_images/awt/awt3.png'
import awt4 from '../../../assets/article_images/awt/awt4.png'
import awt5 from '../../../assets/article_images/awt/awt5.png'
import awt6 from '../../../assets/article_images/awt/awt6.png'
import awt7 from '../../../assets/article_images/awt/awt7.png'
import awt8 from '../../../assets/article_images/awt/awt8.png'
import './ActivateWin10.css'

export default function ActivateWin10() {
    useEffect(() => {
        if (window.outerWidth < 600)
            document.getElementById('sideDiv').classList.replace('side1', 'side');
    }, [])
    return (
        <div className='main-container'>
            <h1>Activate Windows 10 using CMD.</h1>
            <p>Here is the simple way to activate your Windows 10 using CMD.</p>
            <div className="nav-section">
                <h2>Navigation :</h2>
                <ul>
                    <li><a href="#head1">Opening CMD in adminstrator mode</a></li>
                    <li><a href="#head2">Checking your Windows Edition</a></li>
                    <li><a href="#head3">Cmd commands to start activating Windows</a></li>
                    <li><a href="#head4">List of Keys According to Windows Edition</a></li>
                </ul>
            </div>
            <h2 id="head1">Opening CMD in adminstrator mode</h2>
            <ul>
                <li>Open cmd in administrator mode.</li>
            </ul>
            <img src={awt1} alt="open cmd" />
            <h2 id="head2">Checking your Windows Edition</h2>
            <ul>
                <li>Now, Check your windows edition.</li>
                <li>Go to Settings &gt; About.</li>
            </ul>
            <img src={awt2} alt="open system" />
            <ul>
                <li>Under Windows specification you will find Windows Edition</li>
                <li>Here it's Windows 10 Pro.</li>
            </ul>
            <h2 id="head3">Cmd commands to start activating Windows</h2>
            <ul>
                <li>Now type this code in cmd <code>slmgr /ipk yourlicensekey</code>.</li>
                <li>Replace <i>"yourlicensekey"</i> with the list below according to your windows edition.</li>
            </ul>
            <h2 id='head4'>List of Keys According to Windows Edition</h2>
            <table style={{ marginBottom: '1em' }}>
                <thead>
                    <th>Edition</th>
                    <th>Licence Key</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Home: </td>
                        <td>TX9XD-98N7V-6WMQ6-BX7FG-H8Q99</td>
                    </tr>
                    <tr>
                        <td>Home N: </td>
                        <td>3KHY7-WNT83-DGQKR-F7HPR-844BM</td>
                    </tr>
                    <tr>
                        <td>Home Single Language: </td>
                        <td>7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH</td>
                    </tr>
                    <tr>
                        <td>Home Country Specific: </td>
                        <td>PVMJN-6DFY6–9CCP6–7BKTT-D3WVR</td>
                    </tr>
                    <tr>
                        <td>Professional: </td>
                        <td>W269N-WFGWX-YVC9B-4J6C9-T83GX</td>
                    </tr>
                    <tr>
                        <td>Professional N: </td>
                        <td>MH37W-N47XK-V7XM9-C7227-GCQG9</td>
                    </tr>
                    <tr>
                        <td>Education: </td>
                        <td>NW6C2-QMPVW-D7KKK-3GKT6-VCFB2</td>
                    </tr>
                    <tr>
                        <td>Education N: </td>
                        <td>2WH4N-8QGBV-H22JP-CT43Q-MDWWJ</td>
                    </tr>
                    <tr>
                        <td>Enterprise: </td>
                        <td>NPPR9-FWDCX-D2C8J-H872K-2YT43</td>
                    </tr>
                    <tr>
                        <td>Enterprise N: </td>
                        <td>DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4</td>
                    </tr>
                </tbody>
            </table>
            <img src={awt3} alt="cmd" />
            <ul>
                <li>Hit Enter and wait for a while a prompt will appear</li>
            </ul>
            <img src={awt4} className="small-img" alt="cmd2" />
            <ul>
                <li>Now set KMS machine address. Very Important Step!!!</li>
                <li> Use the command <code>slmgr /skms kms8.msguides.com</code> to connect to the msguides independent free KMS server.</li>
            </ul>
            <img src={awt5} alt="cmd3" />
            <img src={awt6} className="small-img" alt="cmd3" />
            <ul>
                <li>Finally Activate your Windows by using the command <code>slmgr /ato</code>.</li>
            </ul>
            <img src={awt7} alt="cmd3" />
            <img src={awt8} className='small-img' alt="cmd3" />
            <ul>
                <li>Done your Windows 10 is now activated.</li>
            </ul>

            <footer>😊Happy to help!!😊</footer>
        </div >
    )
}
