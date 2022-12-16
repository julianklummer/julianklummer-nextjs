import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { NavigationMenu } from './NavigationMenu'

test('renders StyledNavLink', () => {
  expect(
    render(
      <BrowserRouter>
        <NavigationMenu />
      </BrowserRouter>
    )
  ).toMatchInlineSnapshot(`
    {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <nav>
            <ul
              class="navigation-menu"
            >
              <li>
                <a
                  aria-current="page"
                  class="nav-link active"
                  href="/"
                >
                  Start
                </a>
              </li>
              <li>
                <a
                  class="nav-link"
                  href="/portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  class="nav-link"
                  href="/cv"
                >
                  CV
                </a>
              </li>
              <li>
                <a
                  class="nav-link"
                  href="/about"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </body>,
      "container": <div>
        <nav>
          <ul
            class="navigation-menu"
          >
            <li>
              <a
                aria-current="page"
                class="nav-link active"
                href="/"
              >
                Start
              </a>
            </li>
            <li>
              <a
                class="nav-link"
                href="/portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                class="nav-link"
                href="/cv"
              >
                CV
              </a>
            </li>
            <li>
              <a
                class="nav-link"
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>,
      "debug": [Function],
      "findAllByAltText": [Function],
      "findAllByDisplayValue": [Function],
      "findAllByLabelText": [Function],
      "findAllByPlaceholderText": [Function],
      "findAllByRole": [Function],
      "findAllByTestId": [Function],
      "findAllByText": [Function],
      "findAllByTitle": [Function],
      "findByAltText": [Function],
      "findByDisplayValue": [Function],
      "findByLabelText": [Function],
      "findByPlaceholderText": [Function],
      "findByRole": [Function],
      "findByTestId": [Function],
      "findByText": [Function],
      "findByTitle": [Function],
      "getAllByAltText": [Function],
      "getAllByDisplayValue": [Function],
      "getAllByLabelText": [Function],
      "getAllByPlaceholderText": [Function],
      "getAllByRole": [Function],
      "getAllByTestId": [Function],
      "getAllByText": [Function],
      "getAllByTitle": [Function],
      "getByAltText": [Function],
      "getByDisplayValue": [Function],
      "getByLabelText": [Function],
      "getByPlaceholderText": [Function],
      "getByRole": [Function],
      "getByTestId": [Function],
      "getByText": [Function],
      "getByTitle": [Function],
      "queryAllByAltText": [Function],
      "queryAllByDisplayValue": [Function],
      "queryAllByLabelText": [Function],
      "queryAllByPlaceholderText": [Function],
      "queryAllByRole": [Function],
      "queryAllByTestId": [Function],
      "queryAllByText": [Function],
      "queryAllByTitle": [Function],
      "queryByAltText": [Function],
      "queryByDisplayValue": [Function],
      "queryByLabelText": [Function],
      "queryByPlaceholderText": [Function],
      "queryByRole": [Function],
      "queryByTestId": [Function],
      "queryByText": [Function],
      "queryByTitle": [Function],
      "rerender": [Function],
      "unmount": [Function],
    }
  `)
})
