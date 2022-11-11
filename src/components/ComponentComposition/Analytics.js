import React from 'react'

import AnalyticsCard from "../ComponentComposition/AnalyticsCard";
import TableAnalytics from "../ComponentComposition/TableAnalytics";

export default function Analytics(props) {
  return (
    <div style={{height:'100%',overflow:'hidden'}}>
        {props.showTable && <TableAnalytics />}
            {!props.showTable && <AnalyticsCard />}
    </div>
  )
}
