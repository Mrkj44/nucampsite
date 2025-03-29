import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInforScreen = ({ route }) => {
    const { campsite } = route.params; // Extracting campsite from route params
    return <RenderCampsite campsite={campsite} />;
};

export default CampsiteInforScreen;