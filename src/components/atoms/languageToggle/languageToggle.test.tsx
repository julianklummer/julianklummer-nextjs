import { fireEvent } from '@testing-library/react'
import { renderWithProviders } from 'test/utils/renderWithProviders'
import { LanguageToggle } from './LanguageToggle'

test('language toggle shows right language', () => {
  let { container } = renderWithProviders(<LanguageToggle />, {
    language: 'de'
  })
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button>
      English
    </button>
  `)

  container = renderWithProviders(<LanguageToggle />).container
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button>
      Deutsch
    </button>
  `)

  const element = container.firstChild
  if (element) {
    debugger
    fireEvent.click(element)
    expect(element).toHaveTextContent('English')
  } else {
    throw new Error('Element not found')
  }
})
