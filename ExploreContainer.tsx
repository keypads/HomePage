import './ExploreContainer.css';
import React from 'react';
import { IonText, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { appsOutline, cubeOutline, cartOutline } from 'ionicons/icons';
import { Route } from 'react-router-dom';


interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div>
      <IonText>
        <h1>Brands</h1>
      </IonText>

      <div className="center">
        <input type="text" placeholder="Search" />
      </div>


      <IonCard className="card1">
        <IonCardHeader>
          <img src="https://www.logolynx.com/images/logolynx/19/19bf299a4559ab2b32892ddf95a1c467.jpeg"
            height="100"
            width="200" />
        </IonCardHeader>



        <IonCardContent>
          <b> Nike</b>
        </IonCardContent>
      </IonCard>




      <IonCard className="card1">
        <IonCardHeader>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmms.businesswire.com%2Fmedia%2F20160407005302%2Fen%2F518012%2F5%2F2525714_Champion_300res_brand_logo.jpg&f=1&nofb=1"
            height="100"
            width="200" />
        </IonCardHeader>

        <IonCardContent>
          <b>Champion</b>
        </IonCardContent>


      </IonCard>

      <IonCard className="card1">
        <IonCardHeader>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fgucci-logo-png-download-1920.png&f=1&nofb=1"
            height="100"
            width="200" />
        </IonCardHeader>

        <IonCardContent>
          <b>Gucci</b>
        </IonCardContent>


      </IonCard>

      <IonCard className="card1">
        <IonCardHeader>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-qaXQH8brdS8%2FUTJrGVjyDHI%2FAAAAAAAAABg%2FKTCk38iZJ9k%2Fs1600%2FLogo%2BPuma.jpg&f=1&nofb=1"
            height="100"
            width="200" />


        </IonCardHeader>


        <IonCardContent>
          <b>Puma</b>
        </IonCardContent>


      </IonCard>

      <IonCard className="card1">
        <IonCardHeader>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.refinedguy.com%2Fwp-content%2Fuploads%2F2013%2F08%2FSupreme-Logo.jpeg&f=1&nofb=1"
            height="100"
            width="200" />
        </IonCardHeader>

        <IonCardContent>
          <b>Supreme</b>
        </IonCardContent>


      </IonCard>
      <IonCard className="card1">
        <IonCardHeader>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2016%2F10%2FAdidas-Logo.jpg&f=1&nofb=1"
            height="100"
            width="200" />
        </IonCardHeader>

        <IonCardContent>
          <b>Adidas</b>
        </IonCardContent>


      </IonCard>


      {/* <IonTabs> */}
      {/* <IonRouterOutlet> */}

      {/* </IonRouterOutlet> */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="Home">
          <IonIcon icon={appsOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="cube">
          <IonIcon icon={cubeOutline} />
          <IonLabel>Fitting</IonLabel>
        </IonTabButton>

        <IonTabButton tab="cart">
          <IonIcon icon={cartOutline} />
          <IonLabel>Shopping Cart</IonLabel>
        </IonTabButton>


      </IonTabBar>

      {/* </IonTabs> */}
    </div >
  );
};



export default ExploreContainer;

