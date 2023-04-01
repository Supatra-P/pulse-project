import { useState } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import './Compare.css'

export interface ICompareProps {}

const finalSpaceCharacters = [
  {
    id: 'id1',
    title: 'Title Name 1',
    description: "The official video for “Never Gonna Give You Up” by Rick Astley ‘Hold Me In Your Arms’ – deluxe blue vinyl, 2CD and digital deluxe out 12th May 2023 Pre-order here – https://rick-astley.lnk.to/HMIYA2023ID “Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100. It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”. The album was itself a UK number one and would go on to sell over 15 million copies worldwide. The legendary video was directed by Simon West – who later went on to make Hollywood blockbusters such as Con Air, Lara Croft – Tomb Raider and The Expendables 2. The video passed the 1bn YouTube views milestone on 28 July 2021. Subscribe to the official Rick Astley YouTube channel: https://RickAstley.lnk.to/YTSubID Follow Rick Astley: Facebook: https://RickAstley.lnk.to/FBFollowID Twitter: https://RickAstley.lnk.to/TwitterID Instagram: https://RickAstley.lnk.to/InstagramID Website: https://RickAstley.lnk.to/storeID TikTok: https://RickAstley.lnk.to/TikTokID Listen to Rick Astley: Spotify: https://RickAstley.lnk.to/SpotifyID Apple Music: https://RickAstley.lnk.to/AppleMusicID Amazon Music: https://RickAstley.lnk.to/AmazonMusicID Deezer: https://RickAstley.lnk.to/DeezerID Lyrics: We’re no strangers to love You know the rules and so do I A full commitment’s what I’m thinking of You wouldn’t get this from any other guy I just wanna tell you how I’m feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We’ve known each other for so long Your heart’s been aching but you’re too shy to say it Inside we both know what’s been going on We know the game and we’re gonna play it And if you ask me how I’m feeling Don’t tell me you’re too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you #RickAstley #NeverGonnaGiveYouUp #WheneverYouNeedSomebody #OfficialMusicVideo",
    videoId: 'Vdo Id 1',
    viewCountText: '1 views',
    publishedTimeText: "1 days ago",
    channelId: 'Channel Id 1',
    channelName: 'Channel Name 1',
    thumb: 'https://i.ytimg.com/vi/LSIOcCcEVaE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBNDqRcOPB0C-Q5FQ_5nYNEuNPmRg'
  },
  {
    id: 'id2',
    title: 'Title Name 2',
    description: "The official video for “Never Gonna Give You Up” by Rick Astley ‘Hold Me In Your Arms’ – deluxe blue vinyl, 2CD and digital deluxe out 12th May 2023 Pre-order here – https://rick-astley.lnk.to/HMIYA2023ID “Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100. It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”. The album was itself a UK number one and would go on to sell over 15 million copies worldwide. The legendary video was directed by Simon West – who later went on to make Hollywood blockbusters such as Con Air, Lara Croft – Tomb Raider and The Expendables 2. The video passed the 1bn YouTube views milestone on 28 July 2021. Subscribe to the official Rick Astley YouTube channel: https://RickAstley.lnk.to/YTSubID Follow Rick Astley: Facebook: https://RickAstley.lnk.to/FBFollowID Twitter: https://RickAstley.lnk.to/TwitterID Instagram: https://RickAstley.lnk.to/InstagramID Website: https://RickAstley.lnk.to/storeID TikTok: https://RickAstley.lnk.to/TikTokID Listen to Rick Astley: Spotify: https://RickAstley.lnk.to/SpotifyID Apple Music: https://RickAstley.lnk.to/AppleMusicID Amazon Music: https://RickAstley.lnk.to/AmazonMusicID Deezer: https://RickAstley.lnk.to/DeezerID Lyrics: We’re no strangers to love You know the rules and so do I A full commitment’s what I’m thinking of You wouldn’t get this from any other guy I just wanna tell you how I’m feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We’ve known each other for so long Your heart’s been aching but you’re too shy to say it Inside we both know what’s been going on We know the game and we’re gonna play it And if you ask me how I’m feeling Don’t tell me you’re too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you #RickAstley #NeverGonnaGiveYouUp #WheneverYouNeedSomebody #OfficialMusicVideo",
    videoId: 'Vdo Id 2',
    viewCountText: '2 views',
    publishedTimeText: "2 days ago",
    channelId: 'Channel Id 2',
    channelName: 'Channel Name 2',
    thumb: 'https://i.ytimg.com/vi/LSIOcCcEVaE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBNDqRcOPB0C-Q5FQ_5nYNEuNPmRg'
  },
  {
    id: 'id3',
    title: 'Title Name 3',
    description: "The official video for “Never Gonna Give You Up” by Rick Astley ‘Hold Me In Your Arms’ – deluxe blue vinyl, 2CD and digital deluxe out 12th May 2023 Pre-order here – https://rick-astley.lnk.to/HMIYA2023ID “Never Gonna Give You Up” was a global smash on its release in July 1987, topping the charts in 25 countries including Rick’s native UK and the US Billboard Hot 100. It also won the Brit Award for Best single in 1988. Stock Aitken and Waterman wrote and produced the track which was the lead-off single and lead track from Rick’s debut LP “Whenever You Need Somebody”. The album was itself a UK number one and would go on to sell over 15 million copies worldwide. The legendary video was directed by Simon West – who later went on to make Hollywood blockbusters such as Con Air, Lara Croft – Tomb Raider and The Expendables 2. The video passed the 1bn YouTube views milestone on 28 July 2021. Subscribe to the official Rick Astley YouTube channel: https://RickAstley.lnk.to/YTSubID Follow Rick Astley: Facebook: https://RickAstley.lnk.to/FBFollowID Twitter: https://RickAstley.lnk.to/TwitterID Instagram: https://RickAstley.lnk.to/InstagramID Website: https://RickAstley.lnk.to/storeID TikTok: https://RickAstley.lnk.to/TikTokID Listen to Rick Astley: Spotify: https://RickAstley.lnk.to/SpotifyID Apple Music: https://RickAstley.lnk.to/AppleMusicID Amazon Music: https://RickAstley.lnk.to/AmazonMusicID Deezer: https://RickAstley.lnk.to/DeezerID Lyrics: We’re no strangers to love You know the rules and so do I A full commitment’s what I’m thinking of You wouldn’t get this from any other guy I just wanna tell you how I’m feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We’ve known each other for so long Your heart’s been aching but you’re too shy to say it Inside we both know what’s been going on We know the game and we’re gonna play it And if you ask me how I’m feeling Don’t tell me you’re too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you #RickAstley #NeverGonnaGiveYouUp #WheneverYouNeedSomebody #OfficialMusicVideo",
    videoId: 'Vdo Id 3',
    viewCountText: '3 views',
    publishedTimeText: "3 days ago",
    channelId: 'Channel Id 3',
    channelName: 'Channel Name 3',
    thumb: 'https://i.ytimg.com/vi/LSIOcCcEVaE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBNDqRcOPB0C-Q5FQ_5nYNEuNPmRg'
  }
]

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 12,
  margin: `0 10px 15px 10px`,
  background: isDragging ? "#FFD3D3" : "white",
  color: isDragging ? 'white' : 'black',
  border: `1px solid black`,
  fontSize: `20px`,
  borderRadius: `8px`,
  ...draggableStyle
})

export default function Compare(props: ICompareProps) {

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  const onDrageEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return

    const items = Array.from(characters)
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 0, newOrder)

    updateCharacters(items)
  }

  return (
    <div id='compare'>
      <p className='title'>
        Compare Contents
      </p>

      <DragDropContext onDragEnd={onDrageEnd}>
        <Droppable droppableId="characters" direction="horizontal">
          {(provided) => (

            <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {characters.map((item, index) => {
                return (

                  characters.length <= 3 && <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <section
                        className='characters-list'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <div className="characters-thumb">
                          <img src={item.thumb} alt={`${item.title} Thumb`} />
                        </div>
                        <h1>
                          {item.title}
                        </h1>
                        <h2>
                          {item.channelName}
                        </h2>
                        <p>
                          {
                            item.description.split(" ").length > 4
                              ? item.description.substring(0, 250) + "..."
                              : "..."
                          }
                        </p>
                        <footer>
                          <span>
                            {item.publishedTimeText}
                          </span>
                          <span>
                            {item.viewCountText}
                          </span>
                        </footer>
                      </section>
                    )}
                  </Draggable>

                );
              })}

              {provided.placeholder}

            </div>
          )}
        </Droppable>
      </DragDropContext>

    </div >
  )
}