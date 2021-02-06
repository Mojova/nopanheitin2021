import { render, screen } from '@testing-library/react'
import { ResultText } from 'components/RollResult/ResultText/ResultText'

describe('ResultText', () => {
    it('renders singular', () => {
        render(<ResultText amount={1} singular={'testi'} plural={'testiä'}/>)
        expect(screen.getByText('1')).toBeVisible()
        expect(screen.getByText('testi!')).toBeVisible()
    });
    it('renders plural', () => {
        render(<ResultText amount={5} singular={'testi'} plural={'testiä'}/>)
        expect(screen.getByText('5')).toBeVisible()
        expect(screen.getByText('testiä!')).toBeVisible()
    });
});
