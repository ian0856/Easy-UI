import { PropType, defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
import { IconProps } from './type'
import './base.scss'
import { resolveIconSize } from '../../utils/resolveIconSize'

export type { IconProps } from './type'

export const EyIcon = defineComponent({
  name: 'EyIcon',
  props: {
    name: {
      type: String as PropType<IconProps['name']>,
      required: true
    },
    size: {
      type: [String, Number] as PropType<IconProps['size']>,
      default: '1em'
    },
    color: {
      type: String as PropType<IconProps['color']>,
      default: 'currentColor'
    },
    class: {
      type: String as PropType<IconProps['class']>,
      default: ''
    }
  },
  emits: {
    click: () => true,
    mouseEnter: () => true,
    mouseLeave: () => true,
  },
  setup(props, {emit, attrs}) {
    return () => {
      const size = resolveIconSize(props.size)

      const handleClick = (e: MouseEvent) => {
        emit('click')
        if (attrs.onClick && typeof attrs.onClick === 'function') {
          attrs.onClick(e)
        }
      }
      
      const handleMouseEnter = (e: MouseEvent) => {
        emit('mouseEnter')
        if (attrs.onMouseEnter && typeof attrs.onMouseEnter === 'function') {
          attrs.onMouseEnter(e)
        }
      }
      
      const handleMouseLeave = (e: MouseEvent) => {
        emit('mouseLeave')
        if (attrs.onMouseLeave && typeof attrs.onMouseLeave === 'function') {
          attrs.onMouseLeave(e)
        }
      }
      
      return (
        <span 
          class={['ey-icon', props.class]}
          style={{
            fontSize: size,
            color: props.color,
          }}
          onClick={handleClick}
          onMouseenter={handleMouseEnter}
          onMouseleave={handleMouseLeave}
        >
          <Icon 
            icon={props.name}
            width={size}
            height={size}
          />
        </span>
      )
    }
  }
})

