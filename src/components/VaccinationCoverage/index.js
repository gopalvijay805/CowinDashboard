import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  const {vaccinationCoverageDetails} = props

  return (
    <div className="v-c-container">
      <h1 className="heading1">Vaccination Coverage</h1>
      <BarChart
        width={800}
        heigh={350}
        data={vaccinationCoverageDetails}
        margin={{top: 5}}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 17,
            fontFamily: 'Roboto',
          }}
        />

        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.4,
            fontSize: 17,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            fontFamily: 'Roboto',
            fontSize: 10,
            textAlign: 'center',
            paddingTop: 18,
          }}
        />

        <Bar dataKey="dose1" name="Dose1" fill="#5a8dee" barSize="20%" />

        <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}
export default VaccinationCoverage
