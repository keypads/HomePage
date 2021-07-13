import './ExploreContainer.css';
import React from 'react';
import { IonText, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { appsOutline, cubeOutline, cartOutline } from 'ionicons/icons';
import { Route } from 'react-router-dom';


interface ContainerProps { }

const MeasuringComponent: React.FC<ContainerProps> = () => {
    return (
        <div>
            <IonText>
                <h1>Measuring</h1>
            </IonText>

            <div className="center">
                <input type="text" placeholder="Search" />
            </div>



        </div >
    );
};



export default MeasuringComponent;

