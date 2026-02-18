export const tagsWithActions = `
  import { MultiSelectCheckBox } from '@kaspersky/hexa-ui'
  import { TextReducer } from '@kaspersky/hexa-ui/helpers'

  const OptionWrapper = styled.div\`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
  \`

  const Story = () => {
    const [options, setOptions] = useState<OptionType[]>(opts)
    const [editingTag, setEditingTag] = useState<OptionType | null>(null)
    const [hoveringOption, setHoveringOption] = useState<number | null>(null)

    const handleEdit = (selectedOpt: OptionType) => (e) => {
      e.stopPropagation()
      setEditingTag(selectedOpt)
    }

    const handleDelete = (selectedOpt: OptionType) => (e) => {
      e.stopPropagation()
      setOptions(prevOptions => {
        return prevOptions.filter(opt => opt.value !== selectedOpt.value)
      })
    }

    const handleTagNameChange = (value: string) => {
      setEditingTag(prev => {
        return {
          ...prev,
          label: value
        }
      })
    }

    const handleTagRename = () => {
      if (!editingTag) return

      setOptions((prevOptions) => {
        return prevOptions.map(opt => {
          if (opt.value === editingTag.value) {
            return editingTag
          } else {
            return opt
          }
        })
      })
      setEditingTag(null)
    }

    return (
      <div style={{width: '1000px'}}>
        <Select>
          {options.map((opt) => {
            return (
              <Select.Option
                key={opt.value}
                value={opt.value}
                label={opt.label}
                style={{ paddingRight: 5 }}
                onMouseEnter={() => setHoveringOption(opt.value)}
                onMouseLeave={() => setHoveringOption(null)}
              >
                <OptionWrapper>
                  <div style={{ width: '100%', paddingRight: 58, display: 'flex', alignItems: 'center' }}>
                    <MultiSelectCheckBox />
                    <TextReducer>
                      {opt.label}
                    </TextReducer>
                  </div>
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    display: 'flex',
                    gap: '4px',
                    visibility: opt.value === hoveringOption ? 'visible': 'hidden'
                  }}>
                    <ActionButton icon={<Edit />} onClick={handleEdit(opt)}/>
                    <ActionButton icon={<Delete />} onClick={handleDelete(opt)}/>
                  </div>
                </OptionWrapper>
              </Select.Option>
            )
          })}
        </Select>
        <Sidebar
          size="extraSmall"
          visible={Boolean(editingTag)}
          onClose={() => setEditingTag(null)}
          title="Edit tag"
          footer={
            <Button onClick={handleTagRename}>Apply</Button>
          }
        >
          <Field label="Tag name" control={<Textbox value={editingTag?.label} onChange={handleTagNameChange} />}/>
        </Sidebar>
      </div>
    )
  }
`
