import React from 'react'
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";



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
        "",




    ];

    const analysisOptions = [
        "Temperature Levels",
        "Dissolved Oxygen Levels",
        "pH Levels",
        "Condutivity Levels",
        "Biochemical Oxygen Demand Levels",
        "Nirate Levels",
        "Fecal Coliform Levels",
        "Total Coliform Levels",

    ];

    const handleSubmit = () => {
        if (waterbody && analysisType) {
            onSubmit({ waterbody, analysisType });
        } else {
            alert("YOU NEED TO SELECT BOTH OPTIONS");
        }
    }
};



//const Header = () => {
  return (
    <header className="App-header">
        <h1 style={{ fontSize: '48px', postion: 'fixed', textAlign: 'center', bottom: '50px', fontWeight:'bold' }}>
        Water Quality Analysis
        </h1>
        <h5>
          Welcome!
        </h5>
      <div className="button-container">
        <button style={{ fontSize: '18px', marginRight: '10px'}}>Select Water Waterbody Name</button>
        <button style={{ fontSize: '18px'}}>Select Analysis Type</button>
      </div>
        <Button style={{ color: 'black', backgroundColor: 'lightblue'}}>Submit</Button>

      </header>
  );
//}

export default Header;