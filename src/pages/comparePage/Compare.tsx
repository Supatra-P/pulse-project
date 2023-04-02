import { useState } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import { getInterestList, setInterestList } from '../../components/addcompare/DataList'
import './Compare.css'

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

export default function Compare() {

  const [isItems, setIsItems] = useState(false)
  var getItems:any[] = getInterestList()
  const [items, setItems] = useState(getItems)
  setInterestList(items)
  const [characters, updateCharacters] = useState(items)
  const [actionRemove, setActionRemove] = useState(false)

  const onDrageEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return

    const items = Array.from(characters)
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 0, newOrder)

    updateCharacters(items)
    setItems(items)
  }

  const onRemove = (item: any) => {
    let index = characters.indexOf(item);

    onGetCompare()
    setActionRemove(!actionRemove)
    if (index !== -1) { 
      characters.splice(index, 1)
    }
    if (characters.length == 0){
      items.splice(0, getItems.length)
    }
    setItems(characters)
    return characters
  }

  const onGetCompare = () => {
    setIsItems(!isItems)
    setItems(getInterestList())
  }

  return (
    <div id='compare'>
      <p className='title'>
        Compare Contents
      </p>
      <button onClick={() => {onGetCompare()}}>start compare~</button>

      <DragDropContext onDragEnd={onDrageEnd}>
        <Droppable droppableId="characters" direction="horizontal">
          {(provided) => (

            <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {characters.map((item, index) => {
                return (

                  <Draggable key={item.videoId} draggableId={item.videoId} index={index}>
                    {(provided, snapshot) => (
                      <section
                        className='characters-list'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                          <button onClick={() => { updateCharacters(onRemove(item))}} style={{ textAlign: 'end', fontSize: '.6rem' }} ><a style={{ color: 'red' }} href={`#${index}`}>remove</a></button>
                          <button onClick={() => {console.log(index)}} style={{ textAlign: 'end', fontSize: '.6rem' }} ><a style={{ color: 'blue' }} href={`#${index}`}>link to yt</a></button>
                        </div>
                        <div className="characters-thumb">
                          <img src={item.thumbnails[0].url} alt={`${item.title} Thum`} />
                        </div>
                        <h1>
                          {item.title}
                        </h1>
                        <h2>
                          {item.channelName}
                        </h2>
                        <p>
                          {item.description?.substring(0, 250) || ''}
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