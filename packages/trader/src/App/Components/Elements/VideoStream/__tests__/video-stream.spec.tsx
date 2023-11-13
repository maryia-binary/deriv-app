import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoStream from '../video-stream';
import { getDescriptionVideoId } from 'Modules/Trading/Helpers/contract-type';

const mocked_props = {
    autoplay: false,
    height: 270,
    preload: 'auto',
    src: getDescriptionVideoId('vanilla', false),
    test_id: 'dt_video_stream',
};

describe('VideoStream component', () => {
    it('should render iframe with a video with no controls & enabled picture-in-picture by default', () => {
        render(<VideoStream {...mocked_props} />);
        const iframe = screen.getByTestId('dt_video_stream');
        const iframe_src = iframe.getAttribute('src');
        const picture_in_picture_param = iframe
            .getAttribute('allow')
            ?.split(';')
            ?.find(param => param.includes('picture-in-picture'));
        expect(picture_in_picture_param?.includes('*')).toBeTruthy();
        expect(iframe_src?.includes('letterboxColor=transparent&preload=auto&controls=false')).toBeTruthy();
    });
    it('should render iframe with a video with controls', () => {
        render(<VideoStream {...mocked_props} controls />);
        const iframe_src = screen.getByTestId('dt_video_stream').getAttribute('src');
        // controls are shown when controls param is skipped from query string in the iframe src:
        expect(iframe_src?.includes('controls')).toBeFalsy();
    });
    it('should render iframe with a video with disabled picture-in-picture', () => {
        render(<VideoStream {...mocked_props} disable_picture_in_picture />);
        const picture_in_picture_param = screen
            .getByTestId('dt_video_stream')
            .getAttribute('allow')
            ?.split(';')
            ?.find(param => param.includes('picture-in-picture'));
        expect(picture_in_picture_param?.includes('none')).toBeTruthy();
    });
    it('should render iframe with a looped video', () => {
        render(<VideoStream {...mocked_props} loop />);
        const iframe_src = screen.getByTestId('dt_video_stream').getAttribute('src');
        expect(iframe_src?.includes('loop=true')).toBeTruthy();
    });
    it('should render iframe with an autoplaying video', () => {
        render(<VideoStream {...mocked_props} autoplay />);
        const iframe_src = screen.getByTestId('dt_video_stream').getAttribute('src');
        expect(iframe_src?.includes('autoplay=true')).toBeTruthy();
    });
});
