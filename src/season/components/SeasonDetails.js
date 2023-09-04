import React from 'react'
import moment from 'moment-timezone'
import Table from 'react-bootstrap/Table';

class SeasonDetails extends React.Component {

  render() {
    const {
      start, ended, numGamesPlayed, totalCombinedAnnualTocCalculated, kittyCalculated} = this.props.value;

    const startDate = moment({ year : start[0], month : start[1]-1, day : start[2] }).tz('America/Chicago').format('MM/DD/YYYY')
    const endDate = moment({ year : ended[0], month : ended[1]-1, day : ended[2] }).tz('America/Chicago').format('MM/DD/YYYY')

    return (
      <div>
        <Table borderless={true} size="sm">
          <tbody>
          <tr>
            <td>Start date</td>
            <td>{startDate}</td>
          </tr>
          <tr>
            <td>End date</td>
            <td>{endDate}</td>
          </tr>
          <tr>
            <td>Games</td>
            <td>{numGamesPlayed}</td>
          </tr>
          <tr>
            <td>Kitty</td>
            <td>${kittyCalculated}</td>
          </tr>
          <tr>
            <td>Annual TOC</td>
            <td>${totalCombinedAnnualTocCalculated}</td>
          </tr>
          </tbody>
        </Table>

      </div>
    );
  }
}

export default SeasonDetails
