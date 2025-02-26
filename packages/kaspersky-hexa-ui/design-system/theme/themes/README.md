## Variables ( common tokens )

### Border radius & Spacings

* Размерная сетка является единой для всех тем внутри проекта ui-kit
* Как правило компонент наследует размеры от базовой light темы в остальных темах
* Существует базовая величина ( `QUANTUM` ) в 2 units, которая умножается на определенное число элементов в размерной сетке. 
* В случае с `SPACES` имеем размерную сетку до 64px, `BORDER_RADIUS` - 16px 

Пример использования размерной сетки в компоненте Button 

```javascript

// design-system/theme/themes/light/button.ts

export const buttonSize: Record<Size, SizeConfig> = {
  extraLarge: {
    padding: `${SPACES[5]}px ${SPACES[12]}px`, <-- padding 10px 24px
    height: `${SPACES[24]}px`, <-- height 48px
    borderRadius: `${BORDER_RADIUS[4]}px`, <-- borderRadius 8px
    ...getTextSizes(TextTypes.BTM2)
  },
  large: {
    padding: `${SPACES[4]}px ${SPACES[10]}px`,
    height: `${SPACES[20]}px`,
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.BTM3)
  },
 ...
}


```

### Sizings

Размер компонентов представлен следующей сеткой:

```javascript

export enum Size {
  ExtraSmall= 'extraSmall',
  Small = 'small',
  Medium = 'medium', 
  Large = 'large',
  ExtraLarge = 'extraLarge',
}

```
> У компонента не обязательно должно быть наличие всех размеров. При разработке следует ориентироваться на Figma макеты

Данная размерная сетка носит абстрактный характер с точки зрения хранимых внутри каждого размера значений.
Так, для компонента Button размер `medium` является 

```padding: `${SPACES[3]}px ${SPACES[6]}px`,
    height: `${SPACES[16]}px`,
    borderRadius: `${BORDER_RADIUS[2]}px`,
    ...getTextSizes(TextTypes.BTM3)```

Для компонента Input размер `medium` это

```padding: `${SPACES[3]}px ${SPACES[4]}px`,
    height: `${SPACES[16]}px`,
    borderRadius: `${BORDER_RADIUS[3]}px`,
    ...getTextSizes(TextTypes.BTR3)```
    
Ниже приведен пример заданных размеров для компонента Button

```javascript
// design-system/theme/themes/light/button.ts

export const buttonSize: Record<Size, SizeConfig> = {
  extraLarge: {
    padding: `${SPACES[5]}px ${SPACES[12]}px`,
    height: `${SPACES[24]}px`,
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.BTM2)
  },
  large: {
    ...
  },
  medium: {
    ...
  },
  small: {
    ...
  }
}


```