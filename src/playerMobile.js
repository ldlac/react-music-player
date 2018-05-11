import React from "react";
import classNames from "classnames";
import Slider from "rc-slider/lib/Slider";

import MdVolumeDown from "react-icons/lib/md/volume-down";

import MdVolumeMute from "react-icons/lib/md/volume-mute";

const prefix = "react-jinke-music-player-mobile";

export const PlayModeTip = ({ visible, title, text }) => (
  <div className={classNames(`${prefix}-play-model-tip`, { show: visible })}>
    <span className="title">{title}</span>
    <span className="text">{text}</span>
  </div>
);

const PlayerMobile = ({
  sliderBaseOptions,
  soundValue,
  audioSoundChange,
  onSound,
  onMute,
  isMute,
  name,
  cover,
  singer,
  playing,
  duration,
  currentTime,
  loading,
  loadingIcon,
  themeSwitch,
  progressBar,
  progressChange,
  openAudioListsPanel,
  progressAfterChange,
  audioPrevPlay,
  audioNextPlay,
  prevAudioIcon,
  nextAudioIcon,
  playIcon,
  pauseIcon,
  playMode,
  downloadIcon,
  reloadIcon,
  playListsIcon,
  closeIcon,
  onClose,
  pause,
  tipIcon,
  playModeTipVisible,
  currentPlayModeName,
  extendsContent,
  onPlay
}) => (
  <div className={prefix}>
    <PlayModeTip
      visible={playModeTipVisible}
      title={tipIcon}
      text={currentPlayModeName}
    />
    <div className={`${prefix}-header group`}>
      <div className="left item" />
      <div className="title" key="audio-title">
        {name}
      </div>
      <div className="right item" onTouchStart={onClose}>
        {closeIcon}
      </div>
    </div>
    <div className={`${prefix}-singer text-center group`}>
      <span className="name" key="singer-name">
        {singer}
      </span>
    </div>
    <div className={`${prefix}-switch text-center group`}>{themeSwitch}</div>
    <div className={`${prefix}-cover text-center`}>
      <img
        src={cover}
        alt="cover"
        key="cover"
        className={classNames("cover", { "img-rotate-pause": pause })}
      />
    </div>
    <div className={`${prefix}-progress group`}>
      <span key="current-time" className="current-time">
        {loading ? "--" : currentTime}
      </span>
      {progressBar}
      <span key="duration" className="duration text-right">
        {loading ? "--" : duration}
      </span>
    </div>
    <div className={`${prefix}-toggle text-center group`}>
      <span className="group play-sounds" key="play-sound" title="sounds">
        {isMute ? (
          <span className="sounds-icon" onTouchStart={onSound}>
            <MdVolumeMute />
          </span>
        ) : (
          <span className="sounds-icon" onTouchStart={onMute}>
            <MdVolumeDown />
          </span>
        )}
        <Slider
          max={1}
          value={soundValue}
          onChange={audioSoundChange}
          className="sound-operation"
          {...sliderBaseOptions}
        />
      </span>

      {loading
        ? loadingIcon
        : [
            <span
              className="group prev-audio"
              title="previous track"
              key="prev-audio"
              onTouchStart={audioPrevPlay}
            >
              {prevAudioIcon}
            </span>,
            <span
              className="group play-btn"
              title="play"
              key="play-btn"
              onTouchStart={onPlay}
            >
              {playing ? pauseIcon : playIcon}
            </span>,
            <span
              className="group next-audio"
              title="next track"
              key="next-audio"
              onTouchStart={audioNextPlay}
            >
              {nextAudioIcon}
            </span>
          ]}
    </div>
    <div className={`${prefix}-operation group`}>
      <ul className="items">
        <li className="item" key="item-player-mode">
          {playMode}
        </li>
        <li className="item" key="item-download-icon">
          {downloadIcon}
        </li>
        <li className="item" key="item-reload-icon">
          {reloadIcon}
        </li>
        {extendsContent && extendsContent.length >= 1
          ? extendsContent.map((content, i) => {
              return (
                <li className="item" key={i}>
                  {content}
                </li>
              );
            })
          : undefined}
        <li
          className="item"
          key="play-lists-icon"
          onTouchStart={openAudioListsPanel}
        >
          {playListsIcon}
        </li>
      </ul>
    </div>
  </div>
);

export default PlayerMobile;
