import React from 'react'
import heroBackground from './team/hero-background-v2.png'
import heroBackgroundMobile from './team/hero-background-mobile-v2.png'
import './HexaHeroWhite.css'

type HexaHeroProps = {
  action: React.ReactNode
}

/**
 * Standalone welcome Hero. Does not render, replace, or hide any other Welcome content.
 * The action is supplied by the original WelcomePage to keep its Storybook routing.
 */
export function HexaHero({ action }: HexaHeroProps) {
  return (
    <header className="hexa-visual-hero">
      <div className="hexa-visual-hero__picture" aria-hidden="true">
        <img
          src={heroBackground}
          width={1983}
          height={793}
          alt=""
          className="hexa-visual-hero__background"
          decoding="async"
        />
        <img
          src={heroBackgroundMobile}
          width={1040}
          height={775}
          alt=""
          className="hexa-visual-hero__mobile-background"
          decoding="async"
        />
      </div>

      <div className="hexa-visual-hero__content">
        <h1 className="hexa-visual-hero__title">Hexa UI</h1>
        <p className="hexa-visual-hero__description">
          Компоненты, инструменты и знания для продуктовых команд.
        </p>
        <div className="hexa-visual-hero__action">{action}</div>
      </div>
    </header>
  )
}
