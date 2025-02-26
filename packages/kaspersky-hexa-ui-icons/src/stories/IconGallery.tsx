import * as React from 'react'
import { Icons } from '../types'
import CloseButton from '../16/Cross'
import IconLazy from './components/IconLazy'
import './iconGallery.css'
import './components/iconInfoModal.css'
import { CopyBlock } from 'react-code-blocks'

export const IconGallery = (args) => {
  const folderSizes = ['8', '12', '16', '24', '32', '40', '48']

  const SeparatedIcons = Icons.map(el => {
    const separatedIcon = el.split('/')
    return {
      size: separatedIcon[0],
      name: separatedIcon[1]
    }
  })
  const [searchName, setSearchName] = React.useState('')
  const [filteredIcons, setFilteredIcons] = React.useState(SeparatedIcons)
  const [sizes, setSizes] = React.useState<[boolean]>(new Array(folderSizes.length).fill(true) as [boolean])

  const sizeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    sizes[event?.target.name] = !sizes[event?.target.name]
    setSizes([...sizes])
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value.toLowerCase())
  }

  React.useEffect(() => {
    setFilteredIcons(SeparatedIcons.filter(({ size, name }) => {
      if (!sizes[folderSizes.findIndex(el => el === size)]) {
        return false
      }
      return name.toLowerCase().indexOf(searchName) > -1
    }))
  }, [searchName, sizes])

  const [modalWindow, setModalWindow] = React.useState({
    visible: false,
    size: '8',
    name: 'Plus'
  })

  const openModalIconInfo = (size, name) => {
    modalWindow.visible = true
    modalWindow.name = name
    modalWindow.size = size
    setModalWindow({ ...modalWindow })
  }
  const closeModalIconInfo = () => {
    modalWindow.visible = false
    setModalWindow({ ...modalWindow })
  }

  return (<>
    <h1>Галерея</h1>
    <div className="icon-gallery">
      <p>Выберети размер иконки</p>
        {folderSizes.map((size, i) => (
          <label key={`icon${size}`}>
            <input type="checkbox" name={i.toString()} onChange={sizeChangeHandler} checked={sizes[i]} />
            {size}
          </label>
        ))}
      <p>Введите имя иконки</p>
      <input className="search searchName" placeholder="Поиск иконок" value={searchName} onChange={onChange}/>

      <div className="wrapper">
          {filteredIcons.map(({ name, size }, i) => (
            <IconLazy key={name + i} name={name} size={size} onClick={() => openModalIconInfo(size, name)} color={args.color}/>
          ))}
      </div>
      <div
        className={`infoModal ${modalWindow.visible ? '' : 'hidden'}`}
      >
        <div className="modalContent">
          <div className="header">
            <h2>{modalWindow.size}/{modalWindow.name}</h2>
            <CloseButton onClick={closeModalIconInfo} color="black" />
          </div>
          <div className="body">
            <IconLazy size={modalWindow.size} name={modalWindow.name} />
            <ul>
              <li className="propertiesItem">
                <b>Size</b>
                <p>{modalWindow.size}</p>
              </li>
            </ul>
          </div>
          <div className="usage">
            <h3>Использование</h3>
            <div className="copyBlock">
              <CopyBlock
                text={`import { ${modalWindow.name} } from '@kaspersky/hexa-ui-icons/${modalWindow.size}'`}
                language="typescript"
                theme="Dracula"
                showLineNumbers={false}
                codeBlock={true}
              />
              <CopyBlock
                text={`const { ${modalWindow.name} } = require('@kaspersky/hexa-ui-icons/${modalWindow.size}')`}
                language="typescript"
                theme="Dracula"
                showLineNumbers={false}
                codeBlock={true}
              />
            </div>
            <div className="copyBlock">
              <CopyBlock
                text={`<${modalWindow.name} />`}
                language="typescript"
                theme="Dracula"
                showLineNumbers={false}
                codeBlock={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
