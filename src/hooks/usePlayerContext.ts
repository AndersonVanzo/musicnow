import { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

const usePlayerContext = () => {
  return useContext(PlayerContext);
};
export default usePlayerContext;
