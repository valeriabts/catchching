import React, {useState} from "react";
import { IonCard, IonCardHeader, 
         IonCardSubtitle, IonCardTitle, IonContent, IonButton,
         IonTitle,
         IonGrid,
         IonRow,
         IonCol,
         IonText,  } from '@ionic/react';

import Graphic from "../components/Graphic";
import Buttons from "../components/Buttons";
import './SimulatorDesign.css'

import PrimaryButton from "../components/Buttons";



const Simulator: React.FC = () => {
   const [data,setData] = useState([
      { year: 2010, count: 26 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ]);

    const confirm = ()=>{
      setData([
        { year: 2010, count: 36 },
        { year: 2011, count: 50 },
        { year: 2012, count: 5 },
        { year: 2013, count: 25 },
        { year: 2014, count: 52 },
        { year: 2015, count: 60 },
        { year: 2016, count: 48 },
      ])
    }
        


    return (

      <>
      
      <IonContent>

        <IonGrid>
          <br></br><br></br>
          <IonRow>
            <IonCol>
              <IonTitle>Growth projection </IonTitle>
            </IonCol>
          </IonRow>
          <br></br>
          <IonRow>
            <IonCol>
              <IonText>Explore how your virtyal money is doing without any financial risk</IonText>
            </IonCol>
          </IonRow>



          <IonCard>
            <IonRow>
              <IonCol>
                  <IonCardHeader>
                  <IonCardTitle>Nvidia Corporation (NVDA)</IonCardTitle>
                  </IonCardHeader>

                  <IonCardSubtitle>$ 1002.70</IonCardSubtitle>

                  <Graphic data={data}/>
                  
                  <br></br>
                  <IonRow>
                    <IonCol>
                       <IonButton expand="block" href="/">Add to my portfolio</IonButton>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonCol>
                      <IonButton expand="block" onClick={confirm}>Simulate another account</IonButton>
                    </IonCol>
                  </IonRow>

              </IonCol>
            </IonRow>
            </IonCard>










          

        
        
        </IonGrid>




      </IonContent>
      </>  
    );
};

export default Simulator;



/*
    import Chart from 'chart.js/auto'


interface ContainerProps { }


const Graphic: React.FC<ContainerProps> = () => {
  return (
      <>
      <title>Chart.js example</title>
      <div>
          <canvas id="acquisitions"></canvas>
      </div>
      </>
  );  
};



(async function() {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];
  
    var myChart = new Chart(
      document.getElementById('acquisitions')!,

      
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  })();

  

export default Graphic;
*/