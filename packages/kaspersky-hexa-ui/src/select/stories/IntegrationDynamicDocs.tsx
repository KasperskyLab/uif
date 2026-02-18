import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  code {
    font-weight: bold;
  }
`

const Docs: React.FC = () => (
  <Wrapper id="dropdown-troubleshooting">
    <h3>Режимы загрузки данных</h3>
    <ol>
      <li>
        <strong>Автоматическая загрузка всех данных</strong> (режим по умолчанию)
        <ul>
          <li>При открытии выпадающего списка загружаются все данные частично в фоновом режиме.</li>
          <li>Подходит для небольшого объёма данных (до 100–200 элементов).</li>
        </ul>
      </li>
      <li>
        <strong>Частичная загрузка по скроллу (виртуализация)</strong>
        <ul>
          <li>Данные загружаются порциями при прокрутке списка.</li>
          <li>Активируется через пропс <code>virtual=true</code>.</li>
          <li>Оптимизирован для больших списков (тысячи элементов).</li>
        </ul>
      </li>
    </ol>
  </Wrapper>
)

export default Docs
