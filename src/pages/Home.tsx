import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
//import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";

const Home: React.FC = () => {
  const [image, setImage] = useState<any>("");
  const takePicture = async () => {
    const cameraResult = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    setImage(cameraResult.webPath);

    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
    console.log(image);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div>Basic Camera App</div>
        <IonButton onClick={() => takePicture()}>Click Me</IonButton>
        <IonImg src={image}></IonImg>
      </IonContent>
    </IonPage>
  );
};

export default Home;
