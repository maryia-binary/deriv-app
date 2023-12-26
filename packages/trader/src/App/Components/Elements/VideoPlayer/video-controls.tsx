import React from 'react';
import classNames from 'classnames';
import { Text, Icon } from '@deriv/components';
import { formatDurationTime } from '@deriv/shared';
import VolumeControl from './volume-control';
import PlaybackRateControl from './playback-rate-control';

type TVideoControls = {
    block_controls?: boolean;
    current_time?: number;
    dragStartHandler: (e: React.MouseEvent<HTMLSpanElement> | React.TouchEvent<HTMLSpanElement>) => void;
    is_playing?: boolean;
    is_mobile?: boolean;
    is_muted?: boolean;
    onRewind: (e: React.MouseEvent<HTMLDivElement>) => void;
    onVolumeChange: (new_value: number) => void;
    onPlaybackRateChange: (new_value: number) => void;
    progress_bar_filled_ref: React.RefObject<HTMLDivElement>;
    progress_bar_ref: React.RefObject<HTMLDivElement>;
    progress_dot_ref: React.RefObject<HTMLSpanElement>;
    show_controls?: boolean;
    togglePlay: (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
    toggleMute: (new_value: boolean) => void;
    video_duration?: number;
    volume?: number;
};

const VideoControls = ({
    block_controls,
    current_time,
    dragStartHandler,
    is_playing,
    is_mobile,
    is_muted,
    onRewind,
    onVolumeChange,
    onPlaybackRateChange,
    progress_bar_filled_ref,
    progress_bar_ref,
    progress_dot_ref,
    show_controls,
    togglePlay,
    toggleMute,
    video_duration,
    volume,
}: TVideoControls) => {
    const [is_drag_dot_visible, setIsDragDotVisible] = React.useState(false);

    return (
        <div
            className={classNames('player__controls__wrapper', {
                'player__controls__wrapper--visible': show_controls,
                'player__controls__wrapper--interactive': show_controls,
            })}
        >
            <div
                className='player__controls__progress-bar'
                onClick={onRewind}
                onKeyDown={undefined}
                onMouseOver={() => setIsDragDotVisible(true)}
                onMouseLeave={() => setIsDragDotVisible(false)}
                ref={progress_bar_ref}
            >
                <div className='player__controls__progress-bar__filled' ref={progress_bar_filled_ref}>
                    {(is_mobile || is_drag_dot_visible) && (
                        <span
                            className='player__progress-dot'
                            onMouseDown={dragStartHandler}
                            onTouchStart={dragStartHandler}
                            onDragStart={() => false}
                            ref={progress_dot_ref}
                        />
                    )}
                </div>
            </div>
            <div
                onClick={e => e.stopPropagation()}
                onKeyDown={undefined}
                className={classNames('player__controls__bottom-bar', {
                    'player__controls__bottom-bar--blocked': block_controls,
                })}
            >
                <div className='player__controls__bottom-bar controls__left'>
                    <button onClick={togglePlay} className='player__controls__button'>
                        <Icon
                            icon={is_playing ? 'IcPause' : 'IcPlay'}
                            custom_color='var(--text-colored-background)'
                            height={18}
                            width={15}
                        />
                    </button>
                    <div className='player__controls__time-wrapper'>
                        <Text size='xxxs' line_height='s' color='colored-background'>
                            {formatDurationTime(current_time)}
                            {' / '}
                            {formatDurationTime(video_duration)}
                        </Text>
                    </div>
                </div>
                <div className='player__controls__bottom-bar controls__right'>
                    <VolumeControl
                        onVolumeChange={onVolumeChange}
                        volume={volume}
                        is_mobile={is_mobile}
                        is_muted={is_muted}
                        toggleMute={toggleMute}
                    />
                    <PlaybackRateControl onPlaybackRateChange={onPlaybackRateChange} is_mobile={is_mobile} />
                </div>
            </div>
        </div>
    );
};

export default VideoControls;
