import { useState } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import { getInterestList, setInterestList } from '../../components/addcompare/DataList'
import './Compare.css'
import { IoMdRemove } from 'react-icons/io'
import { HiOutlineExternalLink } from 'react-icons/hi'

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 12,
  margin: `0 10px 15px 10px`,
  background: isDragging ? "var(--red)" : "white",
  color: isDragging ? 'white' : 'black',
  border: `1px solid black`,
  fontSize: `20px`,
  borderRadius: `8px`,
  ...draggableStyle
})

export default function Compare() {

  const [isItems, setIsItems] = useState(false)
  var getItems: any[] = getInterestList()
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
    if (characters.length == 0) {
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
      <header>
        <p className='title'>
          Compare contents
        </p>
        <button className='btn-primary' onClick={() => { onGetCompare() }}>Compare</button>
      </header>

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
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <button onClick={() => { updateCharacters(onRemove(item)) }} className='btn-icon remove-btn' ><IoMdRemove /></button>
                          <button onClick={() => { console.log(index) }} className='btn-icon link-vdo-btn'><a href={`https://www.youtube.com/watch?v=${item.videoId}`} target='_blank' rel='noreferrer'><HiOutlineExternalLink /></a></button>
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