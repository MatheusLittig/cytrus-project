export function RadealChart(): JSX.Element {
  return (
    <svg
      viewBox="0 0 36 36"
      style={{
        display: 'block',
        margin: '10px auto',
        maxWidth: '25%',
        maxHeight: '250px'
      }}
    >
      <path
        style={{
          stroke: '#F59E0B',
          fill: 'none',
          strokeWidth: 2.8,
          strokeLinecap: 'round',
          animation: 'progress 1s ease-out forwards'
        }}
        strokeDasharray="90, 100"
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text
        x="12"
        y="21.5"
        color="white"
        style={{ fill: '#F59E0B', fontSize: '0.60em', fontWeight: 'bold' }}
      >
        61
      </text>
    </svg>
  )
}
