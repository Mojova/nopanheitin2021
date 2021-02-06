import { render, screen } from '@testing-library/react'
import { RollRow } from 'components/RollRow/RollRow'

describe('RollRow', () => {
    it('shows the results of one die', () => {
        render(<table>
            <tbody>
            <RollRow index={2} roll={7} successType={'SUCCESS'}/>
            </tbody>
        </table>)
        expect(screen.getByText('3.')).toBeInTheDocument()
        expect(screen.getByText('7')).toBeInTheDocument()
    })
})
