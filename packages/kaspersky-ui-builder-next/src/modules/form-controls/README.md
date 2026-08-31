# Form Controls

Содержит команды редактора: undo/redo, сохранение, добавление, удаление и перемещение элементов.

`FormControls.tsx` — кнопки header; `use-form-controls.ts` — клавиатурные команды и drop; `tree.ts` — чистые операции дерева; `dnd.ts` — формат drag-and-drop.

Команды обращаются к History Store; функции tree.ts не зависят от React или экземпляра store. Сохранение передаётся callback-ом.
