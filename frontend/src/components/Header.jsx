import React, { useState } from "react";
import Button from 'react-bootstrap/Button';




function Header({ onSubmit }) {
    const [waterbody, setWaterbody]= useState("");
    const [analysisType, setAnalysisType] = useState("");

    const waterbodyOptions = [
        "KOLLERU LAKE KOKKIRAYALANKA (V), KAILALUR (M)",
        "KONDAKARLA-AAVA LAKE, PARAWADA PHARMA CITY, VISHAKHAPATNAM",
        "PULICATE LAKE , NELLORE DIST",
        "CHENGAMBAKAM TANK IN SRI CITY SEZ",
        "ANNAMAYYA PROJECT ON CHEYYERU",
        "ANUMANAPALLE CHERUVU",
        "BRAMHASAGAR",
        "DALI TANK",
        "GACCHAKAYALA PORA (LAGOON)",
        "GANGINENI CHERUVU",
        "INTERU SWAMPS",
        "KATTAMANCHI CHERUVU",
        "KRISHNA MANGROVES",
        "MID PENNAR RESERVOIR",
        "NAUPADA SWAMPS",
        "P .S. CHINNAIAH PALEM",
        "PATATEKALLI CHERUVU",
        "PATHAKOTHA CHERUVU",
        "PEDDA CHERUVU",
        "SANGAMESWARA BACKWATERS",
        "SOMASILA BACK WATER",
        "TATIPUDI RESERVOIR",
        "UPPALANKA MUDFLATS",
        "UPPALAPADU TANK",
        "YERRAKALUVA RESERVOIR",
        "BORBEEL NO. 1 , RAM NAGAR, DIGBOI, PUBLIC WATER SUPPLY, TINSUKIA",
        "BORDOIBAM BEELMUKH BIRD SANCTUARY, DHEMAJI",
        "BORSOLA BEEL, SARABBHATTI, GUWAHATI",
        "DALONI BEEL NEAR JOGIGHOPA, ASSAM",
        "DEEPAR BEEL AT BORAGAON NEAR IASST, GUWAHATI, ASSAM",
        "DEEPAR BEEL, ASSAM",
        "DIPLAI BEEL AT SILGARA, KOKRAJHAR",
        "HOLUDUNGA BEEL NEAR GAI NADI/RIVER AT SOMARAJAN, DHEMA JI",
        "KAMALABARI LAKE INSIDE KAMALABARI CHILDREN,S PARK, GELEKY",
        "KAMALPUR BEEL, KAMALPUR",
        "MALINI BEEL NEAR INDUTRIAL AREA AT RAMNAGAR",
        "MER BEEL AT MADHABPUR, ASSAM",
        "PARASHALI BEEL AT DEMORIA",
        "SAMAGURI BEEL IN NAGAON DISTRICT",
        "SILSAKO BEEL, CHACHAL, GUWAHATI",
        "SON BEEL WATER AT KARIMGANJ",
        "SORU SOLA BEEL, PALTAN BAZAR, GUWAHATI",
        "BASKANDI POND INSIDE THE BASKANDI MADRASA, BASKANDI, ASSAM",
        "BISHNU PUSKAR PUKHURI OF HAYAGRIB MADHAB TEMPLE, HAJO, ASSAM",
        "BOR BEEL AT JAKAI., ASSAM",
        "BORPUKHURI AT SONARI",
        "BORPUKHURI, NAZIRA, ASSAM",
        "BOTODRIVA SATRA POND, NAGAON, ASSAM",
        "CHAND DUBI BEEL, CHAND DUBI, ASSAM",
        "DIGHALI PUKHURI, GUWAHATI, ASSAM",
        "ELANGABEEL SYSTEM POND (CONNECTED TO R. KOLANG), ASSAM",
        "GALA BEEL AT DERGAON, ASSAM",
        "GANGA PUKHURI, NALBARI (GORDON SCHOOL), ASSAM",
        "GAURISAGAR TANK, GAURISAGAR, ASSAM",
        "GOPHUR TANK, GOPHUR, ASSAM",
        "HORDAI PUKHURI, CHARAIDEW, ASSAM",
        "JAIPAL PUKHURI, SIPAJHAR, ASSAM",
        "JORPUKHURI AT UZANBAZAR (UGRATALA TEMPLE)",
        "MAHAMAYA MANDIR PUKHURI, ASSAM",
        "NETAI PUKHURI AT NETAI PUKHURI",
        "PADUMPUKHURI, TEZPUR, ASSAM",
        "POND WATER FROM RAMKRISHNA MISSION AT HAILAKANDI",
        "RAJADINIA PUKHURI AT ABHAYAPURI, ASSAM",
        "RAJAPUKHURI AT GAURIPUR, ASSAM",
        "RAJMAW PUKHURI, JORHAT, ASSAM",
        "SARAN BEEL, ASSAM",
        "SIVASAGAR TANK (BORPUKHURI) NEAR SIVADOL, ASSAM",




    ];

    const analysisOptions = [
        "Temperature",
        "Dissolved Oxygen",
        "pH",
        "Condutivity",
        "BOD",
        "Nirate N + Nitrite N",
        "Fecal Coliform",
        "Total Coliform",

    ];

    //So users selects both options, lets out alert to make sure they do so
    const handleSubmit = () => {
        if (waterbody && analysisType) {
            onSubmit({ waterbody, analysisType });
        } else {
            alert("YOU NEED TO SELECT BOTH OPTIONS");
        }
    };


    return (
        
    <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", gap: "10px"}}>
        
        <label>
            <strong style={{ fontSize: "22px"}}>Waterbody:{" "}</strong>
            <select value={waterbody} onChange={(e) => setWaterbody(e.target.value)}>
                <option value="">Select Waterbody Name!</option>
                {waterbodyOptions.map((name) => (
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}

            </select>
        </label>
    
   
        <label style={{ marginLeft: "20px" }}>
            <strong style={{ fontSize: "22px" }}> Analysis Type:{" "}</strong>
            <select
                value={analysisType}
                onChange={(e) => setAnalysisType(e.target.value)}
            >
                <option value="">Select Analysis Type!</option>
                {analysisOptions.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </label>
       

        <Button onClick={handleSubmit} style={{ marginLeft: "20px", padding: "10px 24px", borderRadius: "5px" }}>
            Submit
        </Button>
       
    </div>
    );
}







//const Header = () => {
//  return (
//    <header className="App-header">
//        <h1 style={{ fontSize: '48px', postion: 'fixed', textAlign: 'center', bottom: '50px', fontWeight:'bold' }}>
 //       Water Quality Analysis
 //       </h1>
  //      <h5>
   //       Welcome!
   //     </h5>
  //    <div className="button-container">
   //    <button style={{ fontSize: '18px', marginRight: '10px'}}>Select Water Waterbody Name</button>
   //     <button style={{ fontSize: '18px'}}>Select Analysis Type</button>
   //   </div>
  //      <Button style={{ color: 'black', backgroundColor: 'lightblue'}}>Submit</Button>
//
  //    </header>
 // );
//}

export default Header;