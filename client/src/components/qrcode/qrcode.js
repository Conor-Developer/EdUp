import QRCode from 'qrcode';
import { useState } from 'react'
function Qrcode() {
    const [url, setUrl] = useState('')
    const [qr, setQr] = useState('')
    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 500,
            margin: 2,
            color: {
                dark: '#335383FF',
                light: '#EEEEEEFF'
            }
        }, (err, url) => {
            if (err) return console.error(err)
            console.log(url)
            setQr(url)
        })
    }
    return (
        <div className="container">
            <h1 className="header center orange-text">QR Generator</h1>
              <div className="row center"></div>
              <div className="row center"></div>
            <div className="input-field col s6">
              <input 
                  type="text"
                  placeholder="Year 5 Annual play"
                  value={url}
                  onChange={e => setUrl(e.target.value)} />
            </div>
           
            <a class="waves-effect waves-light btn" onClick={GenerateQRCode}>Generate<i class="material-icons right">build</i></a>
            <div className="row center"></div>
              <div className="row center"></div>
            {qr && <>
                <img src={qr} />
                <div className="row center"></div>
                <a class="waves-effect waves-light btn" type="submit" href={qr} download="schoolqrcode.png">Download<i class="material-icons right">file_download</i></a>
            </>}
              <div className="row center"></div>
              <div className="row center"></div>
              <div className="row center"></div>
              <div className="row center"></div>
        </div>
    )
}
export default Qrcode