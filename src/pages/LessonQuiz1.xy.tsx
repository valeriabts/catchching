import React from "react";
import { IonCard, IonCardContent, IonCardHeader, 
         IonCardSubtitle, IonCardTitle, IonContent, IonButton,
         IonTitle, IonNavLink,
         IonText, IonCol, IonGrid, IonRow } from '@ionic/react';

import './LessonQuiz1.css'


const Leccion: React.FC = () => {
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
                        <h1 id="title">The green dilema</h1>
                    </IonCol>    
                </IonRow>

                <IonRow>
                    <IonCol>
                        <p id="text">Samrt thinking!</p>
                    </IonCol>    
                </IonRow>
                

                <br/><br/><br/><br/><br/><br/>

                <IonRow>
                    <IonCol>
                    <IonCard id="centralCard">
                        <IonCardHeader>
                        <IonCardTitle>Invest with conditions</IonCardTitle> 
                        </IonCardHeader>
                    <IonCardContent>
                        You’re actively influencing corporate behavior. <br/><br/>
                        You’re ready to align your investments with your values to drive positive change!
                    </IonCardContent>
                    </IonCard>
                    </IonCol>
                </IonRow>


              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <IonRow>
                    <IonCol>
                        <IonButton expand="block" href="/HypotheticallyInvest" routerDirection="forward">Understood</IonButton>
                    </IonCol>
                </IonRow>


            </IonGrid>



        </IonContent>

    


        </>
    );
};

export default Leccion;