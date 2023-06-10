import { useEffect, useRef } from 'react';

import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import "videojs-contrib-quality-levels";

require('@videojs/http-streaming');
const qs = require("videojs-hls-quality-selector").default;

videojs.plugin('hlsQualitySelector', qs);

export interface IVideoJSProps {
    options: any;
    className?: string;
    onReady(player: any): void;
}

export const VideoJS = ({ options, onReady, className }: IVideoJSProps) => {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player: any = playerRef.current = videojs(videoElement, {
        ...options,
        html5: {
            nativeAudioTracks: true,
            nativeVideoTracks: true,
            nativeTextTracks: true,
            hls: {
                overrideNative: true,
            },
          },
    }, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });


    const levels = player.qualityLevels();
    // player.controlBar.addChild('qualitySelector');
    player.hlsQualitySelector({ displayCurrentQuality: true });

    } else {
      const player = playerRef.current;
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;
    
    if(player) {
        // TODO
    }

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player className={`${className}`}>
      <div ref={videoRef} className="overflow-hidden shadow-2xl rounded-xl" />
    </div>
  );
}

export default VideoJS;