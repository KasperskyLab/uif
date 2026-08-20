import { Boxes, paletteIcons, Search } from "../components/icons.tsx"
import { useMemo, useState } from "react"
import type { ComponentRegistry } from "../domain/component-registry.ts"
import { writeDragPayload } from "./dnd.ts"

interface PaletteProps {
  registry: ComponentRegistry
  onAdd: (componentType: string) => void
}

export function Palette({ registry, onAdd }: PaletteProps) {
  const [query, setQuery] = useState("")
  const groups = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    const components = registry.components.filter((component) => {
      const haystack = [component.title, component.type, component.category, component.description, ...component.keywords]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
      return !normalized || haystack.includes(normalized)
    })
    const result = new Map<string, typeof components>()
    for (const component of components) {
      const category = component.category || "Другое"
      result.set(category, [...(result.get(category) ?? []), component])
    }
    return [...result.entries()].sort(([left], [right]) => {
      const leftIndex = registry.categoryOrder.indexOf(left)
      const rightIndex = registry.categoryOrder.indexOf(right)
      return (leftIndex < 0 ? 999 : leftIndex) - (rightIndex < 0 ? 999 : rightIndex)
    })
  }, [query, registry])

  return (
    <aside className="editor-panel palette-panel">
      <div className="panel-heading">
        <div>
          <span className="eyebrow">Компоненты</span>
          <h2>Палитра</h2>
        </div>
        <span className="count-badge">{registry.components.length}</span>
      </div>
      <label className="search-field">
        <Search size={15} />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Найти компонент" />
      </label>
      <div className="palette-scroll">
        {groups.map(([category, components]) => (
          <section className="palette-group" key={category}>
            <h3>{category}</h3>
            <div className="palette-items">
              {components.map((component) => {
                const PaletteIcon = component.icon ? paletteIcons[component.icon] ?? Boxes : Boxes
                return (
                <button
                  className="palette-item"
                  draggable
                  key={component.type}
                  onClick={() => onAdd(component.type)}
                  onDragStart={(event) => writeDragPayload(event, { kind: "palette", componentType: component.type })}
                  type="button"
                >
                  <span className="palette-icon"><PaletteIcon size={16} /></span>
                  <span>
                    <strong>{component.title}</strong>
                    <small>{component.type}</small>
                  </span>
                </button>)
              })}
            </div>
          </section>
        ))}
        {!groups.length && <div className="empty-inline">Ничего не найдено</div>}
      </div>
    </aside>
  )
}
