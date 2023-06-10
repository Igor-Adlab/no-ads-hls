import QRCode from 'qrcode.react';
import { useParams } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { Input, Button, Modal, message } from "antd";
import { QrcodeOutlined, CopyOutlined } from "@ant-design/icons";

import { Footer } from "../components/Footer";
import { VideoJS } from "../components/VideoJS";

export function ViewVideoPage() {
  const params = useParams();
  const playerRef = useRef(null);
  const [showQr, setShowQr] = useState(false);
  const videoUrl = useMemo(() => {
    let video = "";
    try {
      video = atob(params.videoId || "");
    } catch {}

    return video;
  }, [params.videoId]);

  const videoJsOptions = {
    fluid: true,
    muted: false,
    autoplay: true,
    controls: true,
    preload: "auto",
    responsive: true,
    sources: [{
      src: videoUrl,
      type: 'application/x-mpegURL',
    }]
  };

  const onCopy = () => {
    navigator.clipboard.writeText(window.location.toString());
    message.success("Copied!");
  }

  const onPlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };

  if (!videoUrl) {
    return null;
  }

  return (
    <div className="video">
      <VideoJS className="mb-5" options={videoJsOptions} onReady={onPlayerReady} />
      <Input addonBefore={(
        <span onClick={() => setShowQr(true)} className="cursor-pointer">
          <QrcodeOutlined className="mr-1" />
          Share
        </span>
      )} prefix="M3U8: " size="large" readOnly value={videoUrl} />
      <Footer />

      <Modal className="qr-modal" title="Share link" open={showQr} onCancel={() => setShowQr(false)} footer={null}>
        <QRCode renderAs="svg" height="250px" width="100%" className="mb-5" value={window.location.toString()} />
        <div className="text-right">
          <Input.TextArea className="text-xs font-light mb-3" autoSize readOnly value={window.location.toString()} />
          <Button onClick={onCopy} icon={<CopyOutlined />} size="small" type="primary" ghost>Copy</Button>
        </div>
      </Modal>
    </div>
  );
}
