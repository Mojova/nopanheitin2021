import { render, screen } from '@testing-library/react'
import { RollResultView } from 'components/RollResult/RollResultView'

describe('RollResultView', () => {
    it('renders for a result', () => {
        const rollResult = [1, 2, 3]
        const {container} = render(<RollResultView successThreshold={7} doubleThreshold={10} rolls={rollResult} />)
        expect(container.children).toHaveLength(1)
    })
    it('doesn’t render for no result', () => {
        const {container} = render(<RollResultView successThreshold={7} doubleThreshold={10} rolls={[]} />)
        expect(container.children).toHaveLength(0)
    });
})
