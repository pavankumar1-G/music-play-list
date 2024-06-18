import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicPlayItems,
  ImageAndNameGenreContainer,
  Image,
  NameAndGenreContainer,
  Name,
  Genre,
  DurationAndDeleteButtonContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicPlayItem = props => {
  const {updateMusicList, musicDetails} = props
  const {id, imageUrl, name, genre, duration} = musicDetails
  // console.log(musicDetails)

  const onClickDeleteBtn = () => {
    updateMusicList(id)
  }

  return (
    <MusicPlayItems>
      <ImageAndNameGenreContainer>
        <Image src={imageUrl} alt="track" />
        <NameAndGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameAndGenreContainer>
      </ImageAndNameGenreContainer>
      <DurationAndDeleteButtonContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          onClick={onClickDeleteBtn}
          aria-label="delete"
          data-testid="delete"
        >
          <AiOutlineDelete size={25} color="#ffffff" />
        </DeleteButton>
      </DurationAndDeleteButtonContainer>
    </MusicPlayItems>
  )
}
export default MusicPlayItem
