// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props

  return (
    <div className="v-a-container">
      <h1 className="heading3">Vaccination by Age</h1>
      <PieChart width={800} height={400}>
        <Pie
          cx="70%"
          cy="40%"
          data={vaccinationByAgeDetails}
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontFamily: 'Roboto', fontSize: 15}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
