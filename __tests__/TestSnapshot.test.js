import React from 'react'
import {render, cleanup} from '@testing-library/react'
import App from '../src/App'

 afterEach(cleanup)
 
 test('should take a snapshot', () => {
    const { asFragment } = render(<App Content="abc"/>)
    
    expect(asFragment()).toMatchSnapshot()
})