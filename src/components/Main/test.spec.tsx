import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should be able to render the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /burk.dev/i })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should be able to render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#05092b' })
  })
})
