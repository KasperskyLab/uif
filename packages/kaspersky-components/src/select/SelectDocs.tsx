import React from 'react'
import { Subtitle } from '@storybook/addon-docs'
import styled from 'styled-components'
import { colors } from '@design-system/tokens'

const Wrapper = styled('div')`
  padding: 12px 0;
  margin-top: 30px;
  border-top: 1px solid ${colors.lga300};

  code {
    font-weight: bold;
  }
`

const Docs: React.FC = () => (
  <Wrapper id="dropdown-troubleshooting">
    <Subtitle>Troubleshooting багов с выпадащим списком</Subtitle>
    <h3>Известные проблемы:</h3>
    <ol>
      <li>Выпадающий список режется из-за overflow: hidden родителя;</li>
      <li>Выпадающий список перекрывается блоком с большим z-index;</li>
      <li>Выпадающий список остается на месте при скролле.</li>
    </ol>
    <p>
      По умолчанию, выпадающий список рендерится в блоке родителя компонента{' '}
      <code>&lt;Select /&gt;</code>, в следствии чего может перекрываться
      другими блоками или «резаться» из-за свойства <code>overflow</code>.
    </p>
    <p>
      Решением проблемы будет рендерить список вне родительского блока, например
      в body.
    </p>
    <p>
      Для этого нужно использовать свойства <code>getPopupContainer</code> или{' '}
      <code>usePortal</code>:
    </p>
    <p>
      <code>&lt;Select usePortal /&gt;</code> или{' '}
      <code>
        &lt;Select getPopupContainer=&#123;() =&#62; document.body&#125; /&gt;
      </code>
    </p>
    <p>
      Записи аналогичны. <code>usePortal</code> служит для более короткой
      записи.
    </p>
    <p>
      Открытый выпадающий список будет следовать только за скроллом элемента,
      указанного в <code>getPopupContainer</code>. Таким образом, если{' '}
      <code>&lt;Select /&gt;</code> лежит внутри блока с полосой прокрутки, а
      выпадающий список в <code>body</code> - список будет оставаться на месте и
      не следовать за скроллом. В таких случаях, рекомендуется отказаться от
      использования <code>usePortal/getPopupContainer</code>.
    </p>
    <p>
      Для edge case когда нельзя отказаться от <code>usePortal</code> и{' '}
      <code>&lt;Select /&gt;</code> лежит внутри блока с полосой прокрутки,
      добавлено свойство <code>closeOnParentScroll</code>, благодаря которому
      выпадающий список будет закрываться при скролле.
    </p>
    <p>
      <code>&lt;Select closeOnParentScroll /&gt;</code>
    </p>
  </Wrapper>
)

export default Docs
