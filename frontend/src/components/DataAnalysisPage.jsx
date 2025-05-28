import React, { useState, useEffect } from 'react';
import Header from "./Header";
import DisplayChart from './Chart';


function DataAnalysisPage() {
    const [data, setData] = useState([]);
    const[params, setParams] = useState({ waterbody: "", analysisType: ""});

    const handleSubmit = ({ waterbody, analysisType }) => {
        setParams({waterbody, analysisType});
    };

    useEffect(() => {
        if(!params.waterbody || !params.analysisType) return;

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `/api/v1/water-quality-data?waterbody=${encodeURIComponent(
                        params.waterbody
                    )}`
                );
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log("Fetch error:", error);
            }
        };

        fetchData();
    }, [params]);

    return (
        <div>
            <Header onSubmit={handleSubmit} />
            <h2>Data Analysis for {params.waterbody}</h2>
            <DisplayChart data={data} analysisType={params.analysisType} />
        </div>
    );
}



export default DataAnalysisPage;