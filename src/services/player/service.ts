import TrackPlayer, { AppKilledPlaybackBehavior, Capability, Event, RepeatMode, Track } from 'react-native-track-player';

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

export const addTracks = async (tracks: Array<Track>) => {
  await TrackPlayer.add(tracks);
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
