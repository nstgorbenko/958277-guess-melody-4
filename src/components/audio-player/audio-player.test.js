import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';

const testSrc = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

describe(`AudioPlayer Component rendering`, () => {
  it(`AudioPlayer Component should render correctly`, () => {
    const tree = renderer
      .create(
          <AudioPlayer
            isPlaying={false}
            src={testSrc}
          />, {
            createNodeMock: () => ({})
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
