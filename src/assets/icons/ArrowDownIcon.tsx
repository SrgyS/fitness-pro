import styled from 'styled-components'

interface ArrowDownIconProps {
  color: string
  className?: string
}

const ArrowDownIconWrapper = styled.svg`
  color: ${props => props.color || 'black'};
`

export const ArrowDownIcon = ({ color }: ArrowDownIconProps) => {
  return (
    <ArrowDownIconWrapper>
      <svg
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    </ArrowDownIconWrapper>
  )
}
