import {
  Box,
  Button,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import { useState, useEffect, Fragment } from 'react';
import logo from '../../images/Logo.png';
import logoSS from '../../images/SS-Logo.webp';
import useInput from '../hooks/useInput';

const buttonProps = {
  bg: 'linear-gradient(to bottom, #FFFFCC, #DAA520)',
  color: '#704214',
  borderRadius: '15px',
  fontFamily: 'ARCADECLASSIC',
  fontWeight: 'extrabold',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  width: '200px',
};

const LoginModal = (props) => {
  const [changeEmailLabel, setChangeEmailLabel] =
    useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 6);

  useEffect(() => {
    if (enteredEmailIsValid && enteredPasswordIsValid) {
      setFormIsValid(true);
    }
  }, [
    enteredEmailIsValid,
    enteredPasswordIsValid,
    setFormIsValid,
  ]);

  const clickLoginHandler = () => {
    setChangeEmailLabel(true);
  };

  const clickRegisterHandler = () => {
    setChangeEmailLabel(false);
  };

  const formLoginHandler = (event) => {
    // event.preventDefault();

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    if (formIsValid) {
      setFormIsValid(true);
      resetEmailInput();
      resetPasswordInput();
    }
    console.log(userData);
  };

  const closeModalHandler = () => {
    props.onClosingModal();
  };

  return (
    <Fragment>
      <Box
        onClick={closeModalHandler}
        position='fixed'
        top='0'
        left='0'
        width='100%'
        height='100vh'
        zIndex='10'
        bg='rgba(0,0,0,0.75)'
        flexWrap='wrap'
      />
      <Box
        h={{ base: '400px', xl: '400px' }}
        display='flex'
        flexDirection='column'
        width={{
          base: '340px',
          sm: '450px',
          md: '500px',
          lg: '500px',
          xl: '500px',
        }}
        position='fixed'
        bg='linear-gradient(to top, #B3E0F2, #002855)'
        top='50%' // Center the modal vertically
        left='50%' // Center the modal horizontally
        transform='translate(-50%, -50%)' // Center the modal both horizontally and vertically
        zIndex='110'
        alignItems='center'
        justifyContent='center'
        border='3px solid'
        borderRadius='15px'
        borderColor='rgb(13, 32, 61)'
      >
        <Flex
          mb='10px'
          flexDir={{
            base: 'column',
            sm: 'column',
            md: 'row',
            lg: 'row',
          }}
        >
          <Button
            onClick={clickRegisterHandler}
            sx={buttonProps}
          >
            Register
          </Button>
          <Button
            onClick={clickLoginHandler}
            sx={buttonProps}
          >
            Login
          </Button>
        </Flex>
        <form
          onSubmit={formLoginHandler}
          style={{ marginTop: '5px' }}
          display='flex'
          flexDir='column'
        >
          <Flex
            my='5px'
            w='380px'
            justifyContent={{
              base: 'center',
              lg: 'space-between',
            }}
            flexDir={{
              base: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
            }}
            alignItems='center'
          >
            <label
              htmlFor='email'
              style={{
                width: '25%',
                textAlign: 'center',
                color: 'rgb(13, 32, 61)',
                fontWeight: 'bolder',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              {!changeEmailLabel ? (
                <Box
                  fontFamily='ARCADECLASSIC'
                  textAlign='left'
                >
                  Email
                </Box>
              ) : (
                <Box
                  fontFamily='ARCADECLASSIC'
                  textAlign='left'
                >
                  Username
                </Box>
              )}
            </label>
            <input
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
              type='email'
              id='email'
              style={{
                fontFamily: 'ARCADECLASSIC',
                width: '75%',
                border: emailHasError
                  ? '2px solid #b40e0e'
                  : '2px solid rgb(13, 32, 61)',
                backgroundColor: emailHasError
                  ? '#fddddd'
                  : '#3C6280',
                color: emailHasError
                  ? 'rgb(13, 32, 61)'
                  : '#F2CE80',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            />
          </Flex>
          {emailHasError && (
            <Text>
              {!changeEmailLabel ? (
                <Box color='red'>Enter a valid Email.</Box>
              ) : (
                <Box color='red'>Enter a valid Username.</Box>
              )}
            </Text>
          )}
          <Flex
            my='5px'
            w='380px'
            justifyContent={{
              base: 'center',
              lg: 'space-between',
            }}
            flexDir={{
              base: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
            }}
            alignItems='center'
          >
            <label
              htmlFor='password'
              style={{
                width: '25%',
                textAlign: 'center',
                color: 'rgb(13, 32, 61)',
                fontWeight: 'bolder',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Box
                textAlign='left'
                fontFamily='ARCADECLASSIC'
              >
                Password
              </Box>
            </label>
            <input
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
              type='password'
              id='password'
              style={{
                fontFamily: 'ARCADECLASSIC',
                width: '75%',
                border: passwordHasError
                  ? '2px solid #b40e0e'
                  : '2px solid rgb(13, 32, 61)',
                backgroundColor: passwordHasError
                  ? '#fddddd'
                  : '#3C6280',
                color: passwordHasError
                  ? 'rgb(13, 32, 61)'
                  : '#F2CE80',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              }}
            />
          </Flex>
          {passwordHasError && (
            <Text>
              <Box color='red'>Enter a valid password.</Box>
            </Text>
          )}
          <Flex
            flexDir='column'
            my='3px'
            alignItems='center'
          >
            <Box p='8px'>
              <Image
                src={logoSS}
                h='40px'
                ml='10px'
                alt='Saint-Seiya'
              />
              <Image
                src={logo}
                h='20px'
                alt='Cosmo-Warriors'
              />
            </Box>
          </Flex>
          <Flex justifyContent='center'>
            <Button
              type='submit'
              h='50px'
              isDisabled={!formIsValid}
              sx={buttonProps}
            >
              Log In
            </Button>
          </Flex>
        </form>
      </Box>
    </Fragment>
  );
};

export default LoginModal;
