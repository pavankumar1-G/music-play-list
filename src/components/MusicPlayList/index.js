import MusicPlayItem from '../MusicPlayItem'

import {MusicPlayListContainer} from './styledComponents'

const MusicPlayList = props => {
  const {searchedResults, updateMusicList} = props

  return (
    <MusicPlayListContainer>
      {searchedResults.map(eachTrack => (
        <MusicPlayItem
          musicDetails={eachTrack}
          key={eachTrack.id}
          updateMusicList={updateMusicList}
        />
      ))}
    </MusicPlayListContainer>
  )
}
export default MusicPlayList
