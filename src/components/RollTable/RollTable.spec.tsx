import { render, screen } from '@testing-library/react'
import { RollTable } from 'components/RollTable/RollTable'

describe('RollTable', () => {
    it('shows the results of a roll', () => {
        const roll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        render(<RollTable roll={roll} successThreshold={7} doubleThreshold={10} />)
        expect(screen.getByText('Noppa')).toBeInTheDocument()
        expect(screen.getByText('Tulos')).toBeInTheDocument()
        expect(screen.getByText('1.')).toBeInTheDocument()
        expect(screen.getByText('2.')).toBeInTheDocument()
        expect(screen.getByText('3.')).toBeInTheDocument()
        expect(screen.getByText('4.')).toBeInTheDocument()
        expect(screen.getByText('5.')).toBeInTheDocument()
        expect(screen.getByText('6.')).toBeInTheDocument()
        expect(screen.getByText('7.')).toBeInTheDocument()
        expect(screen.getByText('8.')).toBeInTheDocument()
        expect(screen.getByText('9.')).toBeInTheDocument()
        expect(screen.getByText('10.')).toBeInTheDocument()
    })
    it('shows nothing if there’s no roll', () => {
        render(<RollTable roll={[]} doubleThreshold={10} />)
        expect(screen.queryByText('Noppa')).not.toBeInTheDocument()
        expect(screen.queryByText('Tulos')).not.toBeInTheDocument()
    });
})
