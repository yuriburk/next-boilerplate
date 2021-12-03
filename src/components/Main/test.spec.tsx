import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should be able to render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /burk.dev/i })
    ).toBeInTheDocument()
  })
})
