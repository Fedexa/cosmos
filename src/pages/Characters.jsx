import { Flex, Box } from '@chakra-ui/react';
import SaintsTab from '../components/UI/SaintsTab';
import ComingSoon from '../components/UI/ComingSoon';
import CardWrapper from '../components/UI/CardWrapper';
import ShakaMeditate from '../images/ShakaMeditation.png';

const Characters = () => {
  return (
    <CardWrapper>
      <Flex
        flexDir='column'
        textAlign='center'
        justifyContent='center'
        alignItems='center'
        wrap='wrap'
      >
        <SaintsTab />
        <ComingSoon
          text={<Box>'Pick your Saint'</Box>}
          src={ShakaMeditate}
        />
      </Flex>
    </CardWrapper>
  );
};

export default Characters;
