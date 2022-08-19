import { Box } from 'components/Box/Box';
import { Counter } from '../Counter';
import { DropDownMenu } from '../DropDownMenu';
import { colorPickerOptions } from 'colors';
import ColorPicker from '../ColorPicker/ColorPicker';

function App() {
  return (
    <>
      <Box as="main" bg="white" px={4}>
        <Counter />
      </Box>
      <Box as="main" bg="white" px={4} py={6}>
        <DropDownMenu />
      </Box>
      <Box>
        <ColorPicker options={colorPickerOptions} />
      </Box>
    </>
  );
}

export default App;
