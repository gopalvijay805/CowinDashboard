// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props

  return (
    <div className="v-g-container">
      <h1 className="heading2">Vaccination by gender</h1>
      <PieChart width={800} height={400}>
        <Pie
          cx="70%"
          cy="40%"
          data={vaccinationByGenderDetails}
          startAngle={140}
          endAngle={0}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc" />
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

export default VaccinationByGender
