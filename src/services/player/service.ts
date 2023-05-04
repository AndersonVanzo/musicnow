import TrackPlayer, { AppKilledPlaybackBehavior, Capability, Event, RepeatMode } from 'react-native-track-player';

export const setupPlayer = async () => {
  let isSetup: boolean;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext, Capability.SkipToPrevious, Capability.SeekTo],
      compactCapabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext],
      progressUpdateEventInterval: 2,
    });
    isSetup = true;
  }
  return isSetup;
};

export const addTracks = async () => {
  await TrackPlayer.add([
    {
      id: '1',
      url: require('../../assets/music1.mp3'),
      title: 'Another World',
      artist: 'Gojira',
    },
    {
      id: '2',
      url: require('../../assets/music2.mp3'),
      title: 'From The Sky',
      artist: 'Gojira',
    },
    {
      id: '3',
      url: require('../../assets/music3.mp3'),
      title: 'Amazonia',
      artist: 'Gojira',
    },
  ]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export default async () => {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
};
