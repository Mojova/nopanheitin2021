
interface RollRowProps {
    index: number
    roll: number
    isSuccess: boolean
}

export const RollRow: React.FC<RollRowProps> = (props) => {
    const {roll, index, isSuccess} = props
    return (
        <tr>
            <td>{index + 1}.</td>
            <td>{roll}</td>
        </tr>
    )
}
