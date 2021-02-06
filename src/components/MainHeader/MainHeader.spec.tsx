import { render, screen } from '@testing-library/react'
import { MainHeader } from 'components/MainHeader/MainHeader'


describe('MainHeader', () => {
    it('renders a header', () => {
        render(<MainHeader>Test</MainHeader>)
        expect(screen.getByText('Test')).toBeVisible()
    });
})
