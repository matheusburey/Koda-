import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavMenu from '../NavMenu.vue'

describe('NavMenu', () => {
  it('renders properly', () => {
    const wrapper = mount(NavMenu)
    expect(wrapper.text()).toContain('Home')
  })
})
