import React from "react";
import { IonCard, IonCardContent, IonCardHeader, 
         IonCardSubtitle, IonCardTitle, IonContent, IonButton,
         IonTitle, IonNavLink, IonList,
         IonText, IonCol, IonGrid, IonRow, IonInput, IonItem } from '@ionic/react';

import './HypotheticallyInvest.css'


const HypotheticallyInvest: React.FC = () => {
    return (
        
        <>
        
        <IonContent>

            <IonGrid>

                <IonRow>
                    <IonCol>
                    <IonCard>
                        <IonCardHeader>
                        <IonCardTitle>Investment strategies</IonCardTitle><br/>
                        <IonCardSubtitle>Lesson 2</IonCardSubtitle>
                        </IonCardHeader>
                    </IonCard>
                    </IonCol>    
                </IonRow>


                <IonRow>
                    <IonCol>
                        <h1 id="title">How much would you Hypothetically invest in the company</h1>
                    </IonCol>    
                </IonRow>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <IonRow>
                    <IonCol>
                        <div className="ion-padding-start">
                            <IonInput label="USD" counter={true} class="inputUSD" color="#CCFF00"></IonInput>
                        </div>
                    </IonCol>    
                </IonRow>

                   

              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/>


                <IonRow>
                    <IonCol>
                        <IonButton href="/" id="secondaryButton" routerDirection="forward">Back</IonButton>
                        <IonButton href="/" id="primaryButton" routerDirection="forward">Simulate</IonButton>
                    </IonCol>
                </IonRow>


            </IonGrid>



        </IonContent>

    


        </>
    );
};

export default HypotheticallyInvest;