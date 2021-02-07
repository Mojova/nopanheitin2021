import userEvent from '@testing-library/user-event'
import { RollResult } from 'common/rollDice'
import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from 'App';

describe('App', () => {
    const result: RollResult = {
        dice: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        successes: 5,
        successesWithoutDoubles: 4,
        ones: 1
    }
    it('renders the app', () => {
        const mockRoller = jest.fn().mockReturnValue(result)
        render(<App rollDiceFn={mockRoller}/>);
        const input = screen.getByLabelText('Noppien määrä')
        const button = screen.getByText(/Heitä/)
        expect(screen.getByText(/Exalted-nopanheitin/)).toBeInTheDocument()
        expect(input).toBeInTheDocument()
        expect(button).toBeInTheDocument()
        expect(screen.queryByText('Noppa')).not.toBeInTheDocument()
        expect(screen.queryByText('Tulos')).not.toBeInTheDocument()
        expect(screen.queryByText('onnistumista!')).not.toBeInTheDocument()
        expect(screen.queryByText('vahinkoa!')).not.toBeInTheDocument()
        userEvent.type(input, '10')
        userEvent.click(button)
        expect(screen.getByText('onnistumista!')).toBeInTheDocument()
        expect(screen.getByText('vahinkoa!')).toBeInTheDocument()
        expect(screen.getByText('Noppa')).toBeInTheDocument()
        expect(screen.getByText('Tulos')).toBeInTheDocument()
    })
})
