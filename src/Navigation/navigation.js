import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from '../pages/Form'
import Dashboard from '../pages/Dashboard'
import TableContent from '../pages/TableContent'
import GeneralRequirement from '../pages/GeneralRequirement'
import Timeline from '../pages/Timeline'

// const Form = React.lazy(() => import("../pages/Dashboard"))
// const Dashboard = React.lazy(() => import("../pages/Form"))
// const  TableContent = React.lazy(() => import("../pages/TableContent"))
// const  GeneralRequirement = React.lazy(() => import("../pages/GeneralRequirement"))
// const Timeline = React.lazy(() => import("../pages/Timeline"))

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/tablecontent" element={<TableContent />} />
                <Route path="/generalRequirement" element={<GeneralRequirement />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation