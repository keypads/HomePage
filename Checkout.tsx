import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CheckoutComponent from '../components/CheckoutComponent';
import './Home.css';

const Checkout: React.FC = () => {
    return (
        <IonPage>
            {/* <IonHeader> 
      <IonToolbar> 
      <IonTitle>Blank</IonTitle> 
       </IonToolbar> 
       </IonHeader> *
       <IonContent fullscreen> 
       <IonHeader collapse="condense">
       <IonToolbar> 
       <IonTitle size="large">Blank</IonTitle> 
       </IonToolbar> 
       </IonHeader> */}
            <CheckoutComponent />
            {/* </IonContent> */}
        </IonPage >
    );
};

export default Checkout;
