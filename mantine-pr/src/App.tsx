import { useState } from 'react';
import {
  AppShell,
  Burger,
  Flex,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';
import ButtonComponent from './components/Buttons';
import TextComponent from './components/Text';

function App() {
  const [currentComponent, setCurrentComponent] =
    useState<string>('Component1');

  const [opened, { toggle }] = useDisclosure();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex
          justify="space-between"
          align="center"
          style={{ padding: '10px 20px' }}
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>맨틴 튜토</div>
          <Button size="sm" variant="link" onClick={toggleColorScheme}>
            {computedColorScheme === 'dark' ? <FaSun /> : <FaMoon />}
          </Button>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md" style={{ gap: '10px' }}>
        <Button
          onClick={() => setCurrentComponent('component1')}
          style={{ margin: '5px' }}
        >
          텍스트 컴포넌트
        </Button>
        <Button
          onClick={() => setCurrentComponent('component2')}
          style={{ margin: '5px' }}
        >
          버튼 컴포넌트
        </Button>
      </AppShell.Navbar>
      <AppShell.Main>
        {currentComponent === 'component1' ? (
          <TextComponent />
        ) : (
          <ButtonComponent />
        )}
      </AppShell.Main>
      <AppShell.Footer zIndex={opened ? 'auto' : 201}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio non
        molestiae
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
