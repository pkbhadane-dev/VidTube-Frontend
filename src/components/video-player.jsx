import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
  MediaLoadingIndicator,
} from "media-chrome/react";
import { preload } from "react-dom";

export const VideoPlayer = ({ videofile, poster }) => {
  return (
    <>
      <MediaController
        poster={poster}
        style={{
          width: "100%",
          aspectRatio: "16/9",
          outline: "none",
          boxShadow: "none",
        }}
      >
        <video
          slot="media"
          src={videofile}
          poster={poster}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          preload="metadata"
          autoPlay={true}
        />
        <MediaLoadingIndicator slot="centered-chrome" />
        <MediaControlBar>
          <MediaPlayButton />
          <MediaSeekBackwardButton seekOffset={10} />
          <MediaSeekForwardButton seekOffset={10} />
          <MediaTimeRange />
          <MediaTimeDisplay showDuration />
          <MediaMuteButton />
          <MediaVolumeRange />
          <MediaPlaybackRateButton />
          <MediaFullscreenButton />
        </MediaControlBar>
      </MediaController>
    </>
  );
};
